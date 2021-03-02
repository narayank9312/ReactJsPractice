import React, {useState} from 'react';

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);

  const UpadateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };
  return (
    <>
      <h1>{ctime}</h1>
      <button onClick={UpadateTime}> get time </button>
    </>
  );
};

export default App;
