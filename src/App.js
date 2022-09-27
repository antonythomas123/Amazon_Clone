import './App.css';
import FirstPage from './Components/FirstPage/FirstPage';
import CheckoutMain from './Components/Checkout/CheckoutMain';
import Login from './Components/Login/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          
          {/*First Route */}
          <Route exact path='/' element={<FirstPage/>}/>
          {/*Second Route*/}
          <Route path='/checkout' element={<CheckoutMain/>} />
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
