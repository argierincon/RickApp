import React, { useState } from "react";

// SECCIÓN 9. VIDEO 105 => TRANDFORMANDO SOLO ALGUNOS ELEMENTOS DEL ESTADO SIN AFECTAR LOS DEMÁS

const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });

  const { counter1, counter2 } = state;

  return (
    <>
      <h1>Contador{counter1}</h1>
      <h1>Contador{counter2}</h1>
      <button
        onClick={() => {
          setState({
            ...state,
            counter1: counter1 + 1,
          });
        }}
      >
        +1
      </button>
    </>
  );
};

export default CounterApp;
