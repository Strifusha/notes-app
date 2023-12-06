import './UserNote.css'
import {TiDeleteOutline} from 'react-icons/ti'
import {CiEdit} from 'react-icons/ci'
import {MdReadMore} from 'react-icons/md'
import DeleteNote from '../../modals/DeleteNote'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

function UserNote({onEdit, showDetails = true, ...props}) {
  const {title, owner, text, color, isPublic, id, favorite, tags} = props.note
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const dispatch = useDispatch()

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
    dispatch({
      type: 'TOGGLE_FAVORITE',
      payload: id,
    })
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
