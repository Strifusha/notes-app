import UserNote from '../UserNote/UserNote'
import NewNote from '../../modals/NewNote'
import NavigationBar from '../NavigationBar/NavigationBar'
import './Notes.css'
import {useState, useEffect} from 'react'
import {useLocalization} from '../../localization/LocalizationContext'
import {useSelector, useDispatch} from 'react-redux'

function Notes() {
  const {addNote} = useLocalization()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedNote, setSelectedNote] = useState('')
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes.notes)

  const getPublicNotes = async () => {
    const token = localStorage.getItem('authToken')
    const url = 'https://dull-pear-haddock-belt.cyclic.app/notes?type=public'

    await fetch(url, {
      method: 'GET',
      headers: {
        mode: 'no-cors',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch public notes')
        }
        return response.json()
      })
      .then(data => {
        data.length !== notes.length &&
          fetchData(data) &&
          localStorage.setItem('notes', JSON.stringify(data))
      })
      .catch(error => {
        console.error('Error during fetch:', error.message)
      })
  }

  const fetchData = data => {
    data.map(note => {
      dispatch({
        type: 'ADD_NOTE',
        payload: note,
      })
    })
  }

  useEffect(() => {
    getPublicNotes()
  }, [])

  const resetSelectedNote = () => {
    setSelectedNote({
      title: '',
      text: '',
      tags: [],
      color: '',
      isPublic: false,
    })
  }

  const openEditModal = note => {
    console.log(note, 'NOTE!!!')
    setSelectedNote(note)
    setIsModalOpen(true)
  }

  const openModal = () => {
    resetSelectedNote()
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="notes-page">
      <NavigationBar />
      <button onClick={openModal} className="addNote" type="button">
        {addNote}
      </button>
      <div id="allNotes">
        {notes
          .filter(note => note.isPublic)
          .map(note => (
            <UserNote note={{...note}} key={note.id} onEdit={() => openEditModal(note)} />
          ))}
        {isModalOpen && <NewNote onClose={closeModal} selectedNote={selectedNote} />}
      </div>
    </div>
  )
}

export default Notes
