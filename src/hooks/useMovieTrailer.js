

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (
  movieId
) => {

  const trailerVideo = useSelector(store=> store.movies.trailerVideo)

  const dispatch = useDispatch()

  

  useEffect(() => {
    // fetch trailer video and updating the store with trailer video data
    const getMovieVideos = async () => {

      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
      
      const data = await fetch(url, API_OPTIONS)
      const json = await data.json()
      const filterData = json.results.filter(video => video.type === 'Trailer') 
      const trailer = filterData.length ? filterData[0] : json.results[0]
      
      dispatch(addTrailerVideo(trailer))
    };
    !trailerVideo && getMovieVideos()
  }, [trailerVideo, dispatch, movieId])
}
export default useMovieTrailer