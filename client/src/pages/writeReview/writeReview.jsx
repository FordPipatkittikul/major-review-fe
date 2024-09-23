import './writeReview.scss';


function WriteReview(){
    return(
        <>
        <h1>Share Your Major Story: How You Feel?</h1>
        <div className="writeReviewPage">
            <form className="formContainer">
                <input name="difficult" required minLength={1} maxLength={1} min="1" max="5" type="number" placeholder="Difficult" />
                <textarea id="desc" required name="desc" placeholder="Experience" rows="4" cols="50" ></textarea>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}

export default WriteReview;