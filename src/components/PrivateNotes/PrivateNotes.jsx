import NavigationBar from '../NavigationBar/NavigationBar'
import UserNote from '../UserNote/UserNote'
import NewNote from '../../modals/NewNote'
import {useEffect, useState} from 'react'

function PrivateNotes() {
  const [allPrivateNotes, setAllPrivateNotes] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedNote, setSelectedNote] = useState('')

  useEffect(() => {
    getPrivateNote()
  }, [])

  const getPrivateNote = async () => {
    const token = localStorage.getItem('authToken')
    const url = 'https://dull-pear-haddock-belt.cyclic.app/notes?type=personal'
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
          throw new Error('Failed to show private notes')
        }
        return response.json()
      })
      .then(data => {
        setAllPrivateNotes(data)
      })
      .catch(error => {
        console.error('Error during fetch:', error.message)
      })
  }

  // const resetSelectedNote = () => {
  //   setSelectedNote({
  //     title: '',
  //     text: '',
  //     tags: [],
  //     color: '',
  //     isPublic: false,
  //   })
  // }
  const openEditModal = note => {
    setIsModalOpen(true)
    setSelectedNote({
      title: note.title,
      text: note.text,
      tags: note.tags,
      color: note.color,
      isPublic: note.isPublic,
      id: note.id,
    })
  }
  const closeEditModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className="notes-page">
      <NavigationBar />
      <div id="allNotes">
        {allPrivateNotes.map(note => (
          <UserNote note={{...note}} key={note.id} onEdit={() => openEditModal(note)} />
        ))}
        {isModalOpen && <NewNote onClose={closeEditModal} selectedNote={selectedNote} />}
      </div>
    </div>
  )
}
export default PrivateNotes
