import { Link, useNavigate } from "react-router-dom";


import './registerPage.scss'

function RegisterPage(){
    return(
        <>
            <h1>Create an Account</h1>
            <div className="registerPage">
                <form className="formContainer">
                    <input name="username" type="text" placeholder="Username"/>
                    <input name="password" required minLength={4} maxLength={20} type="password" placeholder="Password"/>
                    <button>Register</button>
                    <Link to="/login">Do you have an account?</Link>
                </form>
            </div>
        </>
    )
}

export default RegisterPage;