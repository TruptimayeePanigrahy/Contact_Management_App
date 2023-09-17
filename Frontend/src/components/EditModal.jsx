import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import "./Edit.css";
Modal.setAppElement('#root'); // Set the app element for accessibility

function EditModal({ isOpen, onRequestClose, post, onSubmit }) {
  const [newname, setname] = useState("");
  const [newnumber, setnumber] = useState("");
  const [newemail, setemail] = useState("");

  useEffect(() => {
    if (post) {
      setname(post.name);
      setnumber(post.number);
      setemail(post.email);
    }
  }, [post]);

  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handleNumberChange = (e) => {
    setnumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setemail(e.target.value);
  };

  const handleSubmit = () => {
    const updatedPost = { name: newname, number: newnumber, email: newemail };
    onSubmit(post._id, updatedPost);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Modal"
      className="editmodel"
    >
      <h2 style={{ textAlign: "center", color: "#058665" }}>Edit Contacts</h2>
      <label>
        Name<br/>
        <input type="text" value={newname} onChange={handleNameChange} />
      </label>
      <label>
        Number<br/>
        <input type="text" value={newnumber} onChange={handleNumberChange} />
      </label>
      <label>
        Email<br/>
        <input type="text" value={newemail} onChange={handleEmailChange} />
      </label>
      <div className='btns'>
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onRequestClose}>Cancel</button>
      </div>
    </Modal>
  );
}

export default EditModal;
