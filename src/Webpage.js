import logo from './logo.svg';
import { FaFacebookF } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";


import './App.css';

function WebPage() {
  return (
    <div className="App">
      <div className='header-container'>
        <div className='header-first'>
          <p>Cricket Gear</p>
        </div>
        <header>
          <nav>
            <ul>
              <li><a href='#Home'>Home</a></li>
              <li><a href='#Service'>Service</a></li>
              <li><a href='#About'>About</a></li>
              <li><a href='#Contact'>Contact</a></li>
            </ul>
          </nav>
        </header>
        <div className='header-second'>
          <p>Start a Project</p>
          <div className='arrow-container'>
          </div>
        </div>
      </div>
      <div className='middle-container'>
        <h4>ORION</h4>
        <p>Where Innovation Knows No Bounds</p>
        <div className='middle-contianer-last'>
          <div className='middle-header-second'>
            <p>Start a Project</p>
            <div className='arrow-container'>
            </div>
          </div>
          <div className='pipe-container'></div>
          <div>
            <p>Connect</p>
          </div>
        </div>
      </div>
      <div className='bottom-container'>
        <div className='bottom-social-icons'>
          <FaFacebookF className='icons'/>
          <CiInstagram className='icons'/>
          <FaXTwitter className='icons'/>
        </div>
      </div>
    </div>
  );
}

export default WebPage;
