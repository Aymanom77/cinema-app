import React from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Cinema App</h1>
        {/* Barre de navigation ou menu */}
        {/* Vous pouvez ajouter des liens pour naviguer entre les différentes vues */}
      </header>
      <main>
        <Filter />
        <MovieList />
        {/* Contenu principal de votre application */}
        {/* Vous pouvez inclure ici d'autres composants ou éléments HTML */}
      </main>
      <footer>
        <p>&copy; 2022 Cinema App</p>
      </footer>
    </div>
  );
}

export default App;
