const initialState = {
  notes: [],
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.payload],
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
    case 'RESET_NOTES':
      return initialState
    default:
      return state
  }
}

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
