



import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import './Banner.css';



const Banner = () => {
    return (
        <>
            <div className='bg-green-400'>
               <div div className='slide-in flex pl-20 pt-28 font-bold hover: text-white text-left text-6xl justify-around'>
                    <h1 className=''>Plumber near me in <br /><span className='text-orange-500'>USA
                         <p className='text-white text-lg font-extrabold pt-11 '>looking for Plumber services near you? Find reliable and experienced <br /> Plumbing Company in the USA.
                         (877) 674-0877</p></span> </h1>    <br />
                         <img src="/src/assets/img/a.jpeg" alt="" className='flex w-72 h-72  justify-right-0 rounded-full' />

                </div >



                <div className='slide-in flex pl-44 pt-0 pb-20 '>
                    <button className='bg-orange-500 hover:bg-orange-400 text-white display-inline-block font-bold text-lg px-8 py-2 rounded'>
                        (877)674-4444<span className=''><FiPhoneCall /></span></button>
                </div>
                <div className='flex justify-around bg-green-400 py-4 h-fit slide-in'>
                    <div className='flex'>
                        <img src="/src/assets/img/1.png" alt="" className='w-20 h-20 mr-10' />
                        <span><h1 className='text-white text-4xl font-bold'>15000+ </h1> <p className='text-white text-2xl '>Servive provider</p></span>
                    </div>

                    <div className='flex '>
                        <img src="/src/assets/img/2.png" alt="" className='w-20 h-20 mr-10' />
                        <span><h1 className='text-white text-4xl font-bold'>20000+ </h1><p className='text-white text-2xl '>Order served</p></span>

                    </div>
                    <div className='flex flex-row '>
                        <img src="/src/assets/img/3.png" alt="" className='w-20 h-20 mr-10' />
                        <span><h1 className='text-white text-4xl font-bold'>30000+ </h1> <p className='text-white text-2xl '>5 Star recived</p></span>
                    </div>
                </div>
            </div>





        </>
    );



}

export default Banner


