import React, {useState} from 'react';

const App = () => {
  //let count = 1;
  // const state = useState();
  //console.log(state);

  const [count, setCount] = useState(0);

  const IncNUM = () => {
    setCount(count + 1);
    //console. log('clicked ' + count++);
  };
  // const purple = '#8e44ad';
  // const [bg, setBg] = useState(purple);

  // const bgChange = () => {
  //   //console.log('clicked');//
  //   //const purple = '#8e44ad';
  // };
  return (
    <>
      <div style={{background: 'bg'}}>
        <h1> {count} </h1>
        <button onClick={IncNUM}> Click Me </button>
      </div>
    </>
  );
};

export default App;
