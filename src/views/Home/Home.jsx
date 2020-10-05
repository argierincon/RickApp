import React, { useState } from "react";
import AddItem from "../../components/AddItem/AddItem";
import Item from "../../components/Item/Item";

import "./Home.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <section className="home">
      <h2>TO DO LIST TEST</h2>
      <AddItem setItemToDo={setTasks} />
      <hr />
      <ol>
        {tasks.map((tsk) => {
          return <li>{tsk}</li>;
        })}
        <Item />
      </ol>
    </section>
  );
};

export default Home;
