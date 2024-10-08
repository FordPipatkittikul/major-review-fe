import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext';
import { useContext, useState } from "react";

import apiRequest from "../../lib/apiRequest";
import './navbar.scss'

function Navbar() {

    const navigate = useNavigate();
    const [open,setOpen] = useState(false);
    const {currentUser, updateUser} = useContext(AuthContext);
    const [isLoading,setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
      
      event.preventDefault(); // to prevent reload
      setIsLoading(true);

      try{
        await apiRequest.post("/auth/logout")
        updateUser(null)
        navigate("/");
      }catch(err){
        console.log(err)
      }finally{
        setIsLoading(false)
      }
    }

    return (
      <nav>
        <div className='left'>
        <Link to="/"><p>RateMy<span>Major</span>💭</p></Link>
        </div>
        <div className='right'>

          {currentUser ? (
            <div className='afterLogin'>
              <Link to="/aboutus">About Us</Link>
              <Link to="/usuage">Usuage</Link>
              <Link disabled={isLoading} onClick={handleSubmit}>Logout</Link>
            </div>
          ):
          (
            <>
              <Link to="/aboutus">About Us</Link>
              <Link to="/usuage">Usuage</Link>
              <Link to="/login" className="login">Sign in</Link>
              <Link to="/register" className="register">Register</Link>
            </>
          )

          }

          <div className="menuIcon">
                <img 
                    src="/menu.png" 
                    alt="Menu Icon" 
                    onClick={() => setOpen((prev) => !prev)}
                />
          </div>
          
          <div className={open ? "menu active": "menu"}>
                {currentUser ? (
                    <>
                      <Link to="/"><p>RateMy<span>Major</span></p></Link>
                      <Link to="/aboutus">About Us</Link>
                      <Link to="/usuage">Usuage</Link>
                      <Link disabled={isLoading} onClick={handleSubmit}>Logout</Link>
                    </>
                )  : (
                <>
                  <Link to="/"><p>RateMy<span>Major</span></p></Link>
                  <Link to="/aboutus">About Us</Link>
                  <Link to="/usuage">Usuage</Link>
                  <Link to="/login" className="login">Sign in</Link>
                  <Link to="/register" className="register">Register</Link>
                </>
                )
                }
          </div>

        </div>
      </nav>  // Closing tag added here
    );
  }
  
export default Navbar;