import React from 'react'
import Nocontactimg from '../images/Hands Contact.png'
const NoContacts = () => {
  return (
    <div className="flex gap-3 justify-center items-center  h-[65vh] ">
        <div>
            <img src={Nocontactimg} alt="" />
        </div>
        <h2 className="text-white font-semibold text-2xl">No Contact found</h2>
    </div>
  )
}

export default NoContacts