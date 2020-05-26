import React, { useState } from "react";
const App = () => {
  let [col, setcol] = useState("red");
  let [text, setText] = useState("CLICK ME");
  const change = () => {
    setcol("purple");
    setText("It hurts ");
  };
  const yo = () => {
setcol("chocolate");
  };

  return (
    <>
      <div className="main" style={{ backgroundColor: col }}>
        <div className="center">
          <button
            
            onMouseLeave={change}
            onMouseEnter={yo}
          >
            {text}
          </button>
        </div>
      </div>
    </>
  );
};
export default App;
