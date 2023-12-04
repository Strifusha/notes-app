import {combineReducers, applyMiddleware} from 'redux'
import {notesReducer} from './reducers/notes'
import {createStore} from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  notes: notesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
