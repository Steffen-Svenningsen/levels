import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Loadingpage from './pages/Loadingpage';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <div className="App">
      {
        loading ?

        <Loadingpage/>

        :

        <BrowserRouter basename={'/levels'}>
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
