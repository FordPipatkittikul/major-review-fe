import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../../context/authContext";
import apiRequest from "../../lib/apiRequest";
import './loginPage.scss'

function LoginPage(){

    const {updateUser} = useContext(AuthContext);

    const [error,setError] = useState("");
    const [isLoading,setIsLoading] = useState(false); // PURPOSE: prevent user not clicking button twice while waiting resposne from server
    const navigate = useNavigate();

    const handleSubmit = async (event) => {

        event.preventDefault(); // to prevent reload
        setIsLoading(true);
        setError("");

        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");

        try{
            const res = await apiRequest.post("/auth/login",{
                email,
                password,
            })
            // console.log(res.data)
            updateUser(res.data)
            navigate("/majors");
        }catch(err){
            setError(err.response.data.msg)
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <>
            <h1>Welcome back</h1>
            <div className="loginPage">
                <form onSubmit={handleSubmit} className="formContainer">
                    <input name="email" required minLength={10} type="text" placeholder="Email" />
                    <input name="password" required minLength={4} type="password" placeholder="Password"/>
                    <button disabled={isLoading}>Login</button>
                    {error && <span>{error}</span>}
                    <Link to="/register">{"Don't"} you have an account?</Link>
                </form>
            </div>
        </>
    )
}

export default LoginPage;