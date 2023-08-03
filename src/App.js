import Home from './pages/Home';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import CoinDetails from './pages/coindetails';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegistrationForm';





function App() {
  return (
    <div className="App">

    
     <BrowserRouter>

     <Routes>

     <Route path='/crypto-Page' element = {<Home/>}/>

     <Route path='/' element = {<LoginForm/>}/>

     <Route path='/registartion' element = {<RegisterForm/>}/>

     <Route path="/coins/:id" element={<CoinDetails />} />

    

  

        </Routes>
    
      </BrowserRouter>


     
    </div>
  );
}

export default App;
