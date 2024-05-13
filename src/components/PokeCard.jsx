import React from 'react'

const PokeCard = ({pokemon, id}) => {
  return (
    <div className="bg-yellow-200 h-auto flex flex-col items-center justify-center p-5">
      <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`${pokemon.name}`} className='w-32 h-32 object-contain'/>
      </div>
      <p className='text-red-500 font-bold'>{pokemon.name}</p>
    </div>
  )
}

export default PokeCard