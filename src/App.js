import Home from './pages/Home';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import CoinDetails from './pages/coindetails';


function App() {
  return (
    <div className="App">

    
     <BrowserRouter>

     <Routes>

     <Route path='/' element = {<Home/>}/>

     <Route path="/coins/:id" element={<CoinDetails />} />

        </Routes>
    
      </BrowserRouter>


     
    </div>
  );
}

export default App;
