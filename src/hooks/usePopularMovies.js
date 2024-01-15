import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addPopularMovie } from '../utils/movieSlice';

const usePopularMovies = () => {
  const popularMovies = useSelector(store=> store.movies.popularMovies)

  const dispatch = useDispatch()
  



  useEffect(() => {
    const getPopularMovies = async () => {
      const url = 'https://api.themoviedb.org/3/movie/popular?page=1';
  
      const data = await fetch(url, API_OPTIONS)
      const json = await data.json()
      dispatch(addPopularMovie(json.results))
    }
    !popularMovies && getPopularMovies()
  }, [popularMovies, dispatch])

}

export default usePopularMovies