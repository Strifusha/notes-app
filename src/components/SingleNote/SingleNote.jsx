import {useParams} from 'react-router-dom'
import {useNotesContext} from '../../contexts/NotesContext'
import NavigationBar from '../NavigationBar/NavigationBar'
import UserNote from '../UserNote/UserNote'
import './SingleNote.css'

function SingleNote() {
  const {id} = useParams()
  const {isNote} = useNotesContext()
  const detailsNote = isNote.filter(note => note.id === +id)

  return (
    <div>
      <NavigationBar />
      <div className="note-ovelay">
        {detailsNote.map(note => (
          <UserNote note={{...note}} key={note.id} showDetails={false} />
        ))}
      </div>
    </div>
  )
}

export default SingleNote
