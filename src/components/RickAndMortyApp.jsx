import React, { useState } from "react";

import "./RickAndMortyApp.css";

// SECCIÓN 6. VIDEO 69,70

const RickAndMortyApp = () => {
  const [characters, setCharacters] = useState(["Rick", "Morty", "Beth"]);

  return (
    <section>
      <h2>Rick and Morty App</h2>
      <hr />
      <div>
        {characters.map((character) => {
          return <p key={character}>{character}</p>;
        })}
      </div>
    </section>
  );
};

export default RickAndMortyApp;
