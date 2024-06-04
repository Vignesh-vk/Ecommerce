import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Productpage from './Components/Productdeatilpage/Productpage';
import Trackorder from './Components/Trackorder/Trackorder';
import ProductListing from './Components/ProductListing/ProductListing';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path="/:id" element={<Productpage />}></Route>
          <Route path="/:id" element={<Productpage />}></Route>
          <Route path='category/:category' element={<ProductListing />}></Route>
          <Route path="/trackorder" element={<Trackorder />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
