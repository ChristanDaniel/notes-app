import React, { useContext } from 'react'
import { FormEvent, useEffect, useState } from 'react'

import Modal from 'react-modal'

import Image from 'next/image'
import profilePic from '../../../public/noteapp.png'
import closeImg from '../../../public/close.svg'

import { HomeAside, HomeContainerBg, HomeSection, NoteContainer, NoteContainerDiv, TextareaAutosizeWrapper, SubtitleContainer } from './styles'

import { RiEdit2Fill, RiDeleteBin7Fill, RiDeleteBinFill } from 'react-icons/ri'

import { NotesContainerContext } from '../../NotesContext'

import Button from '../../components/Button'
import { Footers } from '../../components/Footers'

type Note = {
  id: number
  noteDate: string
  description: string
}

const HomeContainer = (): JSX.Element => {
  let questionsFromStorage

  if (process.browser) {
    const hasStorage = localStorage.getItem('question')
    questionsFromStorage = hasStorage ? JSON.parse(hasStorage) : []
  }

  const [inputQuestion, setinputQuestion] = useState('')
  const [inputEdit, setInputEdit] = useState('')
  const [questions, setQuestions] = useState<Note[]>([...questionsFromStorage])
  const [currentIdQuestion, setCurrentIdQuestion] = useState<Note>()
  const [renderiza, setRenderiza] = useState(true)

  const { notes } = useContext(NotesContainerContext)

  console.log('notes', notes)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSendQuestion = (event: FormEvent) => {
    event.preventDefault()
    if (inputQuestion !== '') {
      setQuestions([
        ...questions,
        {
          description: inputQuestion,
          id: Math.random(),
          noteDate: new Date().toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        }
      ])
      setinputQuestion('')
    }
  }

  const handleCleanAll = () => {
    localStorage.removeItem('question')
    questions.splice(0, 1000)
    setQuestions(questions)
    setRenderiza(!renderiza)
  }

  const handleDeleteQuestion = (index: number) => {
    if (index > -1) {
      questions.splice(index, 1)
    }
    setQuestions(questions)
    setRenderiza(!renderiza)
  }

  function handleOpenModal(question: Note) {
    setCurrentIdQuestion(question)
    setIsModalOpen(true)
    setInputEdit(question.description)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  function handleEditModal(event: FormEvent) {
    event.preventDefault()

    const NotaEdited = questions.map((question) => {
      if (question.id === currentIdQuestion?.id) {
        return { ...question, description: inputEdit }
      } else {
        return { ...question }
      }
    })
    setQuestions(NotaEdited)

    handleCloseModal()
  }

  useEffect(() => {
    localStorage.setItem('question', JSON.stringify(questions))
  }, [renderiza, questions])

  return (
    <HomeContainerBg>
      <HomeAside>
        <h3>Notes-App</h3>
        <h4>
          Bloco de Notas Pessoal que usa o armazenamento do seu navegador <br />
          para salvar suas notas e você pode simplesmente <br />
          excluí-las quando terminar.
        </h4>

        <form onSubmit={handleSendQuestion}>
          <TextareaAutosizeWrapper
            aria-label="minimum height"
            placeholder="Escreva aqui..."
            onChange={(event) => setinputQuestion(event.target.value)}
            value={inputQuestion}
          />
          <Button type="submit">Enviar Nota</Button>
        </form>

        <Footers />
      </HomeAside>

      <HomeSection>
        <SubtitleContainer>
          <h1>Minhas Anotações</h1>
          <span>{questions.length} - Notas</span>
          <button onClick={() => handleCleanAll()}>
            {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
            <RiDeleteBinFill /> Limpar todos
          </button>
        </SubtitleContainer>
        <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} overlayClassName="react-modal-overlay" className="react-modal-content">
          <button type="button" onClick={handleCloseModal} className="react-modal-close">
            <Image src={closeImg} alt="Fechar Modal" />
          </button>
          <div>
            <h2>Editar Nota</h2>
            {/* <span>Nota - {questions.indexOf()}</span> */}
          </div>
          <form>
            <textarea aria-label="minimum height" placeholder="Escreva aqui..." onChange={(event) => setInputEdit(event.target.value)} value={inputEdit} />
            <Button onClick={(event) => handleEditModal(event)}>Editar Nota</Button>
          </form>
        </Modal>
        {questions.length ? (
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
        ) : (
          <Image src={profilePic} alt="logo" />
        )}
      </HomeSection>
    </HomeContainerBg>
  )
}
export default HomeContainer
