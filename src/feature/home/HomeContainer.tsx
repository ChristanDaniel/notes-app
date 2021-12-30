import React, { useContext } from 'react'
import { FormEvent, useEffect } from 'react'

import Image from 'next/image'
import profilePic from '../../../public/noteapp.png'

import { HomeAside, HomeContainerBg, HomeSection, TextareaAutosizeWrapper, SubtitleContainer } from './styles'

import { RiDeleteBinFill } from 'react-icons/ri'

import Button from '../../components/Button'
import { Footers } from '../../components/Footers'
import { OpenModalQuestion } from '../../components/OpenModalQuestion'
import QuestionCart from '../../components/QuestionCart'
import { QuestionsContainerContext } from '../../NotesContext'

const HomeContainer = (): JSX.Element => {
  const { questions, setQuestions, inputQuestion, setinputQuestion, renderiza, setRenderiza, isModalOpen, setIsModalOpen } =
    useContext(QuestionsContainerContext)

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
          <Button type="submit">Adicionar Nota</Button>
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

        {questions.length ? <QuestionCart /> : <Image src={profilePic} alt="logo" />}
      </HomeSection>
    </HomeContainerBg>
  )
}
export default HomeContainer
