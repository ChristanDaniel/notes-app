import styled from 'styled-components'

const Buttons = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #64a5f0;
  color: #fff;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`

export { Buttons }
