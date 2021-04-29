import loadingGif from '../img/pokeball_gif.gif'
import {Container} from '../Style/components/LoadingStyles' 

function Loading() {
  return(
    <Container>
      <img src={loadingGif} alt={'Gif de pokebola para carregar'}/>
    </Container>
  )
}

export default Loading