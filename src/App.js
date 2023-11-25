import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Domain/Login'
import Register from './Domain/Register'
import Home from './Domain/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
