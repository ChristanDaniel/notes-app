import React from 'react'
// import type { NextPage } from 'next'
import { FormEvent, useEffect, useState, ReactNode } from 'react'

import Image from 'next/image'
import profilePic from '../../../public/noteapp.png'

// import { format } from 'date-fns'
// import ptBR from 'date-fns/locale/pt-BR'

import { HomeAside, HomeContainerBg, HomeSection, NoteContainer, NoteContainerDiv, TextareaAutosizeWrapper, SubtitleContainer, Footer } from './styles'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiEdit2Fill, RiDeleteBin7Fill, RiDeleteBinFill } from 'react-icons/ri'

// import toast, { Toaster } from 'react-hot-toast'
import Button from '../../components/Button'

type Note = {
  id: number
  noteDate: string
  description: string
}

// interface NotesProps {
//   // Notes: Note[]
//   Note: {
//     uid: string
//     noteDate: string | null
//     description: string
//   }
// }

const HomeContainer: ReactNode = () => {
  let questionsFromStorage

  if (process.browser) {
    const hasStorage = localStorage.getItem('question')
    questionsFromStorage = hasStorage ? JSON.parse(hasStorage) : []
  }

  const [inputQuestion, setinputQuestion] = useState('')
  const [questions, setQuestions] = useState<Note[]>([...questionsFromStorage])
  const [renderiza, setRenderiza] = useState(true)

  console.log(questions)

  const handleSendQuestion = (event: FormEvent) => {
    event.preventDefault()
    setQuestions([
      ...questions,
      {
        description: inputQuestion,
        id: Math.random(),
        noteDate: new Date().toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      }
    ])
    // setQuestions((prevState) => prevState.concat(inputQuestion))
  }

  const handleCleanAll = () => {
    localStorage.removeItem('question')
    questions.splice(0, 1000)
    setQuestions(questions)
    setRenderiza(!renderiza)
    // toast.success('Notas deletadas com sucesso')
  }

  const handleDeleteQuestion = (index: number) => {
    if (index > -1) {
      questions.splice(index, 1)
    }
    setQuestions(questions)
    setRenderiza(!renderiza)
    // toast.success('Nota deletada com sucesso')
  }

  useEffect(() => {
    localStorage.setItem('question', JSON.stringify(questions))
  }, [renderiza, questions])

  return (
    <HomeContainerBg>
      <HomeAside>
        <h3>Notes-App</h3>
        <h4>
          Bloco de Notas Pessoal que usa o armazenamento do seu navegador <br /> para salvar suas notas e você pode simplesmente
          <br /> excluí-las quando terminar.
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

        <Footer>
          <div>
            <a href="https://github.com/ChristanDaniel" target="_blank" rel="noreferrer noopener">
              <FaGithub /> Github
            </a>
            <span> | </span>
            <a href="https://www.linkedin.com/in/christian-daniel-841921210/" target="_blank" rel="noreferrer noopener">
              <FaLinkedin /> Linkedin
            </a>
          </div>
          <p>
            <span>© {new Date().getFullYear()} Notepad-App</span>
            {' · '}
            <span>Construido por Christian Daniel .</span>
          </p>
        </Footer>
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
        {questions.length ? (
          <ul>
            {questions.map((question) => {
              return (
                <>
                  <li key={question.id}>
                    <NoteContainer>
                      <p>{question.description}</p>
                    </NoteContainer>
                    <NoteContainerDiv>
                      <span>{question.noteDate}</span>
                      <button>
                        <RiEdit2Fill /> Editar
                      </button>
                      <button onClick={() => handleDeleteQuestion(question.id)}>
                        {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
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
