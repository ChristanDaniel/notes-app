import styled from 'styled-components'

const Headers = styled.header`
  background-color: #f2f3f4;
  height: 5rem;

  display: flex;
  align-items: center;

  padding: 2rem 4rem;

  border-bottom: 1px solid #616480;

  h1 {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid #616480;
  }

  h3 {
    margin-left: auto;
    text-transform: capitalize;
  }
`
export { Headers }
