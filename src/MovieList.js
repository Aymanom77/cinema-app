import React, { useState } from 'react';
import Filter from './Filter';
import FilmList from './FilmList';     
 // Assurez-vous d'avoir un composant FilmList pour afficher les films

function MovieList({ films }) {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  // Fonction de filtrage des films
  const filterFilms = () => {
    return films.filter(film => {
      // Filtrer par titre
      const titleMatch = film.title.toLowerCase().includes(titleFilter.toLowerCase());
      // Filtrer par note (si renseignée)
      const ratingMatch = !ratingFilter || film.rating >= parseFloat(ratingFilter);
      return titleMatch && ratingMatch;
    });
  };

  // Mettre à jour les filtres de titre et de note en fonction de l'entrée utilisateur
  const handleTitleFilterChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRatingFilterChange = (e) => {
    setRatingFilter(e.target.value);
  };

  return (
    <div>
      {/* Filtrage des films */}
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleFilterChange={handleTitleFilterChange}
        onRatingFilterChange={handleRatingFilterChange}
      />
      {/* Affichage de la liste filtrée des films */}
      <FilmList films={filterFilms()} />
    </div>
  );
}

export default MovieList;
