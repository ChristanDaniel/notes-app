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