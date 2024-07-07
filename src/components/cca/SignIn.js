import './SignIn.css';
import { FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io5";
const SignIn = () =>{
    return(
        <div className='Signin'>
            <h2>Welcome Back</h2>
            <h3>Sign In</h3>
            <form>
                <input type='text' placeholder='Email Address'/>
                <input type='password' placeholder='Password'/>
                <button>Sign In</button>
            </form>
            <p>Create New Account <a href="/SignUp">Sign Up</a></p>
            <div className='icon-container'>
            <FaFacebookF className='icon-button'/>
            <SiGmail className='icon-button'/>
            <IoLogoWhatsapp className='icon-button'/>
            </div>
        </div>
    )
}
export default SignIn;