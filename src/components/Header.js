import login from '../img/login.svg';
import { LOGO_URL } from '../utils/constant.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("login");





  return (
    <nav>
      <div className='header flex justify-between ml-6 border-2'>
        <div className='logo-container'>
          <img className=" h-20 w-20 pl-4 " src={LOGO_URL} />
        </div>
        <div className='nav-items ' >
          <ul className='flex space-x-10   text-xl cursor-pointer'>
            <Link to="/" className=' flex '><li>Home</li></Link>
            <Link to="/About" className=' flex '><li>About</li></Link>
            <Link to="/Contact" className=' flex '><li>Contact</li></Link>
            <Link to="#" className=' flex '> <li>Cart</li></Link>
            <Link to="#" className=' flex '>
              {/* <img src={login} className=" h-5 w-5 " /> */}
              <span className='pl-5 pr-5'><button className="login btn" onClick={() => {
                btnNameReact == "login" ? setBtnNameReact("logout") :
                  setBtnNameReact("login");
                // console.log(btnNameReact);
              }}>{btnNameReact}</button></span>
            </Link>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Header;