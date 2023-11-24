import { signOut } from "firebase/auth";
import { auth } from "../utilites/Firebase";
import { useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
const Header = () => {

    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
     }).catch((error) => {
             navigate("/error")
        });
    }

   

    return (
        <>
        <div className=" justify-between flex absolute w-full bg-gradient-to-b from-black px-8 py-2 z-10">
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
            alt="main-logo"
                className="w-44"
            />
            {user &&
            <div className="flex p-2">
                 <img alt="userimg" src={user?.photoURL} className="w-12 h-12"/>
                 <h4>{user.displayName}</h4>
                <button className="p-3 bg-red-600 text-white rounded-lg text-sm" onClick={handleSignOut}>SignOut</button>
            </div>}
        </div>
        </>
    )
}
export default Header