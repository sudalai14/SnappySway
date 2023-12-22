
import './App.css';
import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/login';
import Signup from './Pages/Register/signup';
import { BrowserRouter, Routes, Route ,Navigate } from 'react-router-dom';


function App() {
  return (
   <div className='App'>
     <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Profile/:id" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={   <Signup />}></Route>
        {/* <Route path="/verify/email" element={user?.Status === 'Pending' ? <Verifyemail/> : user?.other?.verifed === true ? <Navigate to={"/"} replace={true}/> : <Login/>}></Route>
        <Route path="/forgot/password" element={<Forgotpassword/>}></Route>
        <Route path="/reset/password" element={<Resetpassword/>}></Route> */}
         
    </Routes>
  </BrowserRouter>
    
   </div>
  );
}

export default App;
