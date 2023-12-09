import '../styles/NewNote.css'
import {useState} from 'react'
import {useLocalization} from '../localization/LocalizationContext'
import {useEffect} from 'react'

function NewNote({onClose, selectedNote}) {
  const [myTitle, setMyTitle] = useState('')
  const [myText, setMyText] = useState('')
  const [tags, setTags] = useState([])
  const [isPublic, setIsPublic] = useState(false)
  const [myColor, setMyColor] = useState('')

  const {title, text, publicText, color, myTags, addNote} = useLocalization()

  const handleTitleChange = event => {
    setMyTitle(event.target.value)
  }

  const handleTextChange = event => {
    setMyText(event.target.value)
  }

  const handleIsPublicChange = () => {
    setIsPublic(previsPublic => !previsPublic)
  }

  const handleIColorChange = event => {
    setMyColor(event.target.value)
  }

  const handleInputChange = event => {
    const newTags = event.target.value.split(' ')
    setTags(newTags)
  }

  const addNewNote = async () => {
    if (myTitle !== '') {
      return updateNote()
    }
    const data = {
      color: myColor,
      isPublic: isPublic,
      text: myText,
      tags: tags,
      title: myTitle,
    }

    const token = localStorage.getItem('authToken')
    const url = 'https://dull-pear-haddock-belt.cyclic.app/notes'
    await fetch(url, {
      method: 'POST',
      headers: {
        mode: 'no-cors',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to post public notes')
        }
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error('Error during fetch:', error.message)
      })
  }

  const updateNote = async () => {
    const data = {
      color: myColor,
      isPublic: isPublic,
      text: myText,
      tags: tags,
      title: myTitle,
    }
    const token = localStorage.getItem('authToken')
    const url = `https://dull-pear-haddock-belt.cyclic.app/notes?id=${selectedNote.id}`
    await fetch(url, {
      method: 'PUT',
      headers: {
        mode: 'no-cors',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update your note')
        }
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error('Error during fetch:', error.message)
      })
  }

  useEffect(() => {
    if (selectedNote) {
      setMyTitle(selectedNote.title)
      setMyText(selectedNote.text)
      setTags(selectedNote.tags.join(', '))
      !selectedNote.isPublic && setIsPublic(true)
    }
  }, [selectedNote])

  return (
    <div className="modal-overlay">
      <div className="newNote">
        <button className="closeBtn" onClick={onClose}>
          &times;
        </button>
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
            {publicText}
            <input type="checkbox" onChange={handleIsPublicChange} checked={isPublic} />
          </label>
          <label htmlFor="color" className="newColor">
            {color}
            <input type="color" onChange={handleIColorChange} value={myColor} />
          </label>
        </div>
        <button type="button" className="submitNewNote" onClick={addNewNote}>
          {addNote}
        </button>
      </div>
    </div>
  )
}

export default NewNote
