import {useState} from 'react';
import MyContextProvider from './context';
import Child from './Child';
import Child2 from './Child2';

const ContextComponent = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      Data: <input onChange={e => setValue(e.target.value)}></input>
      <MyContextProvider>
        <>
          <Child />
          <Child2 />
        </>
      </MyContextProvider>
    </div>
  );
};

export default ContextComponent;
