import styled from 'styled-components'

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

export { NoteContainer, NoteContainerDiv }
