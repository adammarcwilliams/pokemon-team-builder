import React from 'react'
import Pokemon from '../components/Pokemon.js'
import pokedexData from '../pokedexData.js'

const Pokedex = ({type, pokeTeamArray, handlePokemonClick}) => {
  return (
    <div className='App-Pokedex'>
      <ul>
        {Object.keys(pokedexData).map((key) => {
          if (pokeTeamArray.includes(key)) {
            return <Pokemon
                      isSelectedClass='App-PokemonList--Selected'
                      type={type} key={key} pokemonID={key}
                      handlePokemonClick={handlePokemonClick}/>
          }
          return <Pokemon
                      isSelectedClass='App-PokemonList'
                      type={type} key={key} pokemonID={key}
                      handlePokemonClick={handlePokemonClick}/>
        })}
      </ul>
    </div>
  )
}

export default Pokedex
