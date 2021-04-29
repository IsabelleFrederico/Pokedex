import pokeballs from '../img/pokeballs.png'
import {Container, Image, Title, SubTitle} from '../Style/components/SrcreenWithoutPokemonsStyles'

function ScreenWithoutPokemons() {
  return <Container>
    <Image src={pokeballs} alt={'pikachu em cima da pokebola'} />
    <Title>Pokédex vazia</Title>
    <SubTitle>Pokemons tem que pegar!</SubTitle>
  </Container>
}

export default ScreenWithoutPokemons