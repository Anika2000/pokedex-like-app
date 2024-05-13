"use client"
import React, { useEffect } from 'react'
import PokeCard from './PokeCard'
import { useState } from 'react'
import Spinner from './Spinner'
import PrevNext from './PrevNext'

const Cards = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  
  useEffect(() => {
    setLoading(true);
    const fetchPokemons = async () => {
      try {
        const response = await fetch(currentPageUrl)
        const data = await response.json()
        setPokemonList(data.results)
        setNextUrl(data.next)
        setPrevUrl(data.previous)
      } catch (error) {
        console.log(error)
      }finally {
        setLoading(false)
      }
    }
    fetchPokemons()
  }, [currentPageUrl])

  const handleNext = () => {
    setCurrentPageUrl(nextUrl)
  }

  const handlePrev = () => {
    setCurrentPageUrl(prevUrl)
  }


  return (
    <>
    <div className="grid grid-cols-3 gap-4">
    {loading ?  (
      <Spinner loading={loading}/>
    ) : (
    <>
    {pokemonList.map((pokemon, index) => {
      const url = pokemon.url;
      const idArr = url.split('/');
      const id = idArr[idArr.length - 2];
      return <PokeCard key={parseInt(id)} pokemon={pokemon} id={parseInt(id)}/>
    })}
    <div className="bg-red-500 h-auto flex flex-col items-center justify-center p-5">Click Me!</div>
    </>)}
    </div>
    <PrevNext
    prevPage={prevUrl ? handlePrev : null} 
    nextPage={nextUrl ? handleNext : null}
    />   
  </>
  )
}


export default Cards