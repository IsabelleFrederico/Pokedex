import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import axios from "axios";
import { baseUrl } from "../Constants/url";
import GlobalStateContext from "./GlobalStateContext";
import CapturedPokemon from "../Components/CapturedPokemon";
import { Button } from '../Style/HeaderStyles'
import { goToPokedex, goBack } from '../Router/coordinator';

const GlobalStateProvider = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [page, setPage] = useState(1)
    const [pageChange, setPageChange] = useState(0)
    const [moves, setMoves] = useState()
    const [pokemonChoiced, setPokemonChoiced] = useState('')
    const [captured, setCaptured] = useState(false)
    const [nameCaptured, setNameCaptured] = useState('')
    const history = useHistory()

    useEffect(() => {
        getPokemons()
        getMoves()
        pokemon()
    }, [pageChange, pokedex])

    const buttonNav = (path) => {
        if (path === '/') {
            return (
                <Button onClick={() => goToPokedex(history)}>Ver Pokedex</Button>)
        } else {
            return (
                <Button onClick={() => goBack(history)}>Voltar</Button>
            )
        }
    }

        const getPokemons = async () => {
            try {
                const res = await axios.get(`${baseUrl}/?offset=${pageChange}&limit=28`)
                setPokemons(res.data.results);
            } catch (err) {
                alert("Nao foi possível carregar a lista de pokémons, tente novamente mais tarde")
            };
        };

        const getMoves = async () => {
            if (pokemonChoiced) {
                try {
                    const res = await axios.get(`${baseUrl}/${pokemonChoiced}`)
                    setMoves(res.data);
                } catch (err) {
                    alert("Nao foi possível carregar a lista de pokémons, tente novamente mais tarde")
                };
            }
        };

        const addPokedex = (poke) => {
            const onPokedex = pokedex.some((pokemonPokedex) => {
                return pokemonPokedex.name === poke.name
            })
            if (!onPokedex) {
                const newPokedex = [...pokedex, poke]
                setPokedex(newPokedex)
                setCaptured(true)
                setNameCaptured(poke.name)
            } else {
                alert(`${poke.name} já consta em sua pokédex.`)
            }
        }

        const removePokedex = (poke) => {
            const onPokedex = pokedex.some((pokemonPokedex) => {
                return pokemonPokedex.name === poke.name
            })
            if (onPokedex) {
                const indexPokemon = pokedex.findIndex((pokemon) => pokemon.name === poke.name);
                const newPokeList = [...pokemons, poke]

                setPokemons(newPokeList)
                pokedex.splice(indexPokemon, 1)

                alert(`${poke.name} foi removido da pokédex!`)
            } else {
                alert(`${poke.name} não pertence a sua pokédex.`)
            }

        };

        const pokemon = () => {
            let pokemon = Math.floor(Math.random() * 700)
            setPokemonChoiced(pokemon)
        }

        const states = { moves, pokemonChoiced, pageChange, pokemons, pokedex, page };
        const setters = { setPageChange, setPokemons, setPokedex, setPage };
        const requests = { pokemon, getPokemons, addPokedex, removePokedex, buttonNav };

        const data = { states, setters, requests, captured };

        const changeCaptured = () => {
            setCaptured(!captured)
        }

        const screen = () => {
            if (captured) {
                return (
                    <CapturedPokemon
                        name={nameCaptured}
                        onClick={changeCaptured}
                    />
                )

            }
        }
        return (
            <div>
                <GlobalStateContext.Provider value={data}>
                    {screen()}
                    {props.children}
                </GlobalStateContext.Provider>
            </div>
        );
    };

    export default GlobalStateProvider;
