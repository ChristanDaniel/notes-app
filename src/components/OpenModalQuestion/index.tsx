import React, { FormEvent, useContext } from 'react'
import Modal from 'react-modal'
import { QuestionsContainerContext } from '../../NotesContext'
import Button from '../Button'
import { AiOutlineEdit } from 'react-icons/ai'
// import {} from './styles'

import Image from 'next/image'
import closeImg from '../../../public/close.svg'

interface OpenModalQuestionProps {
  isOpen: boolean
  onRequestClose: () => void
}

// Component OpenModalQuestion foi criado utilizando uma biblioteca chamada React-Modal,
// nela precisamos passar para tag <Modal /> "importada da biblioteca React-Modal" duas propriedades
// "isOpen, onRequestClose" terá um estado "useState"
// passando a informação se o Modal está aberto ou fechado.

export function OpenModalQuestion({ isOpen, onRequestClose }: OpenModalQuestionProps): JSX.Element {
  const { questions, setQuestions, inputEdit, setInputEdit, currentIdQuestion } = useContext(QuestionsContainerContext)

  function handleEditModal(event: FormEvent) {
    // Função criada para editar Nota selecionada e
    // após passar pela verificação utilizamos onRequestClose para fechar o Modal.

    event.preventDefault()

    const NotaEdited = questions.map((question) => {
      if (question.id === currentIdQuestion?.id) {
        return { ...question, description: inputEdit }
      } else {
        return { ...question }
      }
    })
    setQuestions(NotaEdited)

    onRequestClose()
  }

  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <Image src={closeImg} alt="Fechar Modal" />
        </button>
        <div>
          <h2>Editar Nota</h2>
          {/* <span>Nota - {questions.indexOf}</span> */}
        </div>
        <form>
          <textarea aria-label="minimum height" placeholder="Escreva aqui..." onChange={(event) => setInputEdit(event.target.value)} value={inputEdit} />
          <Button onClick={(event) => handleEditModal(event)}>
            {' '}
            <AiOutlineEdit /> Editar Nota
          </Button>
        </form>
      </Modal>
    </>
  )
}
