import React from 'react';
import { useParams, Link, useLoaderData } from 'react-router-dom';

import Graph from '../../components/graph/graph';
import './majorReview.scss';

function MajorReview() {

  const reviews = useLoaderData() || []
  const { majorName } = useParams(); // Get the dynamic major name from the URL
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
          <Graph reviews={reviews}/>
        </div>

        <div className='right'>
          <h2>Student Reviews</h2>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={`${review.reviewId}-${index}`} className='review'>
                    <h3>{review.user.name || anonymous}</h3>
                      <div className='middle-top'>
                          <h3 className='quality'>QUALITY: {review.quality}/5</h3>
                          <h3 className='difficult'>DIFFICULT: {review.difficulty}/5</h3>
                      </div>
                    <p className='content'>Review: {review.review}</p>
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
