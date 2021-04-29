import styled from 'styled-components'

export const Container = styled.main`
  width: 90vw;
  height: 78vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img `
  width: 20%;
`

export const Messages = styled.p `
  font-weight: 700;
  font-size: 3rem;
  margin: 0;
`
export const Title = styled(Messages) `
  color: red;
`
export const SubTitle = styled(Messages) `
  font-size: 1.3rem;
`