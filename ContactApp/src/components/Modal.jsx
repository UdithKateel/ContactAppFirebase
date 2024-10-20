// import React from 'react'
// import { IoMdCloseCircle } from "react-icons/io";
// import {createPortal} from 'react-dom';
// const Modal = ({onClose,isOpen,children}) => {
//   return createPortal (
//     <>
//     {isOpen&&
//     <>
//     <div className='  m-auto z-50 relative min-h-[200px] max-w-[80%] min-w-[80%] bg-white p-4'>
//         <div className='text-3xl flex justify-end '>
//             <IoMdCloseCircle onClick={onClose} />
//         </div>
//         {children}
//         </div>
//         <div 
//         onClick={onClose} 
//         className=" absolute top-0 z-40 h-screen w-screen backdrop-blur"
//         />
//     </>
//     }
//     </>
//   ,document.getElementById("modal-root"))
// }

// export default Modal
import React from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import { createPortal } from 'react-dom';

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black opacity-50 backdrop-blur"
          />
          {/* Modal Container */}
          <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div className='relative min-h-[200px] min-w-[30%] bg-white p-4 rounded-lg shadow-lg'>
              <div className='text-3xl flex justify-end'>
                <IoMdCloseCircle onClick={onClose} className="cursor-pointer" />
              </div>
              {children}
            </div>
          </div>
        </>
      )}
    </>
    , document.getElementById("modal-root")
  );
}

export default Modal;
