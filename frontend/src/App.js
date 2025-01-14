import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About/About';
import Contact from './Pages/Contact/Contact/Contact';
import Doctors from './Pages/Doctor/Doctors/Doctors';
import Footer from './Pages/Home/Footer/Footer.jsx';
import Header from './Pages/Home/Header/Header.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login';
import Service from './Pages/Services/Service/Service';
import Register from './Pages/Register/Register';
import ChangePasword from './Pages/ChangePassword/ChangePassword';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import UserDetails from './Pages/UserDetails/UserDetails';
import UserList from './Pages/UserList/UserList';
import BoardAdmin from './Pages/board-admin.component'
import BoardUser from './Pages/board-user.component'
import ManageBoard from './components/ManagerBoard';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import PostList from './Pages/post/PostList';
import Result from './Pages/Result/Result';
import PlayNumber from './Pages/PlayNumber/PlayNumber';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/service' element={<Service />} />
          <Route path='/doctor' element={<Doctors />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/result' element={<Result />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/playnumber' element={<PlayNumber />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/changepasword' element={<ChangePasword />} />
          <Route path='/userList' element={<UserList />} />
          <Route path='/mod' element={<ManageBoard />} />
          <Route path='/changepasword' element={<ChangePasword />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/profile' element={<UserDetails />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/posts" element={<PostList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
