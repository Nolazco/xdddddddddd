import {useState, useCallback} from "react";

function App() {
  const [count, setCount] = useState(0);
  const countMore = useCallback(() => setCount(count + 1), []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={countMore}></button>
    </>
  );
}

export default App;
