import React, { useState } from 'react';
import FilmCard from './FilmCard';

function MovieList() {
  const [films, setFilms] = useState([]);
  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    posterURL: '',
    note: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFilm = {
      titre: formData.titre,
      description: formData.description,
      posterURL: formData.posterURL,
      note: formData.note
    };
    setFilms([...films, newFilm]);
    setFormData({
      titre: '',
      description: '',
      posterURL: '',
      note: ''
    });
  };

  return (
    <div>
      <h1>Liste des Films</h1>
      {films.map((film, index) => (
        <FilmCard key={index} {...film} />
      ))}
      <h2>Ajouter un nouveau film</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titre"
          value={formData.titre}
          onChange={handleChange}
          placeholder="Titre du film"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description du film"
        />
        <input
          type="text"
          name="posterURL"
          value={formData.posterURL}
          onChange={handleChange}
          placeholder="URL du poster du film"
        />
        <input
          type="text"
          name="note"
          value={formData.note}
          onChange={handleChange}
          placeholder="Note du film"
        />
        <button type="submit">Ajouter le film</button>
      </form>
    </div>
  );
}

export default MovieList;
