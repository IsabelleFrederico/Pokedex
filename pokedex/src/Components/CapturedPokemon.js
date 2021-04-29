import { Container,  Message, Button, Image } from '../Style/components/CapturedPokemonStyles'
import pokeballGif from '../img/capturedGif.gif'
import close from '../img/close.png'

function CapturedPokemon(props) {
    return <Container background={pokeballGif} onClick={props.onClick}>
        <Message>{props.name[0].toUpperCase() + props.name.substr(1)} capturado</Message>
        <Button onClick={props.onClick}>
            <Image src={close} alt={'botão de fechar'}/>
        </Button>
    </Container>
}

export default CapturedPokemon