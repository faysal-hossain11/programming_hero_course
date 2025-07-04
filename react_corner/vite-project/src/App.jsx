import React from 'react';
import Profile from './components/Profile';

const App = () => {
  return (
    <div>
      <h1 className='text-center mb-2 text-4xl font-black font-serif bg-pink-400 py-3 text-white'>Welcome to the home page</h1>

      <Profile person={{name: "Faysal Hossain", age: 25}}  />
    </div>
  );
};

export default App;