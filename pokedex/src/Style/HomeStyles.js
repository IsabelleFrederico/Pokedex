import styled from 'styled-components'

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, .8fr);

  gap: 1.5rem 2rem;
  margin: 2rem;
`

export const ContainerPagination = styled.div  `
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
`