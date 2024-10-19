import Navbar from "./components/Navbar";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { db } from "./config/firebase.js";
import { collection, getDocs } from "firebase/firestore";

import ContactCard from "./components/ContactCard.jsx";
export default function App() {
  const [contacts, setcontacts] = useState([]);
  useEffect(() => {
    const getcontacts = async () => {
      try {
        const contactsref = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactsref);
        const contactList = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setcontacts(contactList);
      } catch (error) {
        console.log("error" + error);
      }
    };
    getcontacts();
  }, []);
  return (
    <div className="max-w-[360px] mx-auto">
      <Navbar />
      <div className="flex m-4 gap-3 p-4  relative items-center">
        <FiSearch className="text-2xl absolute text-white ml-2" />
        <input
          type="text"
          className=" text-white pl-10  bg-transparent rounded-md border border-white h-10 flex-grow"
        />
        <button className="text-4xl cursor-pointer flex-grow text-white">
          <IoMdAddCircleOutline className="flex-grow" />
        </button>
      </div>
      <div className="m-4 ">
        {contacts.map((person) => {
          return (
           <ContactCard person={person}/>
          );
        })}
      </div>
    </div>
  );
}
