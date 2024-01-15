import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGE } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch()
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate('/')
      
    }).catch((error) => {
      // An error happened.
    });
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(addUser({
          uid,
          email, 
          displayName,
          photoURL
        }))
        navigate('/browse')

      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate('/')
        
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe()
  }, [])

  const handleGptSearchClick = () => {
    // Toggle GPT search

    dispatch(toggleGptSearchView())
  }
  const handleLanguageChange = (e) => {
    console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))

  }

  return (
    <div
      className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10
      flex flex-col md:flex-row justify-between
      '
    >
      <img
        className='w-48 mx-auto md:mx-0'
        src={LOGO}
        alt={"logo"}
      />

      {user && <div className='flex p-2 mx-auto md:mx-0'>
        {showGptSearch && <select
          className='p-2 bg-gray-900 text-white m-2'
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGE.map(language => 
            <option key={language.identifier} value={language.identifier}>
              {language.name}
            </option>
          )}
          
        </select>}
        <button 
          className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'
          onClick={handleGptSearchClick}  
        >
          {showGptSearch ? "Homepage" : "GPT Search"}
        </button>
        <img
          src={user?.photoURL}
          className='w-12 h-12 hidden md:block'
          alt='userIcon'
        />
        <button
          className='font-bold text-white'
          onClick={handleSignOut}
        >
          (Sign Out)
        </button>
      </div>}

      
    </div>
  )
}

export default Header