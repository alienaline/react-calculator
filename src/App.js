import React from 'react';
import { NumberProvider } from './components/NumberProvider';
import './App.css';
import Calculator from './components/containers/Calculator/Calculator';


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
