import './writeReview.scss';


function WriteReview(){
    return(
        <>
        <h1>Share Your Major Story: How You Feel?</h1>
        <div className="writeReviewPage">
            <form className="formContainer">
                <input name="quality" required min="1" max="5" type="number" placeholder="quality out of 5" />
                <input name="difficult" required min="1" max="5" type="number" placeholder="Difficult out of 5" />
                <textarea id="desc" required name="desc" placeholder="Share your experience" rows="4" cols="50" ></textarea>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}

export default WriteReview;