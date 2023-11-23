import Header from "./Header"
import {useState} from 'react'

const Login = () => {

  const[signUp, setSignUp] = useState(true)

  const handleSignUp = () => {
    setSignUp(!signUp)
  }

    return(
        <div>
        <Header/>
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo"/>
        </div>
        <form className="w-3/12 absolute p-12 bg-black  my-36 mx-auto right-0 left-0 bg-opacity-80 text-white">
        <h1 className="font-bold  py-4">{signUp? "Sign In" : "Sign Up"}</h1>
        { !signUp && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-600 rounded-lg" />}
          <input type="text" placeholder="Email" className="p-4 my-4 w-full bg-gray-600 rounded-lg" />
         
          <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600 rounded-lg" />
          <button className="p-4 my-6 bg-red-700  rounded-lg">{signUp ? "Sign In" : "Sign Up"}</button>
          <p className="py-4 cursor-pointer" onClick={handleSignUp}>{signUp ? "New to Netflix?Sign Up Now" : "Already have account? Sign In"}</p>
        </form>
        </div>
    )
}

export default Login