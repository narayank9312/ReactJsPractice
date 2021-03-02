import React, {useState} from 'react';

const App = () => {
  const [name, setName] = useState(' ');

  const [lastName, setLastName] = useState(' ');

  const [fullName, setFullName] = useState(' ');

  const [LName, sLName] = useState(' ');

  const submit = (event) => {
    event.preventDefault();
    setFullName(name);
    sLName(lastName);
  };

  const inputEvent = (event) => {
    console.log('event.target.value');
    setName(event.target.value);
  };
  const inputEventTwo = (event) => {
    console.log('event.target.value');
    setLastName(event.target.value);
  };

  return (
    <>
      <div className="main_div">
        <form onClick={submit}>
          <div>
            <h1>
              
              Hello {fullName} {LName}
            </h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={inputEvent}
            />
            <br />

            <input
              type="text"
              placeholder="Enter Your lastname"
              value={lastName}
              onChange={inputEventTwo}
            />

            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
