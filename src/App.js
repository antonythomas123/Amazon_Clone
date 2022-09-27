import './App.css';
import FirstPage from './Components/FirstPage/FirstPage';
import CheckoutMain from './Components/Checkout/CheckoutMain';

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
        
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
