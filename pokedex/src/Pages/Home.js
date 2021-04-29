import React, { useContext, useEffect } from "react";
import Card from '../Components/Card';
import Pagination from '@material-ui/lab/Pagination';
import GlobalStateContext from '../Global/GlobalStateContext'
import { Main, ContainerPagination } from '../Style/HomeStyles'
import Loading from "../Components/Loading";

export function Home() {
  let { states, setters, requests, captured } = useContext(GlobalStateContext)

  useEffect(() => {
    requests.getPokemons()
  }, [requests])

  let arrayPokemons = states.pokemons && states.pokemons.filter((pokemon) => {
    const onPokedex = states.pokedex && states.pokedex.some((pokemonPokedex) => {
      return pokemonPokedex.name === pokemon.name
    })
    if (onPokedex) {
      return false
    } else {
      return true
    }
  })

  const handleChange = (e, value) => {
    setters.setPage(value)
    setters.setPageChange(states.page * 30)
  }

  return (
    <div>
      <Main>

        {states.pokemons.length === 0 ? <Loading /> : (
          arrayPokemons && arrayPokemons.map((poke) => {
            return (
              <Card
                key={poke.name}
                name={poke.name}
              />
            )

          })
        )
        }

      </Main>
      <ContainerPagination>
        <Pagination
          count={35}
          variant="outlined"
          color="primary"
          page={states.page}
          onChange={handleChange}
        />
      </ContainerPagination>
    </div >
  )
}

export default Home