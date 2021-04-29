import axios from "axios";
import { useState, useContext } from "react";
import { baseUrlBattle } from "../Constants/url";
import GlobalStateContext from '../Global/GlobalStateContext';
import { goToPokedex } from "../Router/coordinator";
import { useHistory } from 'react-router';
import { TextAlert, CloseAlert, ImgAlert, ContainerButtonFloat, ContainerMoves, Button, Container, Name, Type, TextHpPecent, TextHp, Meter, Hp, Img, TextAttack } from '../Style/BattleStyles'
import Loading from '../Components/Loading'
import win from '../img/win.png'
import gameover from '../img/gameover.png'
import { useEffect } from "react";

export const BattleActions = (props) => {
    const pokemon = props.pokemon
    const { states } = useContext(GlobalStateContext);
    const [moveOpponetDetail, setMoveOpponetDetail] = useState()
    const [moveDetail, setMoveDetail] = useState()
    const [hp, setHp] = useState(100)
    const [hpOpponent, setHpOpponent] = useState(100)
    const [defese, setDesfese] = useState(0)
    const [defeseOpponent, setDefeseOpponent] = useState(0)
    const [attack, setAttack] = useState(0)
    const [attackOpponent, setAttackOpponent] = useState(0)
    const [powerOpponetDefense, setPowerOpponetDefense] = useState(0)
    const [powerDefense, setPowerDefense] = useState(0)
    const [showMoves, setShowMoves] = useState(false)
    const [showAttack, setShowAttack] = useState(false)
    const pokeData = states.moves
    const history = useHistory()

    const move1 = pokeData && pokeData.moves[0].move.name
    const move2 = pokeData && pokeData.moves[1].move.name
    const move3 = pokeData && pokeData.moves[2].move.name

    let arrayMove = [move1, move2, move3]

    let moveChoice = arrayMove[Math.floor(Math.random() * arrayMove.length)]

    const moveOpponent = async () => {
        try {
            const res = await axios.get(`${baseUrlBattle}/${moveChoice}/`)
            setMoveOpponetDetail(res.data)
        } catch (err) {
            alert("Nao foi possível os detalhes do movimento")
        }
    }

    const hpAction = () => {
        moveOpponent()
        if (hp > 0) {

            if (moveOpponetDetail && moveOpponetDetail.power <= 0) { setAttackOpponent(0) } else { moveOpponetDetail && setAttackOpponent(moveOpponetDetail.power) }
            if (pokemon && pokemon.stats[2] && pokemon.stats[2].base_stat <= 0) { setDesfese(0) } else { pokemon && pokemon.stats[2] && setDesfese(pokemon.stats[2].base_stat) }

            if (defese < attackOpponent) { setPowerDefense(attackOpponent - defese) } else { setPowerDefense(attackOpponent * 0.80) }

            setHp(hp - powerDefense)
        }
        return hp
    }

    const hpActionOpponet = () => {
        if (hpOpponent > 0) {

            if (moveDetail && moveDetail.power <= 0) { setAttack(0) } else { moveDetail && setAttack(moveDetail.power) }
            if (pokeData && pokeData.data && pokeData.stats[2] && pokeData.stats[2].base_stat <= 0) { setDefeseOpponent(0) } else { pokeData && setDefeseOpponent(pokeData.stats[2].base_stat) }

            if (defeseOpponent < attack) { setPowerOpponetDefense(attack - defeseOpponent) } else { setPowerOpponetDefense(attack * 0.80) }

            setHpOpponent(hpOpponent - powerOpponetDefense)
        }
        return hpOpponent
    }

    const fight = () => {
        setShowMoves(true)
    }


    const moveOpponentApi = async (value) => {
        try {
            const res = await axios.get(`${baseUrlBattle}/${value}/`)
            setMoveDetail(res.data)
            hpAction()
            hpActionOpponet()
        } catch (err) {
            alert("Nao foi possível os detalhes do movimento")
        }
    }

    const moveName = (value) => {
        moveOpponentApi(value)
        setShowAttack(true)
    }

    if (hp <= 0) {
        return (
            <ContainerButtonFloat>
                <img src={gameover} />
                <TextAlert>Game Over!!</TextAlert>
                <CloseAlert onClick={() => goToPokedex(history)}>X</CloseAlert>
            </ContainerButtonFloat>
        )
    } else if (hpOpponent <= 0) {
        return (
            <ContainerButtonFloat win>
                <img src={win} />
                <TextAlert>You Win!!</TextAlert>
                <CloseAlert onClick={() => goToPokedex(history)}>X</CloseAlert>
            </ContainerButtonFloat>
        )
    }

    return (
        <Container>
            <Name>{pokemon.name}</Name>
            {pokemon.types[0] && <Type>{pokemon.types[0].type.name}</Type>}
            <Hp stats><TextHp name> HP </TextHp> <Meter min='0' max='100' low="40" optimum="80" high="50" value={hp}></Meter> <TextHpPecent>{hp}</TextHpPecent></Hp>
            {pokemon.sprites && <Img src={pokemon.sprites.versions['generation-v']['black-white'].animated.back_default} alt={pokemon.name} />}


            {pokeData ? (
                <>
                    <Name opponet>{pokeData.name}</Name>
                    {pokeData.types[0] && <Type opponet>{pokeData.types[0].type.name}</Type>}
                    <Hp opponet><TextHp opponet> HP </TextHp> <Meter opponet min='0' max='100' low="40" optimum="80" high="50" value={hpOpponent}></Meter> <TextHpPecent opponet>{hpOpponent}</TextHpPecent></Hp>
                    {pokeData.sprites && <Img opponet src={pokeData.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokeData.name} />}

                    {showMoves ? (
                        <ContainerMoves>
                            {pokemon.moves[0] && pokemon.moves[0].move && <Button moves onClick={() => moveName(pokemon.moves[0].move.name)}>{pokemon.moves[0].move.name}</Button>}
                            {pokemon.moves[1] && pokemon.moves[1].move && <Button moves onClick={() => moveName(pokemon.moves[1].move.name)}>{pokemon.moves[1].move.name}</Button>}
                            {pokemon.moves[2] && pokemon.moves[2].move && <Button moves onClick={() => moveName(pokemon.moves[2].move.name)}>{pokemon.moves[2].move.name}</Button>}
                        </ContainerMoves>
                    ) : <Button onClick={() => fight()}>Fight!</Button>
                    }
                </>
            ) : (<Loading />)
            }



            {showAttack ? <TextAttack> -{powerDefense} de dano</TextAttack> : ''}

            {showAttack ? <TextAttack opponet> -{powerOpponetDefense} de dano</TextAttack> : ''}

        </Container>
    )

}

export default BattleActions