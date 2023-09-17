import React, { useEffect, useState } from 'react';
import './showcard.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditModal from './EditModal';

export default function Showdata() {
  const [postdata, setpostdata] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://contacts-m5b0.onrender.com/contacts')
      .then((res) => res.json())
      .then((data) => {
        setpostdata(data.contacts);
        console.log(data.contacts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteContact = (id) => {
    fetch(`https://contacts-m5b0.onrender.com/contacts/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
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

        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function edit(post) {
    setSelectedPost(post);
    setIsEditModalOpen(true);
  }

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleEditSubmit = (id, updatedPost) => {
    
    console.log("Updated Post:", updatedPost);
    // ... implement update logic ...
    fetch(`https://contacts-m5b0.onrender.com/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        toast.success(data.msg, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        fetchData(); 
      });
  };

  return (
    <div className="appendcard">
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
          {postdata.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.number}</td>
              <td><button style={{padding:"10px",backgroundColor:"#a49e9e25",color:"white"}} onClick={() => edit(contact)}>Edit</button></td>
              <td>
                <button style={{padding:"10px",backgroundColor:"#a49e9e25",color:"white"}} onClick={() => deleteContact(contact._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditModal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        post={selectedPost}
        onSubmit={handleEditSubmit}
      />
    </div>
  );
}
