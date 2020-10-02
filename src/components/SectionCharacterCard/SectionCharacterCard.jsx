import React, { useEffect, useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard.jsx";
import getCharacters from "../../helpers/getCharacters";

const SectionCharacterCard = ({ char }) => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getCharacters(char).then(setCharacter);
  }, [char]);

  return (
    <>
      <h3>{char}</h3>
      <div>
        {character.map((char) => (
          <CharacterCard key={char.id} {...char} />
        ))}
      </div>
    </>
  );
};

export default SectionCharacterCard;
