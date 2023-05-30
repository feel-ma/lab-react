import React, { useState } from 'react';

const Rating = (probs) => {
  const [starsVisibility, setStarsVisibility] = useState(Array(5).fill(false));
  const rating= probs.children
  // Update stars visibility based on the rating
  useState(() => {
    const updatedStarsVisibility = Array(5).fill(false);
    for (let i = 0; i < rating; i++) {
      updatedStarsVisibility[i] = true;
    }
    setStarsVisibility(updatedStarsVisibility);
  }, [rating]);

  return (
    <div className='rating'>
      {starsVisibility.map((isVisible, index) => (
        <div className="star" key={index}>
          {isVisible ? '★' : '☆'}
        </div>
      ))}
    </div>
  );
};

export default Rating;
