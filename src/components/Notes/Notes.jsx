import UserNote from '../UserNote/UserNote'
import NewNote from '../../modals/NewNote'
import NavigationBar from '../NavigationBar/NavigationBar'
import './Notes.css'
import {useState} from 'react'
import {useLocalization} from '../../localization/LocalizationContext'
import {useNotesContext} from '../../contexts/NotesContext'

function Notes() {
  const {addNote} = useLocalization()
  const [isModalOpen, setIsModalOpen] = useState('')
  const {isNote} = useNotesContext()
  const [selectedNote, setSelectedNote] = useState('')

  const openEditModal = note => {
    setSelectedNote(note)
    setIsModalOpen(true)
  }

  const openModal = () => {
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
        {isNote.map((note, index) => (
          <UserNote
            note={{...note, id: index + 1}}
            key={index + 1}
            onEdit={() => openEditModal(note)}
          />
        ))}
        {isModalOpen && <NewNote onClose={closeModal} selectedNote={selectedNote} />}
      </div>
    </div>
  )
}

export default Notes
