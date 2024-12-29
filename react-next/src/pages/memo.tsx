import {memo, useState} from 'react';

const MemoizedParent = memo(({children}) => {
  console.log('MemoizedParent render');
  return (
    <div>
      <p>Memoized Parent</p>
      {children}
    </div>
  );
});

const NotMemoizedChildren = () => {
  return 'Not Memoized Children';
};

const MemoPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(c => c + 1)}>+1</button>

      <MemoizedParent>
        <NotMemoizedChildren />
      </MemoizedParent>
    </div>
  );
};

export default MemoPage;
