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
          <b>Date and time:</b> {date.toString()}
        </p>
      </div>
    );
  } else if (Array.isArray(input)) {
    let divArray = [];
    for (let i = 0; i < input.length; i++) {
      divArray.push(<div>{input[i]}</div>);
    }
    return (
      <div>
        <p>
          <i>
            <b>Values in the array:</b>
            {divArray}
          </i>
        </p>
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
