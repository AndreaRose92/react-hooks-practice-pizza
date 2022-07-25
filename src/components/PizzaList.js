import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizzas, handleEditButtonClick}) {
  console.log(pizzas)
  const pizzaPie = pizzas.map((pizza)=> {
    
    return (
      <Pizza key={pizza.id} topping={pizza.topping} size={pizza.size} veggie={pizza.vegitarian} handleEditButtonClick={handleEditButtonClick} />
    )
  }  )
  
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaPie}
      </tbody>
    </table>
  );
}

export default PizzaList;
