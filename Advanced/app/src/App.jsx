import './App.css'
import UseEffectExample from "./components/UseEffectExample.jsx";
import Timer from "./components/Timer.jsx";
import ChildComponent from "./components/ChildComponent.jsx";
import {MyContextProvider} from "./contexts/MyContext.jsx";
import ContextValue from "./components/ContextValue.jsx";
import Counter from "./components/Counter.jsx";
import DisplayWindowSize from "./components/DisplayWindowSize.jsx";
import Container from "./components/Container.jsx";
import UserProfile from "./components/UserProfile.jsx";
import HeavyCalculation from "./components/HeavyCalculation.jsx";
import CounterCallback from "./components/CounterCallback.jsx";

function App() {

  return (
    <>
      <h1>Hello World</h1>
      {/*<UseEffectExample />*/}
      {/*<Timer />*/}
      {/*<MyContextProvider>*/}
      {/*  <ChildComponent />*/}
      {/*  <ContextValue />*/}
      {/*</MyContextProvider>*/}
      {/*<Counter />*/}
      {/*<DisplayWindowSize />*/}
      {/*<Container>*/}
      {/*  <h2>Section Title</h2>*/}
      {/*  <p>Section Subtitle</p>*/}
      {/*  <Counter />*/}
      {/*</Container>*/}
      {/*<UserProfile userId = {1} />*/}
      <HeavyCalculation />
      <CounterCallback />
    </>
  )
}

export default App
