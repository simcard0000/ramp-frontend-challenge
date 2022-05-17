import { useState } from "react";

import "./styles.css";

export default function Ramp(props) {
  const input = props.input;
  const [date, setDate] = useState(0);
  if (!input) {
    setTimeout(() => setDate(new Date()), 1000);
    return (
      <div>
        <p>
          <b><i>Date and time:</i></b> <i>{date.toString()}</i>
        </p>
      </div>
    );
  } else if (Array.isArray(input)) {
    let divArray = [];
    for (let i = 0; i < input.length; i++) {
      divArray.push(<div key={i}><p><i>{input[i]}</i></p></div>);
    }
    return (
      <div>
        <p>
          <i>
            <b>Values in the array:</b>
          </i>
        </p>
        {divArray}
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <i>
            <b>Value of the input:</b> {input}
          </i>
        </p>
      </div>
    );
  }
}
