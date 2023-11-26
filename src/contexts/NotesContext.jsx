import {createContext, useContext} from 'react'

const NotesContext = createContext({
  isNote: '',
  setIsNote: () => {},
})

export const useNotesContext = () => useContext(NotesContext)

export default NotesContext
