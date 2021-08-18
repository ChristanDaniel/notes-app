import React from 'react'
import type { NextPage } from 'next'
import { FormEvent, useEffect, useState } from 'react'

import { HomeAside, HomeContainerBg, HomeSection, NoteContainer, TextareaAutosizeWrapper, SubtitleContainer } from './styles'
// import { edit } from './styles';

import { RiDeleteBin7Fill } from 'react-icons/ri'
// import toast, { Toaster } from 'react-hot-toast'
import Button from '../../components/Button'

const HomeContainer: NextPage = () => {
  let questionsFromStorage

  if (process.browser) {
    const hasStorage = localStorage.getItem('question')
    questionsFromStorage = hasStorage ? JSON.parse(hasStorage) : []
  }

  const [inputQuestion, setinputQuestion] = useState('')
  const [questions, setQuestions] = useState<string[]>(questionsFromStorage)
  const [renderiza, setRenderiza] = useState(true)

  const handleSendQuestion = (event: FormEvent) => {
    event.preventDefault()
    setQuestions((prevState) => prevState.concat(inputQuestion))
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
        <h4>Suas anotações armazenadas online, Notes-App!</h4>

        <form onSubmit={handleSendQuestion}>
          <TextareaAutosizeWrapper
            aria-label="minimum height"
            placeholder="Escreva aqui..."
            onChange={(event) => setinputQuestion(event.target.value)}
            value={inputQuestion}
          />

          <Button type="submit">Enviar Nota</Button>
        </form>
      </HomeAside>

      <HomeSection>
        <SubtitleContainer>
          <h1>Minhas Anotações</h1>
          <button onClick={() => handleCleanAll()}>
            {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
            Limpar todos
          </button>
        </SubtitleContainer>

        <ul>
          {questions?.map((question, index) => {
            return (
              <>
                <li key={index}>
                  <NoteContainer>
                    <div>
                      <p>{question}</p>
                      <span>17/02/2020 - 23:10</span>
                    </div>
                    <button onClick={() => handleDeleteQuestion(index)}>
                      {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
                      <RiDeleteBin7Fill />
                      Excluir
                    </button>
                  </NoteContainer>
                </li>
              </>
            )
          })}
        </ul>
      </HomeSection>
    </HomeContainerBg>
  )
}
export default HomeContainer
