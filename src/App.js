import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-4 md:px-8 lg:px-12 bg-gray-100">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
