import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import React from 'react';
function App() {
  return (
    <Router>
      {/* Contenu de votre application ici */}
      <Routes>

     <Route path="/" exact component={MovieList} />
     
    </Routes>

    </Router>
  ); 
  }
  export default App;