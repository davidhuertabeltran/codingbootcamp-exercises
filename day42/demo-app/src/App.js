import HooksExample from "./HooksExample";
import './App.css';
import Counter from "./Counter";
import FetchPromises from "./FetchPromises";
import FetchAsync from "./FetchAsync";

function App() {
  return (
    <>

      <FetchAsync />
      
      <FetchPromises />

      <HooksExample/>

      <Counter />
    </>
  );
}

export default App;
