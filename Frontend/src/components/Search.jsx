import React from 'react'
import { useState } from 'react'

function Search() {



    const [search, setsearch] = useState("")
    const [data,setdata]=useState([])
  
  const handlesearch = (e) => {
    setsearch(e.target.value)
    fetch(`https://contacts-m5b0.onrender.com/api/search?query=${search}`)
      .then((res) => {
        return res.json()
      })
      .then((datas) => {
          console.log(datas)
          setdata(datas.msg)
          //console.log("serach",search)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
   
    
    <div>
          <div><input type="text" placeholder='search here' value={search} onChange={handlesearch} /></div> 
          <table>
         <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Number</th>
                      
                    </tr>
                  </thead>
                 <tbody>
                    {data.map((contact) => (
                      <tr key={contact._id}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.number}</td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
</div>
 

  )
}

export default Search;
