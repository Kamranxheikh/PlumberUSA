import React from 'react'
import './Card.css'
import { FaArrowRight } from "react-icons/fa6";


const Card = (props) => {
  return (
    
    <>
    
    <div className='card  flex flex-col mt-20 font-semibold  justify-around  transition-transform transform hover:scale-105 duration-300  items-center bg-gray-200  m-11 p-5 pt-16 pb-14 rounded-lg shadow-lg w-96 h-auto '>
        <h1 className='text-3xl text-center pb-6'>{props.title}</h1>
        <p className='text-lg text-center'>{props.description}</p>
        <button className='pt-12 pb-4'>{props.buttonText}
              <button className='border-2 flex  transition duration-300 border-gray-500  items-center justify-evenly p-3 text-sm text-gray-500 hover:bg-gray-500 hover:text-white'>Get Quotes 
                  <span className='bg-yellow-500 rounded-full'>
                    < FaArrowRight />
                  </span>
              </button> 
        </button>

    </div>
    </>
        );
    }
export default Card
// import React from 'react';
// import './Card.css'; // Optional for any custom styles
// import { FaArrowRight } from "react-icons/fa6";

// const Card = (props) => {
//   return (
//     <div className='card flex flex-col justify-between items-center bg-white m-6 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300 w-80 h-80'>
//       <h1 className='text-3xl font-bold text-center text-gray-800 mb-4'>{props.title}</h1>
//       <p className='text-lg text-center text-gray-700 mb-6'>{props.description}</p>
//       <button className='w-full'>
//         <span className='border-2 border-gray-500 flex items-center justify-between p-4 rounded-lg text-gray-500 hover:bg-gray-500 hover:text-white transition duration-300'>
//           {props.buttonText}
//           <span className='bg-yellow-500 rounded-full p-2'>
//             <FaArrowRight />
//           </span>
//         </span>
//       </button>
//     </div>
//   );
// }

// export default Card;

