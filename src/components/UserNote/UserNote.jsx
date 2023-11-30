import './UserNote.css'
import {TiDeleteOutline} from 'react-icons/ti'
import {CiEdit} from 'react-icons/ci'
import {MdReadMore} from 'react-icons/md'
import DeleteNote from '../../modals/DeleteNote'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useNotesContext} from '../../contexts/NotesContext'

function UserNote({onEdit, showDetails = true, ...props}) {
  const {title, owner, text, color, isPublic, id, favorite, tags} = props.note
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const {setIsNote} = useNotesContext()

  const navigate = useNavigate()
  const bgColor = {
    background: color,
  }

  const handleNavigation = () => {
    navigate(`/notes/${id}`)
  }

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true)
  }

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false)
  }

  const moveToFavorite = () => {
    setIsFavorite(!isFavorite)
    setIsNote(prevNotes =>
      prevNotes.map(note => (note.id === id ? {...note, favorite: !favorite, key: note.id} : note))
    )
  }

  return (
    <article className="articleNote" style={bgColor}>
      <h3 className="noteOwner"> {owner} </h3>
      {showDetails && <MdReadMore className="note-details" onClick={handleNavigation} />}
      {isPublic ? (
        <div>
          <p
            className={`favourite-icon ${favorite ? 'myFavorite' : ''}`}
            style={bgColor}
            onClick={moveToFavorite}>
            &#x2764;
          </p>
          <p className="public">(Public)</p>
        </div>
      ) : (
        <div>
          {showDetails && <TiDeleteOutline onClick={openDeleteModal} className="delete-icon" />}
          {showDetails && <CiEdit onClick={onEdit} className="edit-icon" />}
          <p className="private">(Private)</p>
        </div>
      )}
      <h2 className="noteTitle">{title}</h2>
      <p className="noteText">{text}</p>
      {!showDetails && (
        <div className="tags-container">
          {tags.map(tag => (
            <p className="tags" key={tag}>
              {tag}
            </p>
          ))}
        </div>
      )}
      {isDeleteModalOpen && <DeleteNote onClose={closeDeleteModal} />}
    </article>
  )
}

export default UserNote
