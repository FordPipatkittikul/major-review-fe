import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


import apiRequest from "../../lib/apiRequest";
import './registerPage.scss'

function RegisterPage(){

    const [error,setError] = useState("");
    const [isLoading,setIsLoading] = useState(false); // PURPOSE: prevent user not clicking button twice while waiting resposne from server
    const navigate = useNavigate();

    const handleSubmit = async (event) => {

        event.preventDefault(); // to prevent reload
        setIsLoading(true);
        setError("");
        
        const formData = new FormData(event.target);
        const email = formData.get("email");
        const name = formData.get("name");
        const password = formData.get("password");
        
        try{
            const res = await apiRequest.post("/auth/register",{
                email,
                name,
                password,
            })
            navigate("/login");
        } catch(err){
            setError(err.response.data.msg)
        } finally{
            setIsLoading(false)
        }
    }

    return(
        <>
            <h1>Create an Account</h1>
            <div className="registerPage">
                <form className="formContainer" onSubmit={handleSubmit}>
                    <input name="email" required minLength={10} type="text" placeholder="Email" />
                    <input name="name" type="text" placeholder="Username"/>
                    <input name="password" required type="password" placeholder="Password"/>
                    <button disabled={isLoading}>Register</button>
                    {error && <span>{error}</span>}
                    <Link to="/login">Do you have an account?</Link>
                </form>
            </div>
        </>
    )
}

export default RegisterPage;