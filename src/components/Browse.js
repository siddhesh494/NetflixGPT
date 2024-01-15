import React, { } from 'react'
import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt?.showGptSearch)

  useNowPlayingMovie()
  usePopularMovies()
  
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      
      
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