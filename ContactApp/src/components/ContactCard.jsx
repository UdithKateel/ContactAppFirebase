import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { collection, deleteDoc } from "firebase/firestore";
import { db  } from "../config/firebase";  
import { doc } from "firebase/firestore"; 
import modalInfo from "../hooks/modalInfo";
import AddandUpdateContact from "./AddandUpdateContact";
import { useState } from "react";
const ContactCard = ({ person }) => {
  const {isOpen,onClose,onOpen}=modalInfo();
  const deleteContact = async (id) => {
    try {
      const contactref = doc(collection(db,"contacts"),id);
      await deleteDoc(contactref,id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div
      key={person.id}
      className="bg-yellow flex justify-between items-center rounded-lg p-2 m-2"
    >
      <div className="flex justify-between gap-3 items-center">
        <HiOutlineUserCircle className="text-orange text-5xl" />

        <div className=" ">
          <h2>{person.Name}</h2>
          <p>{person.Email}</p>
          <p>{person.Phone}</p>
        </div>
      </div>
      <div className="flex gap-3 text-2xl ">
        <RiEditCircleLine className="cursor-pointer" onClick={onOpen} />
        <FaTrashAlt onClick={()=>deleteContact(person.id)} className="text-orange cursor-pointer" />
      </div>
    </div>
    <AddandUpdateContact contact={person} isUpdate isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
    </>
  );
};

export default ContactCard;
