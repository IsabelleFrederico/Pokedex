import { useState } from "react"
import dragon from '../img/dragon.png'
import dark from '../img/dark.png'
import electric from '../img/electric.png'
import fairy from '../img/fairy.png'
import fighting from '../img/fighting.png'
import fire from '../img/fire.png'
import ghost from '../img/ghost.png'
import grass from '../img/grass.png'
import ground from '../img/gound.png'
import ice from '../img/ice.png'
import normal from '../img/normal.png'
import poison from '../img/poison.png'
import psychic from '../img/psychic.png'
import rock from '../img/rock.png'
import steel from '../img/steel.png'
import water from '../img/water.png'
import bug from '../img/bug.png'
import flying from '../img/flying.png'

export const useColorPokemon = (pokemon, poke) => {
    const [type, setType] = useState('')

    const colorPokemon = () => {
        switch (pokemon) {
            case 'grass':
                setType('planta')
                return 'rgb(43, 218, 177)'
            case 'fire':
                setType('fogo')
                return 'rgb(247, 119, 106)'
            case 'water':
                setType('água')
                return 'rgb(88, 171, 247)'
            case 'bug':
                setType('Inseto')
                return 'rgb(140, 200, 104)'
            case 'normal':
                setType('normal')
                return 'rgb(204, 150, 86)'
            case 'poison':
                setType('venenoso')
                return 'rgb(148, 140, 181)'
            case 'electric':
                setType('elétrico')
                return 'rgb(248, 189, 33)'
            case 'ground':
                setType('terra')
                return 'rgb(178, 115, 108)'
            case 'fighting':
                setType('lutador')
                return 'rgb(21, 33, 59)'
            case 'psychic':
                setType('psíquico')
                return 'rgb(240, 181, 53)'
            case 'rock':
                setType('pedra')
                return 'rgb(191, 192, 203)'
            case 'flying':
                setType('voador')
                return 'rgb(218, 147, 190)'
            case 'ghost':
                setType('fantasma')
                return 'rgb(137, 87, 122)'
            case 'ice':
                setType('gelo')
                return 'rgb(122, 185, 226)'
            case 'dragon':
                setType('dragão')
                return 'rgb(48, 173, 155)'
            case 'steel':
                setType('metálico')
                return 'rgb(159, 165, 181)'
            case 'dark':
                setType('noturno')
                return 'rgb(32, 28, 27)'
            case 'fairy':
                setType('fada')
                return 'rgb(229, 160, 224)'
            default:
                break;
        }
    }

    const typeImg = () => {
        switch (poke) {
            case 'grass':
                return grass
            case 'fire':
                return fire
            case 'water':
                return water
            case 'bug':
                return bug
            case 'normal':
                return normal
            case 'poison':
                return poison
            case 'electric':
                return electric
            case 'ground':
                return ground
            case 'fighting':
                return fighting
            case 'psychic':
                return psychic
            case 'rock':
                return rock
            case 'flying':
                return flying
            case 'ghost':
                return ghost
            case 'ice':
                return ice
            case 'dragon':
                return dragon
            case 'steel':
                return steel
            case 'dark':
                return dark
            case 'fairy':
                return fairy
            default:
                break;
        }
    }

    const typeImg2 = () => {
        switch (pokemon) {
            case 'grass':
                return grass
            case 'fire':
                return fire
            case 'water':
                return water
            case 'bug':
                return bug
            case 'normal':
                return normal
            case 'poison':
                return poison
            case 'electric':
                return electric
            case 'ground':
                return ground
            case 'fighting':
                return fighting
            case 'psychic':
                return psychic
            case 'rock':
                return rock
            case 'flying':
                return flying
            case 'ghost':
                return ghost
            case 'ice':
                return ice
            case 'dragon':
                return dragon
            case 'steel':
                return steel
            case 'dark':
                return dark
            case 'fairy':
                return fairy
            default:
                break;
        }
    }

    return [colorPokemon, type, typeImg2, typeImg]
}