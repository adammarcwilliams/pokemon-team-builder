import React from 'react'
import PokeSlot from '../components/PokeSlot.js'

const PokeTeam = ({pokeTeamArray, handleSlotClick}) => {
  return (
    <div id='slider' className='App-PokeTeam'>
      <ul>
        <PokeSlot id='0' type='fire' pokeTeamSlot={pokeTeamArray[0]} handleSlotClick={handleSlotClick}/>
        <PokeSlot id='1' type='fire' pokeTeamSlot={pokeTeamArray[1]} handleSlotClick={handleSlotClick}/>
        <PokeSlot id='2' type='water' pokeTeamSlot={pokeTeamArray[2]} handleSlotClick={handleSlotClick}/>
        <PokeSlot id='3' type='water' pokeTeamSlot={pokeTeamArray[3]} handleSlotClick={handleSlotClick}/>
        <PokeSlot id='4' type='electric' pokeTeamSlot={pokeTeamArray[4]} handleSlotClick={handleSlotClick}/>
        <PokeSlot id='5' type='electric' pokeTeamSlot={pokeTeamArray[5]} handleSlotClick={handleSlotClick}/>
      </ul>
    </div>
  )
}

export default PokeTeam
