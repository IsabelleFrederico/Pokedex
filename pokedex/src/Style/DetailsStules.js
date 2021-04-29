import styled from 'styled-components'

export const PokeContainer = styled.div`
    background: ${(props) => props.backgroundColor};
    display: flex;
    flex-direction: row;
    width: 100wh;
    height: 100vh;
    margin: 0px;
`

export const PokemonImageDetail = styled.div`
    flex-direction: ${(props) => props.pokemon? 'row' : 'column' };
    display: flex;
    align-items: ${(props) => props.pokemon? '' : 'center' };
    margin: 40px;
`

export const PokemonMoves = styled.div`
    margin: 90px;
    text-transform: capitalize;
    font-weight: bold;
`

export const PokemonStats = styled.div`
    margin-top: ${(props) => props.stats? '0' : '80px' };
    display: flex;
    justify-content: ${(props) => props.stats? 'space-between' : '' };
    flex-direction: ${(props) => props.stats? 'row' : 'column' };
    align-items: ${(props) => props.stats? 'center' : '' };
`

export const ButtonBattle = styled.div`
    position: absolute;
    display: flex;
    left: 170vh;
    top: 20vh;
`
export const Button = styled.div`
    position: absolute;
    left: 190vh;
    top: 20vh;
`
export const Img = styled.img`
    width: ${(props) => props.pokeBall? '90px' : '130px' };
    margin-left: 30px;
    cursor: ${(props) => props.pokeBall? 'pointer' : '' };
`
export const PokeballImage = styled.img `
    width: 20rem;
    position: absolute;
    left: 160vh;
    top: 60vh;
    opacity: .4;
`
export const Meter = styled.meter`
    width: 180px;
    height: 40px;
    margin: 0 12px;
`
export const TextStats = styled.p`
    margin: ${(props) => props.name? '0' : '210px' };
    font-weight: bold;
    position: ${(props) => props.name? '' : 'absolute' };
`
