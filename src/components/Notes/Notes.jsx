import UserNote from '../UserNote/UserNote'
import NewNote from '../../modals/NewNote'
import NavigationBar from '../NavigationBar/NavigationBar'
import './Notes.css'
import {useState} from 'react'
import {useLocalization} from '../../localization/LocalizationContext'
import {useNotesContext} from '../../contexts/NotesContext'
import {useEffect} from 'react'

function Notes() {
  const {addNote} = useLocalization()
  const [isModalOpen, setIsModalOpen] = useState('')
  const {isNote, setIsNote} = useNotesContext()
  const [selectedNote, setSelectedNote] = useState('')

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || []
    if (storedNotes.length === 0) {
      const nextNotes = isNote.map((note, index) => {
        return {...note, id: index + 1, favorite: false}
      })
      setIsNote(nextNotes)
    } else {
      setIsNote(storedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(isNote))
  }, [isNote])

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
        {isNote.map(note => (
          <UserNote note={{...note}} key={note.id} onEdit={() => openEditModal(note)} />
        ))}
        {isModalOpen && <NewNote onClose={closeModal} selectedNote={selectedNote} />}
      </div>
    </div>
  )
}

export default Notes
