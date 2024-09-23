import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='bg-green-400 p-10 flex flex-col md:flex-row justify-between items-start md:items-center'>
                <div className='mb-8 md:mb-0 text-center md:text-left'>
                    <img src="/src/assets/img/4.png" alt="USA Plumber" className='w-24 h-auto mx-auto md:mx-0' />
                    <h1 className='text-white text-2xl font-bold mt-6'>USA Plumber</h1>
                </div>

                <div className='text-white'>
                    <h1 className='text-2xl font-bold mb-6 text-center md:text-left'>Contact Info</h1>
                    <ul className='space-y-4'>
                        <li className='flex items-center'>
                            <FiPhoneCall className='text-orange-500 mr-3' />
                            <span>(877) 674-5678</span>
                        </li>
                        <li className='flex items-center'>
                            <CiLocationOn className='text-orange-500 mr-3' />
                            <span>USA Plumber Service</span>
                        </li>
                        <li className='flex items-center'>
                            <MdEmail className='text-orange-500 mr-3' />
                            <span>info@bestplumber<br />bradford.com</span>
                        </li>
                        <li className='flex items-center'>
                            <FaClock className='text-orange-500 mr-3' />
                            <span>08:00am - 6:00pm</span>
                        </li>
                    </ul>
                </div>

                <div className='text-white w-full md:w-auto mt-8 md:mt-0'>
                    <h1 className='text-2xl font-bold mb-6 text-center md:text-left'>Subscribe to Newsletter</h1>
                    <p className='text-lg mb-4 text-center md:text-left'>
                        Join our subscribers list to get the latest news and special offers.
                    </p>
                    <div className='flex flex-col md:flex-row items-center'>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className='p-3 mb-4 md:mb-0 md:mr-3 w-full md:w-auto rounded text-gray-700'
                        />
                        <button className='bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-3 rounded'>
                            Subscribe Now
                        </button>
                    </div>
                    
                </div>
            </div>
            <div className='flex  bg-green-900  justify-center text-white font-bold items-center p-4 text-2xl'>
                        <h1>
                            <span>
                            Copyright © <span className='text-orange-400'>Plumber Nearby</span>  USA Plumber Pros September, 2024.


                            </span>
                        </h1>
             </div>
        </>
    );
}

export default Footer;

