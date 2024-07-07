import logo from './logo.svg';
import { FaFacebookF } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { VscGraph } from "react-icons/vsc";
import { LuFileLineChart } from "react-icons/lu";
import { RiProgress2Line } from "react-icons/ri";
import { HiArrowRightStartOnRectangle } from "react-icons/hi2";
import { BiSearchAlt2 } from "react-icons/bi";
import LinearProgress from '@mui/material/LinearProgress';
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaWalking } from "react-icons/fa";
import { CiCircleChevRight } from "react-icons/ci";

import './App.css';
import { useState } from 'react';
import Home from './components/myapp/Home';
import ProductView from './components/myapp/ProductView';
import ShoppingCart from './components/myapp/ShoppingCart';
import Address from './components/myapp/Address';
import NewAddress from './components/myapp/NewAddress';
import CCADashboard from './components/cca/CCADashboard';
import StudentProfile from './components/cca/StudentProfile';
import AdminProfile from './components/cca/AdminProfile';
import TeacherProfile from './components/cca/TeacherProfile';
import SignIn from './components/cca/SignIn';
import SignUp from './components/cca/SignUp';
import AddProfile from './components/cca/AddProfile';
import {Routes,Route,Link} from 'react-router-dom';
import Attendance from './components/cca/Attendance';
import QRCodeComponent from './components/cca/QRCodeComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Home" element={<CCADashboard/>}/>
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path="/adminprofile" element={<AdminProfile/>}/>
        <Route path="/student" element={<StudentProfile/>}/>
        <Route path="/addProfile" element={<AddProfile/>}/>
        <Route path="/QRCode" element={<QRCodeComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
