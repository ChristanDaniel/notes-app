import styled from 'styled-components'

const HomeContainerBg = styled.div`
  height: calc(100vh - 80px);
  background-color: #e2e2e2;
  display: flex;
  padding-top: 24px;
  justify-content: space-around;

  @media screen and (max-width: 1000px) {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
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

    @media screen and (max-width: 1000px) {
      width: 100%;
      border: none;
      padding: 0;
    }
  }

  button {
    margin-top: 14px;
  }
`

const HomeSection = styled.section`
  overflow: auto;
  padding-right: 12px;

  @media screen and (max-width: 1000px) {
    overflow: visible;
    align-items: center;
    padding: 0;
  }

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

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`

export { HomeContainerBg, HomeAside, HomeSection, TextareaAutosizeWrapper, SubtitleContainer }
