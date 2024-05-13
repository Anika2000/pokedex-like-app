"use client"
import React, { useEffect } from 'react'
import PokeCard from './PokeCard'
import { useState } from 'react'
import Spinner from './Spinner'
import PrevNext from './PrevNext'

const Cards = () => {
  const [facts, setFacts] = useState('')

  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')


  const handleRedClick = async () => {
    try {
      const res = await fetch('https://api.chucknorris.io/jokes/random');
      const fact = await res.json();
      setFacts(fact.value)
    }catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleRedClick()
  }, [])

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
    {pokemonList.map((pokemon) => {
      const url = pokemon.url;
      const idArr = url.split('/');
      const id = idArr[idArr.length - 2];
      return <PokeCard key={parseInt(id)} pokemon={pokemon} id={parseInt(id)}/>
    })}
    <div className="bg-red-500 flex flex-col items-center justify-center p-5
     cursor-pointer h-48 overflow-y-auto" onClick={handleRedClick}>
      {facts ? <p >{facts}</p> : <p>Click Me!</p>}
      </div>
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