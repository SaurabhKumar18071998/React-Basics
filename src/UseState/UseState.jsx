import { useState } from "react";


function UseStateExample() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>
};

export default UseStateExample;
