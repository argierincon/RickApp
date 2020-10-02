import React from "react";

const CharacterCard = ({ name, img }) => {
  return (
    <div>
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default CharacterCard;
