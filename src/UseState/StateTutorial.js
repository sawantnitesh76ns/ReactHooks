import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  return (
    <div>
      <input placeholder="enter something..." onChange={(event) => setInputValue(event.target.value)} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
