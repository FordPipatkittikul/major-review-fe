import { Link, useNavigate } from "react-router-dom";


import './loginPage.scss'

function LoginPage(){
    return(
        <>
            <h1>Welcome back</h1>
            <div className="loginPage">
                <form className="formContainer">
                    <input name="email" required minLength={4} maxLength={20} type="text" placeholder="Email" />
                    <input name="password" required minLength={4} maxLength={20} type="password" placeholder="Password"/>
                    <button>Login</button>
                    <Link to="/register">{"Don't"} you have an account?</Link>
                </form>
            </div>
        </>
    )
}

export default LoginPage;