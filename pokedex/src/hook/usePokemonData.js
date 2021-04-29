
import { useState, useEffect } from "react"
import { baseUrl } from '../Constants/url'
import axios from "axios"

export const usePokemonData = (pokeName) => {
  const [pokeData, setpokeData] = useState()

  const getPokemonData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/${pokeName}/`)
      setpokeData(res.data)
    } catch (err) {
      alert("Ops!  Não foi possivel carregar os detalhes do pokemon")
    }
  }

  useEffect(() => {
    getPokemonData()
  }, [])

  return [pokeData, getPokemonData]
}