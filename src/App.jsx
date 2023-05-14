import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard';
function App({ data }) {
 console.log(data, 'data')
  return (
    <>
      <div><Dashboard data={data} /></div>
    </>
  );
}

export default App
