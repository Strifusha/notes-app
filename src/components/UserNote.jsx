import '../styles/UserNote.css'
import '../styles/DeleteNote.css'
import {TiDeleteOutline} from 'react-icons/ti'
import {CiHeart, CiEdit} from 'react-icons/ci'
import DeleteNote from '../modals/DeleteNote'
import {useState} from 'react'

function UserNote(props) {
  const {title, owner, text, color, tags, isPublic} = props.note
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState('')

  const bgColor = {
    background: color,
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
      {isPublic == true ? (
        <div>
          <CiHeart className="favourite-icon" />
          <p className="public">(Public)</p>
        </div>
      ) : (
        <div>
          <TiDeleteOutline onClick={openDeleteModal} className="delete-icon" />
          <CiEdit className="edit-icon" />
          <p className="private">(Private)</p>
        </div>
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
      {isDeleteModalOpen && <DeleteNote onClose={closeDeleteModal} />}
    </article>
  )
}

export default UserNote
