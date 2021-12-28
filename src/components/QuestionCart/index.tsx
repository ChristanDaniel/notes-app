import React, { useContext } from 'react'
import { QuestionsContainerContext } from '../../NotesContext'
import { NoteContainer, NoteContainerDiv } from './styles'

import { RiEdit2Fill, RiDeleteBin7Fill } from 'react-icons/ri'

type Note = {
  id: number
  noteDate: string
  description: string
}

const QuestionCart = (): JSX.Element => {
  const { questions, setQuestions, setCurrentIdQuestion, setInputEdit, renderiza, setRenderiza, setIsModalOpen } = useContext(QuestionsContainerContext)

  function handleOpenModal(question: Note) {
    setCurrentIdQuestion(question)
    setIsModalOpen(true)
    setInputEdit(question.description)
  }

  const handleDeleteQuestion = (index: number) => {
    if (index > -1) {
      questions.splice(index, 1)
    }
    setQuestions(questions)
    setRenderiza(!renderiza)
  }

  return (
    <ul>
      {questions.map((question, index) => {
        return (
          <>
            <li key={question.id}>
              <NoteContainer>
                <p>{question.description}</p>
              </NoteContainer>
              <NoteContainerDiv>
                <span>{question.noteDate}</span>

                <button onClick={() => handleOpenModal(question)}>
                  <RiEdit2Fill /> Editar
                </button>

                <button onClick={() => handleDeleteQuestion(index)}>
                  <RiDeleteBin7Fill />
                  Excluir
                </button>
              </NoteContainerDiv>
            </li>
          </>
        )
      })}
    </ul>
  )
}
export default QuestionCart
