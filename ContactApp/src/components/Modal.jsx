import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import {createPortal} from 'react-dom';
const Modal = ({onClose,isOpen,children}) => {
  return createPortal (
    <>
    {isOpen&&
    <>
    <div className=' m-auto z-50 relative min-h-[200px] max-w-[80%] min-w-[80%] bg-white p-4'>
        <div className='text-3xl flex justify-end '>
            <IoMdCloseCircle onClick={onClose} />
        </div>
        {children}
        </div>
        <div 
        onClick={onClose}
        className=" absolute top-0 z-40 h-screen w-screen backdrop-blur"
        />
    </>
    }
    </>
  ,document.getElementById("modal-root"))
}

export default Modal