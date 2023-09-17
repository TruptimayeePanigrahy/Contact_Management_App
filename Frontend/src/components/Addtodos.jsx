// Addcontacts.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./addtodos.css";

function Addtodos() {
  const [newname, setname] = useState("");
  const [newnumber, setnumber] = useState("");
  const [newemail, setemail] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const obj = {
      name: newname,
      number: newnumber,
      email: newemail,
    };

   fetch("https://contacts-m5b0.onrender.com/contacts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(obj)
    })
       .then((res) => {
          return res.json()
      })
      
      .then((data) => {
        toast.success(data.msg, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(data);
        setname("");
        setemail("");
        setnumber("");
           // Call the callback to refresh contacts in Maintask
      })
      .catch((error) => {
        toast.error(error.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  const handlename = (e) => {
    setname(e.target.value);
  };

  const handlenumber = (e) => {
    setnumber(e.target.value);
  };

  const handlemail = (e) => {
    setemail(e.target.value);
  };

  return (
    <div className='addtodos'>
      <form onSubmit={handlesubmit}>
        <h3>Name</h3>
        <input type="text" value={newname} onChange={handlename} placeholder='Enter name' />
        <h3>Number</h3>
        <input type='text' value={newnumber} onChange={handlenumber} placeholder='Enter number' />
        <h3>Email</h3>
        <input type='text' value={newemail} onChange={handlemail} placeholder='Enter email' /><br />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default Addtodos;
