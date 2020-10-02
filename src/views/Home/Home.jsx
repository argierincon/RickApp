import React, { useState } from "react";
import AddCharacter from "../../components/AddCharacter/AddCharacter";
import SectionCharacterCard from "../../components/SectionCharacterCard/SectionCharacterCard.jsx";

import "./Home.css";

// SECCIÓN 6. VIDEO 69 MIN 3:44 CÓMO USAR EL REACTDOM.RENDER(), 70 MIN 12:20 - MANEJO DEL ESTADO
// VIDEO 75 MIN 00:58

const Home = () => {
  const [characters, setCharacters] = useState(["Rick"]);
  return (
    <section>
      <h2>Rick and Morty App</h2>
      <AddCharacter setCharacters={setCharacters} />
      <hr />
      <div>
        {characters.map((character) => {
          return <SectionCharacterCard key={character} char={character} />;
        })}
      </div>
    </section>
  );
};

export default Home;
