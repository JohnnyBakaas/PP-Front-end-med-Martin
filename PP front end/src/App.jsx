import { useState } from "react";
import "./App.css";
import Game from "./Components/Game";
import Pokemon from "./Components/Pokemon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Title</div>
      <Game />
    </>
  );
}

export default App;
