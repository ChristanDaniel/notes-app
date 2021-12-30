import styled from 'styled-components'

const HomeContainerBg = styled.div`
  height: calc(100vh - 80px);
  background-color: #e2e2e2;
  display: flex;
  padding-top: 24px;
  justify-content: space-around;
`

const HomeAside = styled.aside`
  h4 {
    margin: 6px 6px 6px 0;
    color: #616480;
    margin-bottom: 12px;
    font-size: smaller;
  }

  form {
    display: flex;
    flex-direction: column;
    border-right: 2px solid #616480;
    padding-right: 150px;
  }

  button {
    margin-top: 14px;
  }
`

const HomeSection = styled.section`
  overflow: auto;
  padding-right: 12px;

  img {
    height: 300px;
    background-color: #e2e2e2;
    color: #fff;
    opacity: 0.1;
  }
`

const SubtitleContainer = styled.div`
  align-items: center;
  min-width: 450px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  span {
    height: 30px;
    border-radius: 8px;
    font-size: 200;
    background: #3498db;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }

  button {
    height: 35px;
    border-radius: 8px;
    font-weight: 500;
    background: #3498db;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 5px;

    cursor: pointer;
    border: 0;

    transition: 0.2s;

    :hover {
      filter: brightness(0.9);
    }

    svg {
      margin-right: 3px;
    }
  }
`

const TextareaAutosizeWrapper = styled.textarea`
  width: 400px;
  min-height: 180px;
  border: 0;
  padding: 16px;
  border-radius: 8px;
  background: #fefefe;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  resize: none;
`
const NoteContainer = styled.div`
  overflow: auto;
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  width: 450px;
  height: 100px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  p {
    font-size: 14px;
    overflow-wrap: break-word;
  }
`
const NoteContainerDiv = styled.div`
  background-color: #e2e2e2;
  display: flex;
  position: sticky;
  width: 450px;
  margin-bottom: 20px;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
  color: #737380;
  font-size: 14px;

  border-bottom: 1px solid #737380;

  span {
    padding-top: 5px;
    padding-right: 185px;
  }

  button {
    gap: 4px;
    align-self: center;
    font-size: 11px;
    height: 30px;
    border-radius: 8px;
    background: #e2e2e2;
    color: #737380;
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

export { HomeContainerBg, HomeAside, HomeSection, TextareaAutosizeWrapper, NoteContainer, SubtitleContainer, NoteContainerDiv }
