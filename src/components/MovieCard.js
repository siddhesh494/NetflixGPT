import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({
  posterPath
}) => {
  if(!posterPath) return 
  return (
    <div
      className='w-36 md:w-48 pr-4'
    >
      <img
        src={IMG_CDN_URL + posterPath}
        alt={'poster'}
      />
    </div>
  )
}

export default MovieCard