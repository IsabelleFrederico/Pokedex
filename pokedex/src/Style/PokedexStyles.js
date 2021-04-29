import styled from 'styled-components'

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(min(1), .8fr);

  gap: 1.5rem 2rem;
  margin: 2rem;
`