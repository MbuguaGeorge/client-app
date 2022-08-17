import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/home';
import Order from './components/Order/Main/order';
import Profile from './components/Dashboard/Profile/profile';

function App(){
  return(
    //<Header />
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/order' element={<Order/>} />
        <Route exact path='/profile' element={<Profile/>} />
      </Routes>
    </Router>
  )
}

export default App;