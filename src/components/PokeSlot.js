import React from 'react'
import pokeball from '../images/pokeball.png'
import pokedexData from '../pokedexData.js'

const PokeSlot = ({id, type, pokeTeamSlot, handleSlotClick}) => {
  let pokemonImage
  let pokemonName
  if (pokeTeamSlot === '000') {
    pokemonImage = pokeball
    pokemonName = 'Empty Slot'
  } else {
    pokemonImage = pokedexData[pokeTeamSlot]['image']
    pokemonName = pokedexData[pokeTeamSlot]['name']
  }
  return (
  <li>
    <h1 className='App-PokeTeam-SlotName'>{pokemonName}</h1>
    <img
      id={id} data-type={type}
      src={pokemonImage}
      className='App-PokeTeam-SlotImage' alt='Pokemon'
      onClick={handleSlotClick} />
    <h3>{type}</h3>
  </li>
  )
}

export default PokeSlot
