import {memo, useContext} from 'react';
import {myContext} from './context';

const Child = () => {
  const {counter} = useContext(myContext);
  console.log('Child Render');
  return <div>Counter: {counter}</div>;
};

export default memo(Child);
