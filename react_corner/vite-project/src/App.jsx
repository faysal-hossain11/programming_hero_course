import React, { Profiler, useEffect, useState } from 'react';
import AvoidContradiction from './components/AvoidConcradiction';

const App = () => {

  const [user, setUser] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setUser(data));
    console.log("asdfasdf",user);
    
  }, [])

  return (
    <>

      {/* <AvoidContradiction /> */}
      {/* <Profiler /> */}

      <div>
        <h3>useEffect</h3>
      </div>
    </>
  );
};

export default App;