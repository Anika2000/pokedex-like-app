"use client"
import React, { useEffect } from 'react'
import PokeCard from './PokeCard'
import { useState } from 'react'
import Spinner from './Spinner'

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


  return (
    <div className="grid grid-cols-3 gap-4">
    {loading ?  (
      <Spinner loading={loading}/>
    ) : (
    <>
    {pokemonList.map((pokemon) => {
      const url = pokemon.url;
      const id = parseInt(url.split('/')[url.length - 2]);
      return <PokeCard key={id} pokemon={pokemon}/>
    })}
    </>)}
    </div>
    
  )
}


export default Cards