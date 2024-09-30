import {Outlet} from "react-router-dom";

import Navbar from "../../components/navbar/navbar";
import './layout.scss'


function Layout(){
    return (
      <div className="layout">
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="content">
          <Outlet/>
        </div>
      </div>
    )
  }

// function RequireAuthLayout() {
//     return (
//         <div>

//         </div>
//     )
// }

export {Layout};