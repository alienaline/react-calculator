import React from 'react';
import Calculator from './components/Calculator';
import { NumberProvider } from './components/NumberProvider';
import './App.css';


function App() {
  return (
    <div className='App'>
      <NumberProvider>
        <Calculator />
      </NumberProvider>
    </div>
  );
}

export default App;
