import React, { useState } from "react";

const AddItem = ({ setItemToDo }) => {
  const [inputValue, setInputValue] = useState([""]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItemToDo((itm) => [...itm, inputValue]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

export default AddItem;
