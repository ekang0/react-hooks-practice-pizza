import React from "react";

function PizzaForm( { selectedPizza, onPizzaFormChange, onEditPizza }) {
  
  function handleChange(e){
    onPizzaFormChange(e.target.name, e.target.value);
  };

  function handleVegChange(e) {
    //console.log("veg name", e.target.name, "veg change checked", e.target.checked, "value is", e.target.value);
    onPizzaFormChange(e.target.name, e.target.value === "Vegetarian");
  };

  function handleFormSubmit(e){
    e.preventDefault();
    const formData ={
      topping,
      size,
      vegetarian
    }
    //console.log(formData);
    fetch(`http://localhost:3001/pizzas/${selectedPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(newPizza => onEditPizza(newPizza))
  };

  const { topping, size, vegetarian } = selectedPizza;

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={handleVegChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={handleVegChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
