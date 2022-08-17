import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Our services/Services';
import Pricing from './components/Pricing/Pricing';
import Manage from './components/Manage orders/Manage';
import Order from './components/Order now/Order';
// import Login from './components/logIn/Login';
// import SignUp from './components/Signup/SignUp';



function App() {
  return (
    <div className="App">

      <Router>

        <Navbar />
        {/* <Switch> */}
          <Route exact path='/' component={Home } />
          <Route exact path='/services' component={Services } />
          <Route exact path='/pricing' component={Pricing } />
          <Route exact path='/manage' component={Manage } />
          <Route exact path='/order' component={Order } />
          {/* <Route exact path='/login' element={<Login />}/> */}
          {/* <Route exact path='/signup' element={<SignUp />}/> */}
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
