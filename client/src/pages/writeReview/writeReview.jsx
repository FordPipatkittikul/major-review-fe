import { useParams,useNavigate,Link } from "react-router-dom";
import { useState,useContext } from "react";

import { AuthContext } from "../../context/authContext";
import apiRequest from "../../lib/apiRequest";
import './writeReview.scss';


function WriteReview(){

    const {currentUser} = useContext(AuthContext);
    const { majorName } = useParams();
    const [error,setError] = useState("");
    const [isLoading,setIsLoading] = useState(false); // PURPOSE: prevent user not clicking button twice while waiting resposne from server
    const navigate = useNavigate();

    const handleSubmit = async (event) => {

        event.preventDefault(); // to prevent reload
        setIsLoading(true);
        setError("");
        
        const formData = new FormData(event.target);
        const quality = formData.get("quality");
        const difficulty = formData.get("difficult");
        const review = formData.get("desc");
        
        try{
            const res = await apiRequest.post("/reviews/",{
                majorName,
                quality,
                difficulty,
                review,
                currentUser
            })
            navigate(`/majors/${majorName.toLowerCase().replace(/\s+/g, '-')}`);
        } catch(err){
            setError(err.response.data.msg)
        } finally{
            setIsLoading(false)
        }
    }


    return(
        
        currentUser ? (
            <>
            <h1>Share Your Major Story: How You Feel?</h1>
            <div className="writeReviewPage">
                <form onSubmit={handleSubmit} className="formContainer">
                    <input name="quality" required min="1" max="5" type="number" placeholder="quality out of 5" />
                    <input name="difficult" required min="1" max="5" type="number" placeholder="Difficult out of 5" />
                    <textarea id="desc" required name="desc" placeholder="Share your experience" rows="4" cols="50" ></textarea>
                    <button disabled={isLoading}>Submit</button>
                    {error && <span>{error}</span>}
                </form>
            </div>
            </>
        )
        :
        (
            <Link to="/login"><h1>You need to Login First before writing a reviews</h1></Link>
        )

    )
}

export default WriteReview;