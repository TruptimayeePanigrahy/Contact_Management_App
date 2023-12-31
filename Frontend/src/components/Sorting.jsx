import React, { useState } from 'react';

function Sorting() {
  const [sort, setSort] = useState("");
  const [result, setResult] = useState([]);

  const fetchData = (e) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);

    fetch(`https://contacts-m5b0.onrender.com/sort/${selectedSort}`)
      .then((res) => res.json())
      .then((data) => {
        setResult(data.msg);
        console.log("data", data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <div>
          <select style={{padding:"10px 20px"}} id="select" onChange={fetchData} value={sort}>
        <option value="">Sort By Name</option>
        <option value="1">Ascending</option>
        <option value="-1">Descending</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
           
          </tr>
        </thead>
        <tbody>
          {result.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.number}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sorting;
