import React, {useState} from 'react';

//#30  useState practice

const App = () => {
  //let count = 1;
  // const state = useState();
  //console.log(state);

  const [count, setCount] = useState(0);

  const IncNUM = () => {
    setCount(count + 1);
    //console. log('clicked ' + count++);
  };

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

// const purple = '#8e44ad';
// const [bg, setBg] = useState(purple);

// const bgChange = () => {
//   //console.log('clicked');//
//   //const purple = '#8e44ad';
// };
