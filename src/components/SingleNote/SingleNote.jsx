import {useParams} from 'react-router-dom'
import NavigationBar from '../NavigationBar/NavigationBar'
import {useEffect, useState} from 'react'
import UserNote from '../UserNote/UserNote'
import './SingleNote.css'

function SingleNote() {
  const [noteDetails, setNoteDetails] = useState(null)
  const {NOTE_ID} = useParams()
  useEffect(() => {
    getDetailsNote()
  }, [])

  const getDetailsNote = async () => {
    const token = localStorage.getItem('authToken')
    const url = `https://dull-pear-haddock-belt.cyclic.app/notes?id=${NOTE_ID}`
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
          throw new Error('Failed to get notes details')
        }
        return response.json()
      })
      .then(data => {
        setNoteDetails(data)
      })
      .catch(error => {
        console.error('Error during fetch:', error.message)
      })
  }

  return (
    <div>
      <NavigationBar />
      <div className="note-ovelay">
        {noteDetails && <UserNote note={noteDetails} showDetails={false} />}
      </div>
    </div>
  )
}

export default SingleNote
