import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-5 items-center p-10 bg-neutral text-neutral-content">
                <div className='flex flex-col justify-center items-center'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='flex flex-col  justify-center items-center'>
                    <span className="footer-title ">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='flex flex-col  justify-center items-center'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className="footer footer-center p-4 text-base-content">
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;