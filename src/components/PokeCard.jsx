import React from 'react'
import Link from 'next/link'

const PokeCard = ({pokemon, id}) => {
  return (
    <Link href={`/pokemon/${id}`}>
    <div className="bg-yellow-200 h-auto flex flex-col items-center justify-center p-5 cursor-pointer hover:scale-95
              transition-transform duration-200 ease-out">
      <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`${pokemon.name}`} className='w-32 h-32 object-contain'/>
      </div>
      <p className='text-red-500 font-bold'>{pokemon.name}</p>
    </div>
    </Link>
    
  )
}

export default PokeCard