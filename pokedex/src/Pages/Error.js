import { Container, Image, Message, Title } from '../Style/ErrorStyles'
import pikachu from '../img/pikachu.png'
import {useHistory} from 'react-router-dom'

function Error() {
    const history = useHistory()

    return <Container>
        <Title>Ops! Página não encontrada</Title>
        <Message>Temos um treinador pokemon perdido, siga o pikachu para voltar para sua jornada</Message>
        <Image src={pikachu} alt={'pikachu de costas'} onClick={() => history.push('/')}/>
    </Container>
}

export default Error