import React from 'react'
import CardPokemon from './CardPokemon'
import { useState, useEffect } from 'react'

const App = () => {

  const[allPokemons, setAllPokemons] = useState([])
  const[loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

   const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemons()
   }, [])

  return (
    <div>
          <h1>POKÉDEX</h1>
      <section>
                <div className="all-container">
                  {allPokemons.map( (pokemonStats, index) => 
                    <CardPokemon
                      key={index}
                      id={pokemonStats.id}
                      image={pokemonStats.sprites.other.dream_world.front_default}
                      name={pokemonStats.name}
                    />)}
                </div>
      </section>
      <button className="load-more" onClick={() => getAllPokemons()}>más</button>
    </div>
  )
}

export default App