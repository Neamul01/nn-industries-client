import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import Home from './components/Home/Home';
import Purchase from './components/Home/Purchase';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrder from './components/Dashboard/MyOrder';
import AddReview from './components/Dashboard/AddReview';
import MyProfile from './components/Dashboard/MyProfile';
import AllOrders from './components/Dashboard/Admin/AllOrders';
import AddProduct from './components/Dashboard/Admin/AddProduct';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin';
import ManageProducts from './components/Dashboard/Admin/ManageProducts';
import Portfolio from './components/Portfolio/Portfolio';
import Blogs from './components/Blogs/Blogs';
import RequireAuth from './components/Shared/RequireAuth';
import NotFound from './components/Shared/NotFound'
import Payment from './components/Dashboard/Payment';
import RequireAdmin from './components/Shared/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-4 md:px-8 lg:px-12 bg-gray-100">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='dashboard' element={
            <RequireAuth><Dashboard /></RequireAuth>
          }>
            <Route index element={<MyProfile />}></Route>
            <Route path='myorder' element={<MyOrder />}></Route>
            <Route path='myreview' element={<AddReview />}></Route>
            <Route path='payment/:id' element={<Payment />}></Route>

            <Route path='allorders' element={<RequireAdmin><AllOrders /></RequireAdmin>}></Route>
            <Route path='addproduct' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
            <Route path='manageproduct' element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
            <Route path='makeadmin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>}></Route>
          </Route>

          <Route path='portfolio' element={<Portfolio />}></Route>
          <Route path='purchase/:id' element={<Purchase />}></Route>
          <Route path='blogs' element={<Blogs />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='signup' element={<Signup />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <ToastContainer />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
