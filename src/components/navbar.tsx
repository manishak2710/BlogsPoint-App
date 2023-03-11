import { Link } from "react-router-dom";
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth';
import '../styles/navbar.css';
import BlogsPoint from "./BlogsPoint.png"
export const Navbar = () => {
    const [user] = useAuthState(auth);
    const signUserOut = async() => {
    await signOut(auth);
    }
    return (
      <div className="navbar">
        <img className="navbar-logo" src={BlogsPoint} /> 
        
        <div className="navbar-links">
          <Link to="/">Home</Link>
          {!user?<Link to="/login">Login</Link>:<Link to="/createpost">Create Post</Link>}
        </div>

        <div className="navbar-profile">
            {user && (
        <>
        <img src={user?.photoURL || ""} />
        <p>{user?.displayName}</p>
          
          <button onClick={signUserOut}>Log Out</button>
          </>
           )}
        </div>
      </div>
    );
  };
  