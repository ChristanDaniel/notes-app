import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  height: 140px;

  padding-left: 12px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    margin-left: 100px;
    margin-top: 35px;

    > span {
      margin: 0 4px 4px 4px;
    }
  }

  p {
    color: #616480;
    margin-bottom: 12px;
  }

  a {
    color: #000;
    margin-bottom: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;

    text-decoration-line: none;
  }

  svg {
    margin-right: 4px;
  }
`

export { FooterContainer }
