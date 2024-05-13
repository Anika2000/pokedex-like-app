import React, { useEffect } from 'react'

const PokeCard = ({pokemon}) => {
  
  
  return (
    <div className="bg-yellow-200 h-40 flex justify-center items-center">
      <div>
      <img src='' alt={`${pokemon.name}`} className='w-32 h-32 object-contain'/>
      </div>
    </div>
  )
}

export default PokeCard