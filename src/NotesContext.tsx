import React, { createContext, ReactNode, useState } from 'react'

interface Note {
  id: number
  noteDate: string
  description: string
}

interface IquestionsContainerProps {
  questions: Note[]
  setQuestions: React.Dispatch<React.SetStateAction<Note[]>>

  currentIdQuestion: Note
  setCurrentIdQuestion: React.Dispatch<React.SetStateAction<Note>>

  inputQuestion: string
  setinputQuestion: React.Dispatch<React.SetStateAction<string>>

  inputEdit: string
  setInputEdit: React.Dispatch<React.SetStateAction<string>>

  renderiza: boolean
  setRenderiza: React.Dispatch<React.SetStateAction<boolean>>

  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface questionsProviderProps {
  children: ReactNode
}

let questionsFromStorage: Note[]

if (process.browser) {
  const hasStorage = localStorage.getItem('question')
  questionsFromStorage = hasStorage ? JSON.parse(hasStorage) : []
}

export const QuestionsContainerContext = createContext({} as IquestionsContainerProps)

export function QuestionsContainerProvider({ children }: questionsProviderProps): JSX.Element {
  const Note: Note = { id: 0, noteDate: '', description: '' }

  const [questions, setQuestions] = useState<Note[]>(questionsFromStorage)
  const [currentIdQuestion, setCurrentIdQuestion] = useState<Note>(Note)
  const [inputQuestion, setinputQuestion] = useState('')
  const [inputEdit, setInputEdit] = useState('')
  const [renderiza, setRenderiza] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <QuestionsContainerContext.Provider
      value={{
        questions,
        currentIdQuestion,
        setCurrentIdQuestion,
        setQuestions,
        inputQuestion,
        setinputQuestion,
        inputEdit,
        setInputEdit,
        renderiza,
        setRenderiza,
        isModalOpen,
        setIsModalOpen
      }}
    >
      {children}
    </QuestionsContainerContext.Provider>
  )
}
