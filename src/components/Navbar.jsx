import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='bg-green-900 text-white p-4 '> 
                <div className='container mx-auto flex justify-between items-center'>
                    <div className='font-bold text-2xl'>
                        <a href="#">
                            PlumberUSA
                        </a>
                    </div>
                    <div className='flex space-x-4 justify-content-end '>
                        <a href="#" className=' hover:text-orange-500 hover:underlined'>Home</a>
                        <a href="# " className='hover:text-orange-500 hover:underlined'>About</a>
                        <a href="# " className='hover:text-orange-500 hover:underlined'>Services</a>
                        <a href="# " className='hover:text-orange-500 hover:underlined'>Contact</a>
                    </div>
                    <div>
                        <button className='bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded'>Call Us</button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar

// import React from 'react';

// const Navbar = () => {
//   return (
//      <nav className="bg-green-900 text-white p-4">
//        <div className="container mx-auto flex justify-between items-center">
//          <div className="text-2xl font-bold">
//            <a href="#">PlumberUSA</a>
// </div>
//          <div className="flex space-x-4">
//            <a href="#" className="hover:underline">Home</a>
//            <a href="#" className="hover:underline">Services</a>
//            <a href="#" className="hover:underline">About</a>
//            <a href="#" className="hover:underline">Contact</a>
//          </div>
//          <button className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded">
//            Call Us
//          </button>
//        </div>
//      </nav>
//    );
//  };

// export default Navbar
// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav>
//       <div>
//         <div>
//           <a href="#" className="hover:underline">Home</a>
//           <a href="#" className="hover:underline">Services</a>
//           <a href="#" className="hover:underline">About</a>
//           <a href="#" className="hover:underline">Contact</a>
//         </div>
//         <button className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded">
//           Call Us
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

