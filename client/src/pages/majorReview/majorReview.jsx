import React from 'react';
import { useParams, Link, useLoaderData } from 'react-router-dom';

import {Graph, getAvgQuality, getAvgDifficulty} from '../../components/graph/graph';
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
          <Link to={`/reviews/${majorName.toLowerCase().replace(/\s+/g, '-')}`} className="writeReview">Write a Review</Link>
        </div>
      </div>

      <div className='middle'>

        <div className='left'>
          <h2><span>Quality:</span> {getAvgQuality(reviews) || 0}/5</h2>
          <h2><span>Level of difficulty:</span> {getAvgDifficulty(reviews) || 0}/5</h2>
          <h4>Based on {reviews.length} ratings</h4>
          <h4>Please note that this is a people's review. We recommend using additional sources to make a well-informed decision.</h4>
        </div>

        <div className='right'>
          <Graph reviews={reviews}/>
        </div>

      </div>

      <div className='bottom'>
          <div className='reviewb'>
          <h2>Student Reviews</h2>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={`${review.reviewId}-${index}`} className='review'>
                      <div className='bottom-top'>
                          <h3>Name: {review.user.name || anonymous}</h3>
                          <h3><span>QUALITY: </span>{review.quality}/5</h3>
                          <h3><span>DIFFICULT: </span>{review.difficulty}/5</h3>
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
