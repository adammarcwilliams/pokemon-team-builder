import React, { Component } from 'react'
import Hammer from 'react-hammerjs'
import Header from '../components/Header.js'
import PokeTeam from '../components/PokeTeam.js'
import Pokedex from '../components/Pokedex.js'
import './App.css'

class App extends Component {

  constructor () {
    super()
    this.state = {
      pokeTeamArray: ['000', '000', '000', '000', '000', '000'],
      pokedexIsOpen: false,
      pokedexDisplayType: 'electric',
      currentPokeBall: 0
    }
    this.handleSlotClick = this.handleSlotClick.bind(this)
    this.handlePokemonClick = this.handlePokemonClick.bind(this)
  }

  handleSlotClick (e) {
    let pokeballClicked = Number.parseInt(e.target.id, 10)
    console.log(pokeballClicked)
    switch (pokeballClicked) {
      case 0:
        this.setState({pokedexIsOpen: true, pokedexDisplayType: 'fire', currentPokeBall: pokeballClicked})
        break
      case 1:
        this.setState({pokedexIsOpen: true, pokedexDisplayType: 'fire', currentPokeBall: pokeballClicked})
        break
      case 2:
        this.setState({pokedexIsOpen: true, pokedexDisplayType: 'water', currentPokeBall: pokeballClicked})
        break
      case 3:
        this.setState({pokedexIsOpen: true, pokedexDisplayType: 'water', currentPokeBall: pokeballClicked})
        break
      case 4:
        this.setState({pokedexIsOpen: true, pokedexDisplayType: 'electric', currentPokeBall: pokeballClicked})
        break
      case 5:
        this.setState({pokedexIsOpen: true, pokedexDisplayType: 'electric', currentPokeBall: pokeballClicked})
        break
      default:
        console.log('Something went wrong')
    }
  }

  handlePokemonClick (e) {
    let currentPokeBall = this.state.currentPokeBall
    let pokeTeamArray = this.state.pokeTeamArray
    let pokemonID = e.target.id

    let mutatedArray = pokeTeamArray
    if (mutatedArray.includes(pokemonID)) {
      let index = mutatedArray.indexOf(pokemonID)
      mutatedArray.splice(index, 1, '000')
    }
    mutatedArray.splice(currentPokeBall, 1, pokemonID)
    this.setState({pokeTeamArray: mutatedArray})
  }

  handlePan (e) {
    console.log(e)
    let scrollamount = 0
    scrollamount = scrollamount + (-1 * e.deltaX)
    document.getElementById('slider').scrollLeft += scrollamount
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <Hammer onPan={this.handlePan}><PokeTeam pokeTeamArray={this.state.pokeTeamArray} handleSlotClick={this.handleSlotClick}/></Hammer>
        { this.state.pokedexIsOpen
          ? <Pokedex
            pokeTeamArray={this.state.pokeTeamArray}
            handlePokemonClick={this.handlePokemonClick}
            type={this.state.pokedexDisplayType}/>
          : null}
      </div>
    )
  }
}

export default App
