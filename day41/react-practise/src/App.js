import './App.css';
import { useState } from "react";
import Counter from './components/Counter';


function App() {
  const [globalCounter, setGlobalCounter] = useState( 0 );

    return (
      <>
        <Counter globalCounter={globalCounter}/>
        <Counter globalCounter={globalCounter}/>
        <Counter globalCounter={globalCounter}/>

        <br></br>

        <button onClick={() => {
          setGlobalCounter( globalCounter + 1 )
        }}>
          Increment All
        </button>

        <button onClick={() => {
          setGlobalCounter( globalCounter - 1 )
        }}>
          Decrement All
        </button>

      </>
    );
}

export default App;
