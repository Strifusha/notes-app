import NavigationBar from '../NavigationBar/NavigationBar'
import {useNotesContext} from '../../contexts/NotesContext'
import UserNote from '../UserNote/UserNote'

function Favorite() {
  const {isNote} = useNotesContext()
  const favoriteNotes = isNote.filter(note => note.favorite === true)
  return (
    <div className="notes-page">
      <NavigationBar />
      <div id="allNotes">
        {favoriteNotes.map(note => (
          <UserNote note={{...note}} key={note.id} />
        ))}
      </div>
    </div>
  )
}

export default Favorite
