import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import Home from './components/Home/Home';
import Purchase from './components/Home/Purchase';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-4 md:px-8 lg:px-12 bg-gray-100">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='dashboard' element={<Login></Login>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='signup' element={<Signup></Signup>}></Route>
          <Route path='purchase' element={<Purchase></Purchase>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
