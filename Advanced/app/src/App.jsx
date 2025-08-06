import './App.css'
import UseEffectExample from "./components/UseEffectExample.jsx";
import Timer from "./components/Timer.jsx";
import ChildComponent from "./components/ChildComponent.jsx";
import {MyContextProvider} from "./contexts/MyContext.jsx";
import ContextValue from "./components/ContextValue.jsx";

function App() {

  return (
    <>
      <h1>Hello World</h1>
      {/*<UseEffectExample />*/}
      {/*<Timer />*/}
      <MyContextProvider>
        <ChildComponent />
        <ContextValue />
      </MyContextProvider>
    </>
  )
}

export default App
