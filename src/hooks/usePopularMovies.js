import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addPopularMovie } from '../utils/movieSlice';

const usePopularMovies = () => {

  const dispatch = useDispatch()
  
  const getPopularMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?page=1';

    const data = await fetch(url, API_OPTIONS)
    const json = await data.json()
    dispatch(addPopularMovie(json.results))
  }


  useEffect(() => {
    getPopularMovies()
  }, [])

}

export default usePopularMovies