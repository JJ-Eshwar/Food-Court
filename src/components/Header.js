
import login from '../img/login.svg';
import { LOGO_URL } from '../utils/constant.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("login");





  return (
    <nav className='navbar'>
      <div className='header flex justify-between   bg-fuchsia-50 z-50'>
        <div className='logo-container'>
          <img className=" h-20 w-20 pl-4 " src={LOGO_URL} />
        </div>
        <div className='nav-items ' >
          <ul className='flex space-x-10   text-xl cursor-pointer'>
            <Link to="/" className=' flex '><li>Home</li></Link>
            <Link to="/About" className=' flex '><li>About</li></Link>
            <Link to="/Contact" className=' flex '><li>Contact</li></Link>
            <Link to="/Grocery" className=' flex '><li>Grocery</li></Link>
           
            <Link className="cart" to="/cart"><li>
            {/* <div class="cartNotification">0</div> */}
            <svg className='pp8ft' viewBox="-1 0 37 32" height="20" width="20" fill="#686b78" ><path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path></svg>
              {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg> */}
              <div className='cartNotify'> 0 </div>
              <span> Cart </span>
          </li></Link>
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