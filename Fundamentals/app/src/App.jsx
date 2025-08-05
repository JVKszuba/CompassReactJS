import './App.css';

import Welcome from "./components/Welcome.jsx";
import GoodMorning from "./components/GoodMorning.jsx";
import Parent from "./components/Parent.jsx";

function App() {

  return (
    <>
      <Welcome />
      <GoodMorning />
      <Parent name = "Bob" age = {30}/>
    </>
  )
}

export default App
