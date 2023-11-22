import {createContext, useContext} from 'react'
import en from './en'

const LocalizationContext = createContext(en)

export const useLocalization = () => useContext(LocalizationContext)

export default LocalizationContext
