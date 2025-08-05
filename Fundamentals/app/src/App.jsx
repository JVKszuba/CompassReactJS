import './App.css';

import Welcome from "./components/Welcome.jsx";
import GoodMorning from "./components/GoodMorning.jsx";
import Parent from "./components/Parent.jsx";
import Counter from "./components/Counter.jsx";
import UserInfo from "./components/UserInfo.jsx";
import Button from "./components/Button.jsx";
import ParentFunction from "./components/ParentFunction.jsx";
import Form from "./components/Form.jsx";
import RenderConditional from "./components/RenderConditional.jsx";
import LoginButton from "./components/LoginButton.jsx";
import Warning from "./components/Warning.jsx";
import NumberList from "./components/NumberList.jsx";
import StyledButton from "./components/StyledButton.jsx";

function App() {

  return (
    <>
      <Welcome />
      {/*<GoodMorning />*/}
      {/*<Parent name = "Bob" age = {30}/>*/}
      {/*<Counter />*/}
      {/*<UserInfo />*/}
      {/*<Button />*/}
      {/*<ParentFunction />*/}
      {/*<Form />*/}
      {/*<RenderConditional user = "João"/>*/}
      {/*<LoginButton loggedIn = {false} />*/}
      {/*<LoginButton loggedIn = {true} />*/}
      {/*<Warning warning = {true} />*/}
      {/*<NumberList numbers = {[1, 2, 3, 4, 5]} />*/}
      <StyledButton />
    </>
  )
}

export default App
