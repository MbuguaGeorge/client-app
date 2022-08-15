import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/home';
import Order from './components/Order/Main/order';

function App(){
  return(
    //<Header />
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/order' element={<Order/>} />
      </Routes>
    </Router>
  )
}

export default App;