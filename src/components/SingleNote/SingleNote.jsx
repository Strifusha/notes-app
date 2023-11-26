import {useParams} from 'react-router-dom'
import {useNotesContext} from '../../contexts/NotesContext'
import NavigationBar from '../NavigationBar/NavigationBar'
import './SingleNote.css'

function SingleNote() {
  const {id} = useParams()
  const {isNote} = useNotesContext()
  const {title, owner, text, color, tags, isPublic} = isNote[+id - 1]
  const bgColor = {
    background: color,
  }

  return (
    <div>
      <NavigationBar />
      <div className="note-ovelay">
        <div className="details" style={bgColor}>
          <h3 className="noteOwner"> {owner} </h3>
          {isPublic == true ? (
            <p className="public">(Public)</p>
          ) : (
            <p className="private">(Private)</p>
          )}
          <h2 className="noteTitle">{title}</h2>
          <p className="noteText">{text}</p>
          <div className="tags-container">
            {tags.map(tag => (
              <p className="tags" key={tag}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleNote
