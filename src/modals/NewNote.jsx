import '../styles/NewNote.css'
import {useState} from 'react'
import {useLocalization} from '../localization/LocalizationContext'
import {useEffect} from 'react'

function NewNote({onClose, selectedNote}) {
  const [myName, setMyName] = useState('')
  const [myTitle, setMyTitle] = useState('')
  const [myText, setMyText] = useState('')
  const [tags, setTags] = useState('')
  const [isPrivate, setIsPrivate] = useState('')
  const [myColor, setMyColor] = useState('')

  const {name, title, text, privateText, color, myTags, addNote} = useLocalization()
  const handleNameChange = event => {
    setMyName(event.target.value)
  }
  const handleTitleChange = event => {
    setMyTitle(event.target.value)
  }

  const handleTextChange = event => {
    setMyText(event.target.value)
  }

  const handleIsPrivateChange = () => {
    setIsPrivate(prevIsPrivate => !prevIsPrivate)
  }

  const handleIColorChange = event => {
    setMyColor(event.target.value)
  }

  const handleInputChange = event => {
    const formattedTags = event.target.value.replace(/\s/g, ',')
    setTags(formattedTags)
  }
  useEffect(() => {
    if (selectedNote) {
      setMyName(selectedNote.owner)
      setMyTitle(selectedNote.title)
      setMyText(selectedNote.text)
      setTags(selectedNote.tags.join(', '))
      !selectedNote.isPublic && setIsPrivate(true)
    }
  }, [selectedNote])
  // const resetStates = () => {
  //   setMyName('')
  //   setMyTitle('')
  //   setMyText('')
  //   setTags('')
  //   setIsPrivate('')
  //   setMyColor('')
  //   // onClose()
  // }
  return (
    <div className="modal-overlay">
      <div className="newNote">
        <button className="closeBtn" onClick={onClose}>
          &times;
        </button>
        <input
          className="newName"
          value={myName}
          onChange={handleNameChange}
          type="text"
          placeholder={name}
        />
        <input
          className="newTitle"
          type="text"
          value={myTitle}
          placeholder={title}
          onChange={handleTitleChange}
        />
        <textarea
          className="newText"
          placeholder={text}
          value={myText}
          onChange={handleTextChange}
        />
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
            <input type="checkbox" onChange={handleIsPrivateChange} checked={isPrivate} />
          </label>
          <label htmlFor="color" className="newColor">
            {color}
            <input type="color" onChange={handleIColorChange} value={myColor} />
          </label>
        </div>
        <button type="button" onClick={onClose} className="submitNewNote">
          {addNote}
        </button>
      </div>
    </div>
  )
}

export default NewNote
