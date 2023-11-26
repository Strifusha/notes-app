import './UserNote.css'
import {TiDeleteOutline} from 'react-icons/ti'
import {CiHeart, CiEdit} from 'react-icons/ci'
import {MdReadMore} from 'react-icons/md'
import DeleteNote from '../../modals/DeleteNote'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function UserNote({onEdit, ...props}) {
  const {title, owner, text, color, isPublic, id} = props.note
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
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

  return (
    <article className="articleNote" style={bgColor}>
      <h3 className="noteOwner"> {owner} </h3>
      <MdReadMore className="note-details" onClick={handleNavigation} />
      {isPublic == true ? (
        <div>
          <CiHeart className="favourite-icon" />
          <p className="public">(Public)</p>
        </div>
      ) : (
        <div>
          <TiDeleteOutline onClick={openDeleteModal} className="delete-icon" />
          <CiEdit onClick={onEdit} className="edit-icon" />
          <p className="private">(Private)</p>
        </div>
      )}
      <h2 className="noteTitle">{title}</h2>
      <p className="noteText">{text}</p>
      {isDeleteModalOpen && <DeleteNote onClose={closeDeleteModal} />}
    </article>
  )
}

export default UserNote
