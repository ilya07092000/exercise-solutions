import Counter from '@/exercices/renders/Counter';
import VerySlowComponent from '@/exercices/renders/VerySlowComponent';
import {useState} from 'react';

const RenderPage = () => {
  // const [counter, setCounter] = useState(0);

  return (
    <>
      <Counter Test1={<VerySlowComponent />} Test2={VerySlowComponent} />
      {/* <button onClick={() => setCounter(v => v + 1)}>123</button> */}
      {/* <VerySlowComponent /> */}
    </>
  );
};

export default RenderPage;
