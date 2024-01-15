import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS, DUMMY_GPT_RESPONSE } from '../utils/constant'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config?.lang)
  const searchText = useRef(null)
  const dispatch = useDispatch()

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    try { 
      
      const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
      const data = await fetch(url, API_OPTIONS)
      const json = await data.json()
      return json.results

    } catch (error) {
      
    }
  }


  const handleGptSearchClick = async () => {
    let gptResults = {}
    try {
      const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query " + 
      searchText.current.value + 
      ". only give me names of 5 movies, comma separated. like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaaya."
      
      // make an API call to GPT API and get movie result
      const res = await openai.chat.completions.create({
        messages: [{ 
          role: 'user', 
          content: gptQuery
        }],
        model: 'gpt-3.5-turbo',
      });

      gptResults = res.choices
    } catch (error) {
      console.log("Billing issue")
      gptResults = DUMMY_GPT_RESPONSE
    }

    // logic for get moview from TMDB api
    const gptMovies = gptResults?.[0]?.message?.content.split(",") 
    const promiseArray = gptMovies?.map((movie) => searchMovieTMDB(movie))

    const tmdbResults = await Promise.all(promiseArray)

    console.log(tmdbResults)

    dispatch(addGptMovieResult({
      movieNames: gptMovies,
      movieResults: tmdbResults
    }))
  }


  return (
    <div className='pt-[10%] flex justify-center'>
      <form 
        className='w-1/2 bg-black grid grid-cols-12'
        onSubmit={e => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchHolder}
          className='p-4 m-4 col-span-9'
        />
        <button
          className='m-4 py-2 px-2 bg-red-700 text-white rounded-lg col-span-3'
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar