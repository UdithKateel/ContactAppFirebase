import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
const ContactCard = ({person}) => {
  return (
     <div key={person.id} className="bg-yellow flex justify-between items-center rounded-lg p-2 m-2">
              <div className="flex justify-between gap-3 items-center">
                <HiOutlineUserCircle className="text-orange text-5xl" />

                <div className=" ">
                  <h2>{person.Name}</h2>
                  <p>{person.Email}</p>
                  <p>{person.Phone}</p>
                </div>
              </div>
              <div className="flex gap-3 text-2xl ">
                <RiEditCircleLine />
                <FaTrashAlt className="text-orange" />
              </div>
            </div>
  )
}

export default ContactCard