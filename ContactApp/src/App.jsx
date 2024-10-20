import Navbar from "./components/Navbar";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { db } from "./config/firebase.js";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import AddandUpdateContact from "./components/AddandUpdateContact.jsx";
import Modal from "./components/Modal.jsx";
import modalInfo from "./hooks/modalInfo.js";
import ContactCard from "./components/ContactCard.jsx";
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import NoContacts from "./components/NoContacts.jsx";
export default function App() {
  const [contacts, setcontacts] = useState([]);
  const {isOpen,onClose,onOpen}=modalInfo();
  useEffect(() => {
    const getcontacts = async () => {
      try {
        const contactsref = collection(db, "contacts");
  
        onSnapshot(contactsref,(snapshot)=>{
            const contactList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
          
        });
        setcontacts(contactList);
          return contactList;
        })
        
        
      } catch (error) {
        console.log("error" + error);
      }
    };
    getcontacts();
  }, []);

const filterContacts=(e)=>{
  const value=e.target.value;
  const contactsref = collection(db, "contacts");
  
        onSnapshot(contactsref,(snapshot)=>{
            const contactList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
          
        });
        const fileteredContacts=contactList.filter((contact)=>
          contact.Name.toLowerCase().includes(value.toLowerCase())
        )
        setcontacts(fileteredContacts);
          return fileteredContacts;
        })
}

  return (
    <>
    <div className="max-w-[360px] mx-auto">
      <Navbar />
      <div className="flex m-4 gap-3 p-3 justify-between  relative items-center">
        <FiSearch className="text-2xl absolute text-white ml-2" />
        <input onChange={filterContacts}
          type="text"
          className=" text-white pl-10  bg-transparent rounded-md border border-white h-10 flex-grow"
        />
        <button onClick={onOpen} className="text-4xl cursor-pointer flex items-center justify-center text-white">
          <IoMdAddCircleOutline className="" />
        </button>
      </div>
      <div className="m-4 ">
        {  contacts.length<=0?(<NoContacts/>): (contacts.map((person) => {
          return (
           <ContactCard key={person.id} person={person}/>
          );
        }))}
      </div>
      <AddandUpdateContact isOpen={isOpen} onClose={onClose}  onOpen={onOpen} />
    </div>
        <ToastContainer
        position="bottom-center"
        />
    </>
  );
}
