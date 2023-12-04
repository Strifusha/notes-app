import NavigationBar from '../NavigationBar/NavigationBar'
import {useSelector} from 'react-redux'
import UserNote from '../UserNote/UserNote'

function Favorite() {
  const notes = useSelector(state => state.notes.notes)
  const favoriteNotes = notes.filter(note => note.favorite === true)

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
