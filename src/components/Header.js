import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constant';

const Header = () => {
  const dispatch = useDispatch()

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

  return (
    <div
      className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10
      flex justify-between
      '
    >
      <img
        className='w-48'
        src={LOGO}
        alt={"logo"}
      />

      {user && <div className='flex p-2'>
        <img
          src={user?.photoURL}
          className='w-12 h-12 '
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