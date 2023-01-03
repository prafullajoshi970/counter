import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0);

  return (

    <div className='container'>
      <div className='h11'><h1>counter Application </h1></div>
      <div className='para'><p>This is State number-{count}</p></div>
      <div className='butt'><button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button></div>
    </div>
  );
}

export default App;
