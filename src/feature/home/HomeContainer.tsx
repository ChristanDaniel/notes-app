import React from 'react'
import { FormEvent, useEffect, useState } from 'react'

import Image from 'next/image'
import profilePic from '../../../public/noteapp.png'

import { HomeAside, HomeContainerBg, HomeSection, NoteContainer, NoteContainerDiv, TextareaAutosizeWrapper, SubtitleContainer } from './styles'

import { RiEdit2Fill, RiDeleteBin7Fill, RiDeleteBinFill } from 'react-icons/ri'

import Button from '../../components/Button'
import { Footers } from '../../components/Footers'
import { OpenModalQuestion } from '../../components/OpenModalQuestion'

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
  const [questions, setQuestions] = useState<Note[]>([...questionsFromStorage])
  const [renderiza, setRenderiza] = useState(true)

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

  function handleCloseModal() {
    setIsModalOpen(false)
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

        <OpenModalQuestion isOpen={isModalOpen} onRequestClose={handleCloseModal} />

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
