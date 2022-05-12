import "./styles.css";

import Ramp from "./Ramp";

export default function App() {
  return (
    <div className="App">
      <h1>Simran Thind's Ramp Frontend Challenge</h1>
      <div className="FalsySection">
        <h3>Example #1: Falsy Input</h3>
        <p>The value used for the input specifically is null.</p>
        <Ramp input={null}></Ramp>
      </div>
      <div className="ArraySection">
        <h3>Example #2: Array Input</h3>
        <p>
          The value used for the input specifically is an array of 10 integers,
          from 0 to 9 inclusive.
        </p>
        <Ramp input={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}></Ramp>
      </div>
      <div className="OtherSection">
        <h3>Example #3: Other Input</h3>
        <p>
          The value for this input specifically (the type of which is anything
          else other than a falsy value or an array) is the string "hello".
        </p>
        <Ramp input={"hello"}></Ramp>
      </div>
    </div>
  );
}
