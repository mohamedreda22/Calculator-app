import {
  useState,
  useRef
} from "react";
import "./App.css";


function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);




  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value))
  };

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value))

  };

  function divide(e) {

    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value))
  };

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = null;




  };

  function resetResult(e) {
    e.preventDefault();
    setResult(0);

  };




  return (

    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>

      </div>
      <form>
        <p ref={resultRef} style={{ paddingLeft: "100px" }}>
          {result}
        </p>
        <input className="num-inputbox"
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />

        <div className="operations-button">
          <button onClick={plus}>add</button>
          <button onClick={minus}>minus</button>
          <button onClick={times}>times</button>
          <button onClick={divide}>divide</button>
          <button class="btn-reset" onClick={resetInput}>reset input</button>
          <button class="btn-reset" onClick={resetResult}>reset result</button>


        </div>


      </form>
    </div>
  );
}


export default App;
