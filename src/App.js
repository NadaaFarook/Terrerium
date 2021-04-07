import { useEffect } from 'react';
import './App.css';
import setupMockServer from './mock-server';

const App=()=>{

  const data =  fetch('/api/products').then(res => console.log(res))
  console.log(data)

 // const data =  setupMockServer('/api/products').then(res => console.log(res.data))
  return (
    <div className="App">
    <h1>hhh</h1>
    </div>
  );
}

export default App;
