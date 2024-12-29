import {memo, useContext} from 'react';
import {myContext} from './context';

const Child2 = () => {
  const {counter} = useContext(myContext);
  console.log('Child 2 Render');
  return <div>Counter: {counter}</div>;
};

export default memo(Child2);
