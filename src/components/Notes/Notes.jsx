import UserNote from '../UserNote/UserNote'
import NewNote from '../../modals/NewNote'
import NavigationBar from '../NavigationBar/NavigationBar'
import './Notes.css'
import {useState} from 'react'
import {useLocalization} from '../../localization/LocalizationContext'
import {useContext} from 'react'
import AuthContext from '../../contexts/AuthContext'

function Notes() {
  let usersNotes = [
    {
      color: '#7e77fb',
      isPublic: false,
      owner: 'David',
      tags: ['cars', 'fun'],
      text: 'Cars, more than mere machines, embody freedom, adventure, and innovation. They are the vessels of our journeys, the symbols of our aspirations, and the catalysts for connecting people across vast distances. In their design and performance, cars encapsulate the spirit of human ingenuity, propelling us forward into a world of possibilities and endless horizons.',
      title: 'my pation',
    },
    {
      color: 'blue',
      isPublic: false,
      owner: 'Suzan',
      tags: ['poem'],
      text: 'Poetry, an art form distilled into words, serves as a kaleidoscope of human emotions and experiences.',
      title: 'I love poetry!',
    },
    {
      color: 'yellow',
      isPublic: true,
      owner: 'Peter',
      tags: ['trip', 'summer', 'vacation', 'beach', 'drinks'],
      text: 'The golden sunsets paint the sky with hues of orange and pink, casting a warm glow over the tranquil waters. Seagulls dance in the salty breeze, while palm trees sway to the rhythm of the ocean melody.',
      title: 'hello from Florida!',
    },
    {
      color: 'pink',
      isPublic: true,
      owner: 'Monica',
      tags: ['flowers', 'garden'],
      text: 'Flowers, nature poetry in vibrant hues, silently speak the language of beauty. Each delicate petal and graceful stem tells a tale of life fleeting moments, reminding us to appreciate the ephemeral and find joy in the simplest of blooms. In their diverse forms and fragrances, flowers embody nature artistry, captivating hearts and uplifting spirits.',
      title: 'my flowers',
    },
  ]
  const {isAuth, setIsAuth} = useContext(AuthContext)
  console.log(isAuth, setIsAuth)
  const {addNote} = useLocalization()
  const [isModalOpen, setIsModalOpen] = useState('')

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="notes-page">
      <NavigationBar />
      <button onClick={openModal} className="addNote" type="button">
        {addNote}
      </button>
      <div id="allNotes">
        {usersNotes.map((note, index) => (
          <UserNote note={{...note, id: index + 1}} key={index + 1} />
        ))}
        {isModalOpen && <NewNote onClose={closeModal} />}
      </div>
    </div>
  )
}

export default Notes
