import {useState, useCallback} from "react";

function App() {
  const [count, setCount] = useState(0);
  const countMore = useCallback(() => setCount(count + 1), [count]);

  return (
    <main className="flex flex-col items-center p-12 gap-4">
      <h1 className="text-4xl font-bold font-serif">{count}</h1>
      <button className="px-4 py-3 rounded-xl bg-blue-300 m-1 font-bold" onClick={countMore}>Agregar uno</button>
    </main>
  );
}

export default App;
