import './navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
      <nav>
        <div className='left'>
        <Link to="/"><p>RateMy<span>Major</span></p></Link>
        </div>
        <div className='right'>
          <Link to="/aboutus">About Us</Link>
          <Link to="/usuage">Usuage</Link>
          <Link to="/login" className="login">Sign in</Link>
          <Link to="/register" className="register">Register</Link>
        </div>
      </nav>  // Closing tag added here
    );
  }
  
export default Navbar;