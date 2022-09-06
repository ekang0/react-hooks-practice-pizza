import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(r => r.json())
    .then(pizzas => setPizzas(pizzas))
  }, []);

  function handlePizzaFormChange(name, value){
    //console.log("name is", name, "value is", value);
    //console.log("typeof name", typeof name, "typeof value", typeof value)
    //console.log("selectedPizza is", selectedPizza);
    const updatedPizza = ({...selectedPizza, [name]: value});
    //console.log("updatedPizza", updatedPizza);
    setSelectedPizza(updatedPizza);

  };

  function handleEditPizza(newPizza){
    //console.log(newPizza);
    const updatedPizzaList = pizzas.map((pizza) => pizza.id === newPizza.id ? newPizza : pizza);
    // on this part --> setSelectedPizza(newPizza);
    setPizzas(updatedPizzaList);
    
  }


  return (
    <>
      <Header />
      <PizzaForm selectedPizza={selectedPizza} onPizzaFormChange={handlePizzaFormChange} onEditPizza={handleEditPizza}/>
      <PizzaList pizzas={pizzas} onSelectedPizza={setSelectedPizza}/>
    </>
  );
}

export default App;
