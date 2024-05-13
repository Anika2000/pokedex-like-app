"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'

const page = () => {
  const { id } = useParams()
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchSpecificPokemon = async () => {
      
      try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        setData(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchSpecificPokemon()
  }, [id])

  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-5 gap-4 mx-auto mt-30">
      {/* Empty column for offset (hidden on mobile) */}
        <section className="hidden md:block"></section>
      {/* Main section with 3 columns for Pokemon cards */}
        <section className="col-span-1 bg-gray-300 flex justify-center items-center rounded-md">
          {data ? <img src={data.sprites.front_default} alt='pokemon' width={200} height={200}/> : <div>No Image found...</div>}
        </section>
        <section className="col-span-2 bg-green-300 w-45 h-45 p-4 flex rounded-3xl">
            <div className='m-10'>
              <Image src="/pokeball.png" alt='pokemon-logo' width={50} height={50}/>
            </div>
            <div className="flex flex-wrap">
              <div className='w-1/2 px-10'>
                <h1 className='text-black'>Height:</h1>
                {data ? <div className='text-black font-bold justify-center'>{data.height}</div> : <div>Unknown...</div>}
                <h1 className='text-black'>Weight:</h1>
                {data ? <div className='text-black font-bold justify-center'>{data.weight}</div> : <div>Unknown...</div>}
                <h1 className='text-black'>Types:</h1>
                {data ? <div className='text-black font-bold justify-center'>{data.types.map((type) => type.type.name).join(', ')}</div> : <div>Unknown...</div>}
              </div>
              <div className="w-1/2 px-10">
                <h1 className='text-black'>Abilities:</h1>
                {data ? <div className='text-black font-bold justify-center'>{data.abilities.map((ability) => ability.ability.name).join(', ')}</div> : <div>Unknown...</div>}
                <h1 className='text-black'>Moves:</h1>
                {data ? <div className='text-black font-bold justify-center'>{data.moves.slice(0, 5).map((move) => move.move.name).join(', ')}</div> : <div>Unknown...</div>}
              </div>
            </div>
        </section>
      {/* Empty column for offset (hidden on mobile) */}
        <section className="hidden md:block"></section>
      </main>
      {data && <div className='col-span-1 bg-black flex justify-center mt-10 text-5xl'>{data.name}</div>}
    </>
  )
}

export default page