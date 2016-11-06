import React from 'react'
import pokedexData from '../pokedexData.js'

const Pokemon = ({pokemonID, type, isSelectedClass, handlePokemonClick}) => {
  if (pokedexData[pokemonID]['type'] !== type) {
    return null
  }
  return (
    <li className={isSelectedClass}>
      <h1 className='App-Pokedex-Name'>{pokedexData[pokemonID]['name']}</h1>
      <img
        id={pokemonID}
        src={pokedexData[pokemonID]['image']}
        className='App-Pokedex-Image'
        onClick={handlePokemonClick}
        alt='Pokemon' />
      <h3>{pokedexData[pokemonID]['type']}</h3>
    </li>
  )
}

export default Pokemon
