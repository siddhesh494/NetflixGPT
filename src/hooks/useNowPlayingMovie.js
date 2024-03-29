import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addNowPlayingMovie } from '../utils/movieSlice';

const useNowPlayingMovie = () => {
  const nowPlayingMovies = useSelector(store=> store.movies.nowPlayingMovies)

  const dispatch = useDispatch()
  
  


  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
  
      const data = await fetch(url, API_OPTIONS)
      const json = await data.json()
      dispatch(addNowPlayingMovie(json.results))
    }

    if(!nowPlayingMovies) getNowPlayingMovies()
  }, [nowPlayingMovies, dispatch])

}

export default useNowPlayingMovie