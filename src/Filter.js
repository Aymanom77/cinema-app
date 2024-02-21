import React, { useState } from 'react';

function Filter() {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Titre du film"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Note du film"
        value={ratingFilter}
        onChange={handleRatingChange}
      />
    </div>
  );
}

export default Filter;
