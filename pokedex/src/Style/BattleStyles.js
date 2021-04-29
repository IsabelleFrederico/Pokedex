import styled from 'styled-components'
import backgroundBattle from '../img/backgroundBattle.png'

export const Container = styled.div`
    height: 100vh;
    background-image: url(${backgroundBattle});
    background-clip: border-box;
    background-repeat:no-repeat;
    background-size: 100% 80%;
    position:relative;
    margin: 0;
    padding-top: 30px;
    text-transform: capitalize;
`

export const Name = styled.h1`
    position: absolute;
    left: ${(props) => props.opponet ? '125vh' : '15vh'};
    bottom: ${(props) => props.opponet ? '55vh' : '85vh'};
`
export const Type = styled.p`
    position: absolute;
    left: ${(props) => props.opponet ? '125.5vh' : '15vh'};
    bottom: ${(props) => props.opponet ? '53vh' : '83vh'};
`
export const Hp = styled.div`
    margin: ${(props) => props.opponet ? '' : '20px 48vh'};
    display: flex;
    /* flex-direction: ${(props) => props.stats ? 'row' : 'column'}; */
`
export const Meter = styled.meter`
    width: 260px;
    height: 45px;
    margin: ${(props) => props.opponet ? '' : '40px 0'};
    position: ${(props) => props.opponet ? 'absolute' : ''};
    left: ${(props) => props.opponet ? '157vh' : ''};
    top: ${(props) => props.opponet ? '48vh' : ''};
`
export const TextHpPecent = styled.p`
    margin: ${(props) => props.opponet ? '30px' : '50px 110px'};
    font-weight: bold;
    position: absolute;
    left: ${(props) => props.opponet ? '170vh' : ''};
    top: ${(props) => props.opponet ? '45vh' : ''};
`
export const TextHp = styled.p`
    position: absolute;
    left: ${(props) => props.opponet ? '152vh' : '35vh'};
    top: ${(props) => props.opponet ? '49.5vh' : ''};
    margin: ${(props) => props.opponet ? '0' : '50px'};
    font-weight: bold;
    position: absolute;
`

export const Img = styled.img`
    width: 140px;
    position: absolute;
    left: ${(props) => props.opponet ? '145vh' : '42vh'};
    top: ${(props) => props.opponet ? '10vh' : '33vh'};
`

export const ContainerMoves = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    left: 72vh;
    top: 66vh;
`
export const Button = styled.button`
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    font-size: 28px;
    position: ${(props) => props.moves ? '' : 'absolute'};
    left: ${(props) => props.moves ? '' : '105vh'};
    top: ${(props) => props.moves ? '' : '68vh'};
    margin: ${(props) => props.moves ? '10px' : ''};
    border: solid 3px black; 
    cursor: pointer;

`
export const TextAttack = styled.p`
    position: absolute;
    font-weight: bold;
    color: red;
    left: ${(props) => props.opponet ? '178vh' : '69vh'};
    bottom: ${(props) => props.opponet ? '54vh' : '87vh'};
`
export const ContainerButtonFloat = styled.div`
    position: fixed;
    bottom: 50vh;
    right: 85vh;
    background:${props => props.win ? "lightgreen" : "tomato"};
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
`
export const CloseAlert = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin:0;
    margin-left: 12px;
    align-self: flex-start;
    cursor: pointer;    
`

export const TextAlert = styled.p`
    font-weight: bold;
    font-size: 28px;
`