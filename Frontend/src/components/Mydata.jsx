import React, { useEffect, useState } from 'react'
import "./Mydata.css"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Mydata() {
    const [data,setdata]=useState("")
    const [abc,setabc]=useState([])
   const getContactById = async () => {
    try {
      const response = await fetch(`https://contacts-m5b0.onrender.com/user/${data}`);
      if (!response.ok) {
        throw new Error('Failed to fetch contact by ID');
      }
      const result = await response.json();
      console.log(result.contacts[0]);
      console.log(result.contacts[0].name);
      setabc(result.contacts);
    } catch (error) {
      console.error('Error fetching contact by ID:', error.message);
    }
    };
    const handleInputChange = (event) => {
    setdata(event.target.value);
  };
    
    return (
        <div className='appendcard'>
            <h1>Get by Id</h1>
           <input type="text" value={data} onChange={handleInputChange} />
        <button onClick={getContactById}>Get by Id</button>
         <table>
         <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Number</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                 <tbody>
                    {abc.map((contact) => (
                      <tr key={contact._id}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.number}</td>
                        <td>Edit</td>
                        <td>Delete</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
        </div>
      );
    }