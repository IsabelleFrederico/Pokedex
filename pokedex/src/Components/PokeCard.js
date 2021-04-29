import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import GlobalStateContext from '../Global/GlobalStateContext'

import { useHistory } from 'react-router'

const PokeCard = (props) => {
    const { requests } = useContext(GlobalStateContext)

    const history = useHistory()

    const [dadosPokemon, setDadosPokemon] = useState()

    useEffect(() => {
        pegarDadosPokemon()
    }, [])

    const pegarDadosPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.nome}`)
        .then((res) => {
            setDadosPokemon(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    
    return (
        <div>
            {dadosPokemon &&
                <div>
                    {dadosPokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
                    {dadosPokemon.name}
                    {dadosPokemon.types[0].type.name}
                </div>
               }
        </div>
    )
}

export default PokeCard