import React from 'react'
import { useState } from 'react';
const modalInfo = () => {
    const[isOpen,setisOpen]=useState(false);
  const onOpen=()=>{
    setisOpen(true);
  }
  const onClose=()=>{
    setisOpen(false);
  }
  return (
    {onOpen,isOpen,onClose}
  )
}

export default modalInfo