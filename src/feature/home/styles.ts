// import { TextareaAutosize } from '@material-ui/core'
import styled from 'styled-components'
// import Button from '../../components/Button'

const HomeContainerBg = styled.div`
  /* height: calc(100vh - 80px); */
  height: 100vh;
  background-color: #e2e2e2;
  display: flex;
  padding-top: 24px;
  justify-content: space-around;
`

const HomeAside = styled.aside`
  h4 {
    color: #3498db;
    margin-bottom: 12px;
  }

  form {
    display: flex;
    flex-direction: column;
    border-right: 2px solid #616480;
    padding-right: 200px;
  }

  button {
    margin-top: 14px;
  }
`

const HomeSection = styled.section`
  h1 {
    color: #3498db;
  }

  /* padding-left: 190px; */
`
const SubtitleContainer = styled.div`
  align-items: center;
  min-width: 350px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;

  button {
    height: 35px;
    border-radius: 8px;
    font-weight: 500;
    background: #3498db;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;

    cursor: pointer;
    border: 0;

    transition: 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`

const TextareaAutosizeWrapper = styled.textarea`
  width: 350px;
  min-height: 180px;
  border: 0;
  padding: 16px;
  border-radius: 8px;
  background: #fefefe;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  resize: none;
`