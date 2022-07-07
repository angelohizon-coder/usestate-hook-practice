import React, {useState} from "react";

function App(prop) {
  var [time, setTime] = useState("Get Time")

  function getTimeStatic() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={setInterval(getTimeStatic, 1000)}>Get Time</button>
    </div>
  );
}

export default App;
