const initialState = {
  notes: [
    {
      color: '#7e77fb',
      isPublic: false,
      owner: 'David',
      tags: ['cars', 'fun'],
      text: 'Cars, more than mere machines, embody freedom, adventure, and innovation. They are the vessels of our journeys, the symbols of our aspirations, and the catalysts for connecting people across vast distances. In their design and performance, cars encapsulate the spirit of human ingenuity, propelling us forward into a world of possibilities and endless horizons.',
      title: 'my pation',
    },
    {
      color: '#ef61e1',
      isPublic: false,
      owner: 'Suzan',
      tags: ['poem'],
      text: 'Poetry, an art form distilled into words, serves as a kaleidoscope of human emotions and experiences.',
      title: 'I love poetry!',
    },
    {
      color: '#030dc8',
      isPublic: true,
      owner: 'Peter',
      tags: ['trip', 'summer', 'vacation', 'beach', 'drinks'],
      text: 'The golden sunsets paint the sky with hues of orange and pink, casting a warm glow over the tranquil waters. Seagulls dance in the salty breeze, while palm trees sway to the rhythm of the ocean melody.',
      title: 'hello from Florida!',
    },
    {
      color: '#12bfb1',
      isPublic: true,
      owner: 'Monica',
      tags: ['flowers', 'garden'],
      text: 'Flowers, nature poetry in vibrant hues, silently speak the language of beauty. Each delicate petal and graceful stem tells a tale of life fleeting moments, reminding us to appreciate the ephemeral and find joy in the simplest of blooms. In their diverse forms and fragrances, flowers embody nature artistry, captivating hearts and uplifting spirits.',
      title: 'my flowers',
    },
  ],
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.payload],
      }
    case 'ADD_ID_TO_NOTE':
      return {
        ...state,
        notes: action.payload,
      }
    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
      }
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload ? {...note, favorite: !note.favorite} : note
        ),
      }
    default:
      return state
  }
}
export const addNotesIdsActionCreator = notes => ({
  type: 'ADD_ID_TO_NOTE',
  payload: notes.map((note, index) => ({...note, id: index + 1, favorite: false})),
})

export const addNoteActionCreator = newNote => ({
  type: 'ADD_NOTE',
  payload: newNote,
})

export const deleteNoteActionCreator = idToDelete => ({
  type: 'DELETE_NOTE',
  payload: idToDelete,
})

export const noteRequest = userId => dispatch => {
  setTimeout(() => {
    dispatch({
      type: 'ADD_USER_ID',
      payload: userId,
    })
  }, 2000)
}
