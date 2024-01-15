import { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constant';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const toggleSignInForm = () => {
    setIsSignInForm(prev => !prev)
  }

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)
    console.log( password.current.value)

    if(message) return


    // signin / signup
    if(!isSignInForm) {
      // sign up

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;

            dispatch(addUser({
              uid,
              email, 
              displayName,
              photoURL
            }))


          }).catch((error) => {
            // An error occurred
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            setErrorMessage(`${errorCode}-${errorMessage}`)
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(`${errorCode}-${errorMessage}`)
        });

    } else {
      // sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}-${errorMessage}`)
        });
    }


  }


  return (
    <div>
      <Header />
      <div
        className='absolute '
      >
        <img
        className='h-screen object-cover md:object-none md:h-auto'
          src={BG_URL}
          alt={"logo"}
        />
      </div>
      
      <form 
        className='absolute p-12 bg-black w-full md:w-3/12 my-36 mx-auto 
        right-0 left-0 text-white rounded-lg bg-opacity-80'
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          ref={name}
          type='text'
          placeholder='Name'
          className='p-4 my-4 w-full bg-gray-700'
        />}
        <input
          ref={email}
          type='text'
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-700'
        />  
        
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700'
        />  
        <p className='text-red-500 text-lg py-2' >{errorMessage}</p>
        <button
          className='p-4 my-6 bg-red-700 w-full rounded-lg'
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 cursor-pointer'
          onClick={toggleSignInForm}
        >
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already resigtered? Sign In Now"}
        </p>
        
      </form>
    </div>
  )
}

export default Login