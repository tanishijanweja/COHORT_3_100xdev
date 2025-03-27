import { useState } from "react";
import { PostComponent } from "./Post";
import { Cursor } from "mongoose";
function App() {
  const [count, setCount] = useState(1);

  function increaseCount(){
    setCount(count+1)
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            background: "red",
            borderRadius: 20,
            width: 20,
            height: 25,
            paddingLeft: 10,
            paddingTop: 5,
          }}
        >
          {count}
        </div>
      </div>

      <img
        style={{ cursor: "pointer" }}
        src={
          "data:image/png;base64,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"
        }
        width={40}
      />
      <button onClick={increaseCount}>Increase the count</button>
    </div>
  );
}
export default App;
