import {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';

interface IMyContextProps {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

const myContext = createContext<IMyContextProps>({
  counter: 0,
  setCounter: () => {},
});

const MyContextProvider = ({children}: {children: React.ReactElement}) => {
  const [counter, setCounter] = useState(0);

  const value = useMemo(() => ({counter, setCounter}), [counter]);

  return <myContext.Provider value={value}>{children}</myContext.Provider>;
};

export {myContext};
export default MyContextProvider;
