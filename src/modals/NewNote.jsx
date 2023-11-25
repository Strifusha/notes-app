import '../styles/NewNote.css'
import {useState} from 'react'
import {useLocalization} from '../localization/LocalizationContext'

function NewNote({onClose}) {
  const [tags, setTags] = useState('')
  const {name, title, text, privateText, color, myTags, addNote} = useLocalization()
  const handleInputChange = event => {
    const formattedTags = event.target.value.replace(/\s/g, ',')
    setTags(formattedTags)
  }
  return (
    <div className="modal-overlay">
      <div className="newNote">
        <button className="closeBtn" onClick={onClose}>
          &times;
        </button>
        <input className="newName" type="text" placeholder={name} />
        <input className="newTitle" type="text" placeholder={title} />
        <textarea className="newText" placeholder={text}></textarea>
        <input
          onChange={handleInputChange}
          value={tags}
          className="newTags"
          type="text"
          placeholder={myTags}
        />
        <div className="color-container">
          <label htmlFor="checkbox" className="newPrivate">
            {privateText}
            <input type="checkbox" />
          </label>
          <label htmlFor="color" className="newColor">
            {color}
            <input type="color" />
          </label>
        </div>
        <button type="button" className="submitNewNote">
          {addNote}
        </button>
      </div>
    </div>
  )
}

export default NewNote
