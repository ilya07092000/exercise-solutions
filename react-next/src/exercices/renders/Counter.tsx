import {useState} from 'react';

const Counter = ({Test1, Test2}) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button onClick={() => setCounter(v => v + 1)}>123</button>
      <div>Component: {Test1}</div>
      <div>Func: {<Test2 />}</div>
    </>
  );
};

export default Counter;
