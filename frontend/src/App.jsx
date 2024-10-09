import { useState } from 'react';
import GithubLogin from '../components/GithubLogin/GithubLogin';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> Hello welocme to RaLBW</h1>
    <GithubLogin></GithubLogin>
    
    
    </>
  )
}

export default App
