import React, { createContext, ReactNode, useState } from 'react'

interface Note {
  id: number
  noteDate: string
  description: string
}

interface INotesContainerProps {
  notes: Note[]
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

interface NotesProviderProps {
  children: ReactNode
}

let notesFromStorage: Note[]

if (process.browser) {
  const hasStorage = localStorage.getItem('question')
  notesFromStorage = hasStorage ? JSON.parse(hasStorage) : []
}

export const NotesContainerContext = createContext({} as INotesContainerProps)

export function NotesContainerProvider({ children }: NotesProviderProps): JSX.Element {
  const [notes, setNotes] = useState<Note[]>(notesFromStorage)

  return <NotesContainerContext.Provider value={{ notes, setNotes }}>{children}</NotesContainerContext.Provider>
}
