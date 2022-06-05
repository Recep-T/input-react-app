import { useState } from "react";
import "./styles.css";

export default function App() {
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const handleClick = () => {
    if (message !== "") {
      setMessage("");
    }
    setMessages([...messages, message]);
    // console.log(text);
  };
  const mouseOver = () => {
    setIsMouseOver(true);
  };
  const mouseOut = () => {
    setIsMouseOver(false);
  };
  return (
    <div className="App">
      <h1>React Event App</h1>
      <input onChange={handleChange} type="text" value={message} />
      <button
        style={{ backgroundColor: isMouseOver ? "red" : "green" }}
        onMouseOut={mouseOut}
        onMouseOver={mouseOver}
        onClick={handleClick}
      >
        Cick
      </button>

      <div>
        {messages.map((message) => {
          return <p>{message}</p>;
        })}
      </div>
      {/* <p>{messages}</p> */}
    </div>
  );
}
