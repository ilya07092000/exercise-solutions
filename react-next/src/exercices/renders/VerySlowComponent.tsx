import {useEffect} from 'react';

const VerySlowComponent = () => {
  let start = Date.now();
  for (let i = 0; i < 50000000; i += 1) {
    Math.random() * i * i * i * 10000;
  }
  let end = Date.now();

  return (
    <div>
      <p>Last Render Time: {new Date().toISOString()}</p>
      <p>Last Render Duration: {end - start}</p>
    </div>
  );
};

export default VerySlowComponent;
