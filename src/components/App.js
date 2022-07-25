import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState ([]);


  //fetch
  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(r => r.json())
    .then(data => setPizzas([...pizzas, data]))


  },[])

console.log(pizzas)
  return (
    <>
      <Header />
      <PizzaForm />
      <PizzaList />
    </>
  );
}

export default App;
