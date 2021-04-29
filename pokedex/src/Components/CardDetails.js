import { useContext, useState } from 'react';
import GlobalStateContext from '../Global/GlobalStateContext';
import { useHistory } from 'react-router';
import { goToFight } from '../Router/coordinator'
import pokeBall from '../img/pokeball-white.png'
import removePokedex from '../img/removeToPokedex.png'
import addToPokedex from '../img/addToPokedex.png'
import battle from '../img/battle.png'
import { Button, TextStats, Meter, Img, PokemonMoves, PokemonStats, PokeballImage, PokemonImageDetail, PokeContainer, ButtonBattle } from "../Style/DetailsStules";

import { useColorPokemon } from '../hook/useColorPokemon'

export const CardDetails = (props) => {
    const { requests, states } = useContext(GlobalStateContext);
    const pokemon = props.pokemon
    const history = useHistory()
    const [colorPokemon, type, typeImg2, typeImg] = useColorPokemon(pokemon && pokemon.types[0] && pokemon.types[0].type && pokemon.types[0].type.name, pokemon && pokemon.types[1] && pokemon.types[1].type && pokemon.types[1].type.name)

    const button = () => {
        if (history.location.pathname === `/pokedex/details/${pokemon.name}`) {
            return <ButtonBattle >
                <Img pokeBall  src={battle} onClick={() => goToFight(history, pokemon.name)} />
                <Img pokeBall src={removePokedex} onClick={() => requests.removePokedex(pokemon)} />
            </ButtonBattle>
        } else {
            return <Button><Img pokeBall src={addToPokedex} onClick={() => requests.addPokedex(pokemon)} /></Button>
        }
    }

    return (
        <PokeContainer backgroundColor={colorPokemon}>

            <PokemonImageDetail >
                <PokemonImageDetail pokemon>
                    {pokemon.sprites &&
                        <Img pokemon src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
                            alt={pokemon.name} />}
                    {pokemon.sprites &&
                        <Img pokemon src={pokemon.sprites.versions['generation-v']['black-white'].animated.back_default}
                            alt={pokemon.name} />}
                </PokemonImageDetail>
                <Img src={typeImg()} />
                <Img src={typeImg2()} />
            </PokemonImageDetail>

            <PokemonStats >
                <h2> Stats </h2>
                {pokemon.stats[0] && <PokemonStats stats><TextStats name> HP </TextStats> <Meter min="0" max="190" value={pokemon.stats[0].base_stat}></Meter> <TextStats>{pokemon.stats[0].base_stat}</TextStats></PokemonStats>}
                {pokemon.stats[1] && <PokemonStats stats><TextStats name>Attack</TextStats> <Meter min="0" max="190" value={pokemon.stats[1].base_stat}></Meter><TextStats>{pokemon.stats[1].base_stat}</TextStats></PokemonStats>}
                {pokemon.stats[2] && <PokemonStats stats><TextStats name>Defense</TextStats> <Meter min="0" max="190" value={pokemon.stats[2].base_stat}></Meter><TextStats>{pokemon.stats[2].base_stat}</TextStats></PokemonStats>}
                {pokemon.stats[3] && <PokemonStats stats><TextStats name>Special Attack</TextStats><Meter min="0" max="190" value={pokemon.stats[3].base_stat}></Meter><TextStats>{pokemon.stats[3].base_stat}</TextStats></PokemonStats>}
                {pokemon.stats[4] && <PokemonStats stats><TextStats name>Special Defense</TextStats><Meter min="0" max="190" value={pokemon.stats[4].base_stat}></Meter><TextStats>{pokemon.stats[4].base_stat}</TextStats></PokemonStats>}
                {pokemon.stats[5] && <PokemonStats stats><TextStats name>Speed</TextStats> <Meter min="0" max="190" value={pokemon.stats[5].base_stat}></Meter><TextStats>{pokemon.stats[5].base_stat}</TextStats></PokemonStats>}
            </PokemonStats>

            <PokemonMoves >
                <h2> Moves </h2>
                {pokemon.moves[0] && <li>{pokemon.moves[0].move.name}</li>}
                {pokemon.moves[1] && <li>{pokemon.moves[1].move.name}</li>}
                {pokemon.moves[2] && <li>{pokemon.moves[2].move.name}</li>}
            </PokemonMoves>

            <div>
                {button()}
            </div>
            <PokeballImage src={pokeBall} alt={'pokebola branca'} />
        </PokeContainer >

    )

}
export default CardDetails
