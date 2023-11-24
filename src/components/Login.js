import Header from "./Header"
import {useState, useRef} from 'react'
import { Validate } from "../utilites/Validate"
import { auth } from "../utilites/Firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utilites/userSlice";

const Login = () => {

  const[isSignIn, setIsSignIn] = useState(true)
  const[error,setError] = useState()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const name = useRef(null)
  const email  = useRef(null)
  const password = useRef(null)

  const handleValidation = () => {

    const validation = Validate(email.current.value,password.current.value)
     console.log(validation)
     setError(validation)
     if(validation) return

     if(!isSignIn){
      
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
   updateProfile(user, {
  displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/99048353?v=4"
    }).then(() => {
      const {uid,email, displayName,photoURL } = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      navigate("/browse")
  // ...
   }).catch((error) => {
      setError(error.validation)
   });

    console.log(user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode + "-" + errorMessage)
  });

     } 
     else {
    
  signInWithEmailAndPassword(auth, email.current.value,password.current.value )
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode + "-" + errorMessage)
  });
     }
  }

  const handleSignUp = () => {
    setIsSignIn(!isSignIn)
  }

    return(
        <div>
        <Header/>
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo"/>
        </div>
        <form onSubmit={(e)=> {e.preventDefault()}} className="w-3/12 absolute p-12 bg-black  my-36 mx-auto right-0 left-0 bg-opacity-80 text-white">
        <h1 className="font-bold  py-4">{isSignIn? "Sign In" : "Sign Up"}</h1>
        { !isSignIn && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-600 rounded-lg" />}
          <input  ref={email} type="text" placeholder="Email" className="p-4 my-4 w-full bg-gray-600 rounded-lg" />
           
          <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600 rounded-lg" />
          <p className="text-red-700">{error}</p>
          <button className="p-4 my-6 bg-red-700  rounded-lg" onClick={handleValidation}>{isSignIn ? "Sign In" : "Sign Up"}</button>
          <p className="py-4 cursor-pointer" onClick={handleSignUp}>{isSignIn ? "New to Netflix?Sign Up Now" : "Already have account? Sign In"}</p>
        </form>
        </div>
    )
}

export default Login