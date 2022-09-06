import React from "react";

function Pizza( { pizza, onSelectedPizza }) {

  //const { topping, size, vegetarian } = pizza;

  function handleEditClick(){
    onSelectedPizza(pizza)
  };

  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleEditClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
