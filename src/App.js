
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Components/Home/Home';
import User from './Components/User/User';
import Login from './Components/Login/Login';
import Blogs from './Components/Blog/Blogs';
import Cars from './Components/Cars/Cars';
import Deshbord from './Components/MainDeshbord/Deshbord';
import Protecter from './Components/Protected/Protecter';
import CarsForm from './Components/Cars/CarsForm';
import BlogForm from './Components/Blog/BlogForm';
import Contact from './Components/Contact/Contact';
import Payment from './Components/Payment/Payment';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />}>
          <Route path="deshbord" element={<Protecter Component={Deshbord} />} />
          <Route path="user" element={<Protecter Component={User} />} />
          {/* <Route path="user" element={<User />} /> */}
          <Route path="home" element={<Protecter Component={Home} />} />
          <Route path="blogs" element={<Protecter Component={Blogs} />} />
          <Route path="cars" element={<Protecter Component={Cars} />} />
          <Route path="*" element={<Navigate to="deshbord" />} />
          <Route path='CarsForm' element={<Protecter Component={CarsForm} />} />
          <Route path='BlogForm' element={<Protecter Component={BlogForm} />} />
          <Route path='Contact' element={<Protecter Component={Contact} />} />
          <Route path='Payment' element={<Protecter Component={Payment} />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;