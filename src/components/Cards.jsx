"use client"
import React, { useEffect } from 'react'
import PokeCard from './PokeCard'
import { useState } from 'react'
import Spinner from './Spinner'


import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import PrevNext from './PrevNext'

const Cards = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  
  useEffect(() => {
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
    setLoading(true)  
  }

  const handlePrev = () => {
    setCurrentPageUrl(prevUrl)
    setLoading(true)
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
      return <PokeCard key={parseInt(id)} pokemon={pokemon}/>
    })}
    </>)}
    </div>
    <PrevNext
    prevPage={prevUrl ? handleNext : null} 
    nextPage={nextUrl ? handlePrev : null}
    />   
  </>
  )
}


export default Cards