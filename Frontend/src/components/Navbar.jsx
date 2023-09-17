import React from 'react';
import './Navbar.css';
import axios from 'axios'; 

export default function Navbar() {
  const handleDownload = () => {
   
    axios
      .get('https://contacts-m5b0.onrender.com/generate-pdf', { responseType: 'blob' }) 
      .then(response => {
        
        const blob = new Blob([response.data], { type: 'application/pdf' });

       
        const url = window.URL.createObjectURL(blob);

        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'contacts.pdf'; 
        link.click();

        
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error downloading PDF', error);
      });
  };

  return (
    <div className='navbar'>
      <div className='name'>
        <h1>Contacts App</h1>
      </div>
      <div className='content'>
        <button style={{padding:"10px",borderRadius:"5px",cursor:"pointer"}} onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
}
