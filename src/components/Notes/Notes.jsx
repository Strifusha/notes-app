import UserNote from '../UserNote/UserNote'
import NewNote from '../../modals/NewNote'
import NavigationBar from '../NavigationBar/NavigationBar'
import './Notes.css'
import {useState, useEffect} from 'react'
import {useLocalization} from '../../localization/LocalizationContext'
import {useSelector, useDispatch} from 'react-redux'
import {noteRequest, addNotesIdsActionCreator} from '../../redux/reducers/notes'
import {useCallback} from 'react'

function Notes() {
  const {addNote} = useLocalization()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedNote, setSelectedNote] = useState('')
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes.notes)

  const fetchData = useCallback(async () => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || []
    if (storedNotes.length === 0) {
      const nextNotes = notes.map((note, index) => ({
        ...note,
        id: index + 1,
        favorite: false,
      }))
      dispatch(addNotesIdsActionCreator(nextNotes))
      localStorage.setItem('notes', JSON.stringify(nextNotes))
    } else {
      dispatch(noteRequest())
    }
  }, [dispatch, notes])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const resetSelectedNote = () => {
    setSelectedNote({
      owner: '',
      title: '',
      text: '',
      tags: [],
      color: '',
      isPublic: false,
    })
  }

  const openEditModal = note => {
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
        {notes.map((note, index) => (
          <UserNote
            note={{...note, id: index + 1}}
            key={note.id}
            onEdit={() => openEditModal(note)}
          />
        ))}
        {isModalOpen && <NewNote onClose={closeModal} selectedNote={selectedNote} />}
      </div>
    </div>
  )
}

export default Notes
