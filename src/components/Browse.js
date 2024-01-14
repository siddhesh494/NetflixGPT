import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {

  useNowPlayingMovie()
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        Main container
          - Video background
          - video title
        Secondary container
          - MovieList * n
            - cards * n
          
        
      */}
    </div>
  )
}

export default Browse