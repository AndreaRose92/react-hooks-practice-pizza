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
    .then(data => setPizzas(data))


  },[])

function handleEditButtonClick(){
  console.log("Eyy lmfao")
}

// console.log(pizzas)
  return (
    <>
      <Header />
      <PizzaForm />
      <PizzaList pizzas={pizzas} handleEditButtonClick={handleEditButtonClick}/>
    </>
  );
}

export default App;
