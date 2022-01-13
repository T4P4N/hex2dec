import "./styles.css";
import { decToHex, hexToDec } from "hex2dec";
import React from "react";
import { RefreshCw } from "react-feather";

export default function App() {
  const [from, setFrom] = React.useState("hex");
  const [to, setTo] = React.useState("dec");
  const inputRef = React.useRef();
  const outputRef = React.useRef();

  const handleSwap = () => {
    var temp = from;
    setFrom(to);
    setTo(temp);
    var previousValue = outputRef.current.value;
    outputRef.current.value = inputRef.current.value;
    inputRef.current.value = previousValue;
    inputRef.current.focus();
  };

  const handleChange = () => {
    if (from === "hex") {
      try {
        const hex = inputRef.current.value;
        const dec = hexToDec(hex);
        outputRef.current.value = dec;
      } catch (e) {
        console.log("Error", e);
      }
    } else {
      const dec = inputRef.current.value;
      const hex = decToHex(dec);
      outputRef.current.value = hex;
    }
  };

  return (
    <div className="App">
      <h1>Hex2Dec</h1>
      <input
        type="text"
        ref={inputRef}
        onChange={handleChange}
        placeholder={from}
      />
      <div className="swap-btn" onClick={handleSwap}>
        <RefreshCw />
      </div>
      <input type="text" ref={outputRef} placeholder={to} />
    </div>
  );
}
