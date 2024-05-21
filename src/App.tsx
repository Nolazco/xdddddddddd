import {useState, useCallback} from "react";

function App() {
  const [count, setCount] = useState(0);
  const countMore = useCallback(() => setCount(count + 1), [count]);

  return (
    <>
      <h1>{count}</h1>
      <button className="" onClick={countMore}>Mas</button>
    </>
  );
}

export default App;
