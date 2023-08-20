import React from 'react';
import logo from '../../../assets/logo.png';


const Footer = () => {
  return (
    <div className="border-t-2 border-[#0264d4] bg-[#046ce0] text-white">
      <div className=' max-w-[1440px] mx-auto'>
        <footer className="footer px-5 py-10 ">
          <div>
            <img className='w-1/3' src={logo} alt="" />
            <p className='pt-1'>Mobile Planet is the right platform <br /> for you to look for a mobile phone</p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a href="/" className="link link-hover">Branding</a>
            <a href="/" className="link link-hover">Design</a>
            <a href="/" className="link link-hover">Marketing</a>
            <a href="/" className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">About</span>
            <a href="/" className="link link-hover">About me</a>
            <a href="/" className="link link-hover">Contact</a>
            <a href="/" className="link link-hover">Jobs</a>
            <a href="/" className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a href="/" className="link link-hover">Terms of use</a>
            <a href="/" className="link link-hover">Privacy policy</a>
            <a href="/" className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;