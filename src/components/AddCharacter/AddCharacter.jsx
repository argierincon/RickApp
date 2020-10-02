import React, { useState } from "react";
import PropTypes from "prop-types";

// SECCIÓN 6. VIDEO 71 MIN 8:50 CAMBIAR EL VALOR DEL INPUT CON EL USESTATE
// VIDEO 72 MIN 3:26 RECIBIENDO PROP DE COMPONENTE EXTERNO A LA VISTA, 3:51 CAMBIANDO EL ESTADO DEL INPUT
// MIN 6:18 Añadiendo validación de tipo de propiedad del componente con propTypes.

const AddCharacter = ({ setCharacters }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCharacters((chars) => [inputValue, ...chars]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCharacter.propTypes = {
  setCharacters: PropTypes.func.isRequired,
};

export default AddCharacter;
