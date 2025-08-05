import './App.css';

import Welcome from "./components/Welcome.jsx";
import GoodMorning from "./components/GoodMorning.jsx";
import Parent from "./components/Parent.jsx";
import Counter from "./components/Counter.jsx";
import UserInfo from "./components/UserInfo.jsx";

function App() {

  return (
    <>
      <Welcome />
      {/*<GoodMorning />*/}
      {/*<Parent name = "Bob" age = {30}/>*/}
      <Counter />
      <UserInfo />
    </>
  )
}

export default App
