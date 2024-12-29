// import Comp1 from '@/exercices/renderOrder';
import {Debounce} from '@/exercices/debounce';
import {ParentContainer} from '@/exercices/reconciliation';
import {Inter} from 'next/font/google';
import {memo, useCallback, useEffect, useState} from 'react';

const inter = Inter({subsets: ['latin']});

const useCustomCounter = (): [number, () => any] => {
  const [value, setValue] = useState(0);

  const [anotherValue, setAnotherValue] = useState(0);

  // useEffect(() => {
  //   const handler = () => {
  //     console.log('aa');
  //     setAnotherValue(v => v + 1);
  //   };

  //   window.addEventListener('click', handler);

  //   return () => window.removeEventListener('click', handler);
  // }, []);

  const increment = useCallback(() => {
    setValue(v => v + 1);
  }, []);

  // const increment = () => {
  //   setValue(v => v + 1);
  // };

  return [value, increment];
};

const ComponentWithCustomHook = () => {
  console.log('ComponentWithCustomHook');
  const [value, increment] = useCustomCounter();

  const [renderReason, setRenderReason] = useState(0);

  return (
    <div>
      <button onClick={() => setRenderReason(r => r + 1)}>Render</button>
      <div>Parent Value: {renderReason}</div>
      <MemoChildren value={value} increment={increment} />
    </div>
  );
};

const MemoChildren = memo(
  ({value, increment}: {value: number; increment: () => any}) => {
    console.log('Render MemoChildren');

    return <div onClick={increment}>{value.toString()}</div>;
  },
);

export default function Home() {
  return (
    <>
      <ComponentWithCustomHook />
      {/* <Comp1 /> */}
      {/* <Debounce /> */}
      {/* <ParentContainer /> */}
    </>
  );
}
