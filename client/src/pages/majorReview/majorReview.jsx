import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import './majorReview.scss';

// will delete once we have database
const reviews = {
  "computer-science": [
    { id: 1, author: "John", content: "Great program! Loved the professors." },
    { id: 2, author: "Jane", content: "A lot of theory, but it's worth it." }
  ],
  "mechanical-engineering": [
    { id: 1, author: "Alex", content: "Very challenging but rewarding." },
    { id: 2, author: "Chris", content: "Hands-on experience is great!" }
  ],
  // Add more majors and their reviews here...
};


function MajorReview() {
  const { majorName } = useParams(); // Get the dynamic major name from the URL
  const formattedMajorName = majorName.toLowerCase().replace(/\s+/g, '-');

  const majorReviews = reviews[formattedMajorName] || []; // Fallback to an empty array if no reviews exist

  // Fetch or display content based on the majorName
  return (
    <div>
      <Navbar/>
      <div className='top'>
        
        <div className='left'>
          <h1>Review for {majorName}</h1>
        </div>

        <div className='right'>
          <Link to="/review" className="login">Write a Review</Link>
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
                  <h3>By {review.author}</h3>
                  <p>{review.content}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet for {majorName}. Be the first to <Link to="/review">write a review</Link>.</p>
            )}
        </div>

      </div>
    </div>
  );
}

export default MajorReview;