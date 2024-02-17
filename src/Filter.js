import React, { useState } from 'react';

function Filter({ onFilter }) {
  const [titre, setTitre] = useState('');
  const [note, setNote] = useState(null);

  const handleTitreChange = (event) => {
    setTitre(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    onFilter({ titre, note });
  };

  return (
    <form onSubmit={handleFilterSubmit}>
      <input
        type="text"
        placeholder="Titre du film"
        value={titre}
        onChange={handleTitreChange}
      />
      <input
        type="number"
        placeholder="Note du film"
        value={note}
        onChange={handleNoteChange}
      />
      <button type="submit">Filtrer</button>
    </form>
  );
}

export default Filter;
