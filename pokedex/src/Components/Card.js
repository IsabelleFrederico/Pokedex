import React, { useContext, useState } from "react";
import GlobalStateContext from '../Global/GlobalStateContext'
import { useHistory } from 'react-router';
import { goToDetails, goToDetailsPokedex } from '../Router/coordinator'
import pokeBall from '../img/pokeball-white.png'
import addToPokedex from '../img/addToPokedex.png'
import removeToPokedex from '../img/removeToPokedex.png'
import details from '../img/details.png'
import { CardContainer, Name, Number, PokemonImage, PokeballImage, ContainerImage, ContainerType, ButtonGroup, ButtonImage, Button } from '../Style/CardStyles'
import { usePokemonData } from '../hook/usePokemonData'
import { useColorPokemon } from '../hook/useColorPokemon'

function Card(props) {
    const { requests } = useContext(GlobalStateContext)
    const history = useHistory()
    const [pokeData] = usePokemonData(props.name)
    const [colorPokemon, type] = useColorPokemon(pokeData && pokeData.types[0] && pokeData.types[0].type && pokeData.types[0].type.name)

    const numberPokemon = () => {
        if (pokeData && pokeData.id > 0 && pokeData.id < 10) {
            return '#00' + pokeData.id
        } else if (pokeData && pokeData.id > 10 && pokeData.id < 100) {
            return '#0' + pokeData.id
        } else {
            return '#' + pokeData.id
        }
    }

    const button = () => {
        if (history.location.pathname === '/') {
            return <ButtonGroup>
                <Button onClick={() => requests.addPokedex(pokeData)} title="Capturar pokemon">
                    <ButtonImage src={addToPokedex} alt={'botão para adicionar à pokédex'} />
                </Button>

                <Button onClick={() => goToDetails(history, pokeData.name)} title="Detalhes do pokemon">
                    <ButtonImage src={details} alt={'botão para ver detalhes'} />
                </Button>
            </ButtonGroup>

        } else {
            return <ButtonGroup>
                <Button onClick={() => requests.removePokedex(pokeData)} title="Remover da pokédex">
                    <ButtonImage src={removeToPokedex} alt={'botão para adicionar à pokédex'} />
                </Button>
                
                <Button onClick={() => goToDetailsPokedex(history, pokeData.name)} title="Detalhes do pokemon">
                    <ButtonImage src={details} alt={'botão para ver detalhes '} />
                </Button>
            </ButtonGroup>
        }
    }

    return (
        <div >
            {pokeData &&
                <CardContainer backgroundColor={colorPokemon} >
                    <Name>{pokeData.name[0].toUpperCase() + pokeData.name.substr(1)}</Name>
                    <Number>{numberPokemon()}</Number>
                    <ContainerType>
                        {type}
                    </ContainerType>
                    {button()}
                    <ContainerImage>
                        <PokemonImage src={pokeData.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokeData.name} />
                    </ContainerImage>
                    <PokeballImage src={pokeBall} alt={'pokebola branca'} />
                </CardContainer>
            }
        </div>

    )
}

export default Card