import React from 'react';

function FilmCard({ titre, description, posterURL, note }) {
  return (
    <div className="film-card">
      <img src={posterURL} alt={titre} />
      <div className="film-info">
        <h2>{titre}</h2>
        <p>{description}</p>
        <p>Note : {note}</p>
      </div>
    </div>
  );
}

export default FilmCard;
