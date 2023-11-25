import './UserNote.css'
import {TiDeleteOutline} from 'react-icons/ti'
import {CiHeart, CiEdit} from 'react-icons/ci'
import {MdReadMore} from 'react-icons/md'
import DeleteNote from '../../modals/DeleteNote'
// import SingleNote from '../SingleNote/SingleNote'
import {useState} from 'react'
import {Link} from 'react-router-dom'

function UserNote(props) {
  const {title, owner, text, color, tags, isPublic, id} = props.note
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState('')

  const bgColor = {
    background: color,
  }

  const handleNavigation = () => {
    console.log(props)
    return (
      <div key={id}>
        <p>{id}</p>
        <Link to={`/notes/${id}`}>go to note with id {id}</Link>
      </div>
    )
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
      <Link to={`/notes/${id}`}>
        <MdReadMore className="note-details" onClick={handleNavigation} />
      </Link>
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
