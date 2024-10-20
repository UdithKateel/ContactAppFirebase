import React from 'react'
import Modal from './Modal'
import { Formik,Form, Field } from 'formik'
import { db } from '../config/firebase'
import { addDoc, collection } from 'firebase/firestore'
const AddandUpdateContact = ({isOpen,onClose,onOpen}) => {
    const addContact=async (contact)=>{
        try {
            const contactref=collection(db,"contacts");
            await addDoc(contactref,contact);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="bg-red-600">
        <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose}  >
            <Formik  
            initialValues={{
                Name:"",
                Email:"",
                Phone:""
            }}
            onSubmit={(values)=>{
                console.log(values);
                addContact(values);
            }}
            >
                <Form className="flex flex-col justify-end gap-3">
                    <div className="flex flex-col gap-1">
                    <label htmlFor="Name">Name</label>

                    <Field name="Name" className="h-10 border "/>
                    </div>
                    <div  className="flex flex-col gap-1">
                    <label htmlFor="Email">Email</label>
                    <Field name="Email" className="h-10 border "/>
                    </div>
                   <div  className="flex flex-col gap-1">
                     <label htmlFor="Phone">Phone</label>
                    <Field name="Phone" className="h-10 border "/>
                   </div>
                    <button className="bg-orange  rounded-lg border py-1.5 px-3 text-s self-end">Add Contact</button>
                </Form>
            
            </Formik>
            </Modal>
</div>

  )
}

export default AddandUpdateContact