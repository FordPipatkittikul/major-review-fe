import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './majorReview.scss';

// Will delete once we have database
const reviews = {
  "💻-computer-science": [
    { id: 1, author: "John", difficult:2,content: "Great program! Loved the professors" },
    { id: 2, author: "Jane", difficult:3,content: "A lot of theory, but it's worth it." }
  ],
  "⚙️-mechanical-engineering": [
    { id: 1, author: "Alex", difficult:4, content: "Very challenging but rewarding." },
    { id: 2, author: "Chris", difficult:4, content: "Hands-on experience is great!" }
  ],
};

function MajorReview() {

  const { majorName } = useParams(); // Get the dynamic major name from the URL
  const formattedMajorName = majorName.toLowerCase().replace(/\s+/g, '-');
  const majorReviews = reviews[formattedMajorName] || []; // Fallback to an empty array if no reviews exist
  const anonymous = "Anonymous"
  
  return (
    <div>
      <div className='top'>
        
        <div className='left'>
          <h1>Review for {majorName}</h1>
        </div>

        <div className='right'>
          <Link to={`/reviews/${majorName.toLowerCase().replace(/\s+/g, '-')}`} className="login">Write a Review</Link>
        </div>
      </div>

      <div className='middle'>

        <div className='left'>
          <h1>OverView</h1>
        </div>

        <div className='right'>
          <h2>Student Reviews</h2>
            {majorReviews.length > 0 ? (
              majorReviews.map(review => (
                <div key={review.id} className='review'>
                  <div className='middle-top'>
                    <h3>By {review.author || anonymous}</h3>
                    <h3 className='difficult'>Difficult: {review.difficult}/5</h3>
                  </div>
                  <p className='content'>{review.content}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet for {majorName}. Be the first to <Link to={`/reviews/${majorName.toLowerCase().replace(/\s+/g, '-')}`} className="login">Write a Review</Link>.</p>
            )}
        </div>

      </div>
    </div>
  );
}

export default MajorReview;
