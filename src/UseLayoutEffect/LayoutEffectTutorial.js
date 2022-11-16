import { useLayoutEffect, useEffect, useRef, useState } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);
  const testRef = useRef("");
  const [testData, setTestData] = useState("")

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  });

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, [testData]);

  return (
    <div className="App">
      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
      <input ref={testRef} style={{ width: 400, height: 60 }} onChange={(e) => setTestData(e.target.value)} />
    </div>
  );
}

export default LayoutEffectTutorial;
