import { createContext } from 'react'

interface Props {}

interface INotesContainerProps {}

// let questionsFromStorage

// if (process.browser) {
//   const hasStorage = localStorage.getItem('question')
//   questionsFromStorage = hasStorage ? JSON.parse(hasStorage) : []
// }

const NotesContainerContext = createContext({} as INotesContainerProps)

const NotesContainerProvider: React.FC = ({ children }) => {
  return <NotesContainerContext.Provider value={}>{children}</NotesContainerContext.Provider>
}

export { NotesContainerProvider, NotesContainerContext }
