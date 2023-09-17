import React, { useState } from 'react'
import "./Maintask.css"
import Sorting from './Sorting'
import Showdata from './Showdata'
import Mydata from './Mydata'
import Search from './Search'
import Addtodos from './Addtodos'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Maintask() {
  const [active ,setactive]=useState(<Showdata/>)
 
  return (
    <div className='main'>
        <div className='left'>
            <h1>Contacts</h1><br/>
            <hr />
            <button className='todoss' onClick={()=>{ setactive(<Showdata/>)}}>Show Contacts</button><br/>

            <button className='todoss' onClick={()=>{setactive(<Mydata/>)}}>Contacts By ID</button><br/>

        <button className='todoss' onClick={() => { setactive(<Addtodos />) }}>Add contacts</button><br />
        <button className='todoss' onClick={() => { setactive(<Search />) }}>Search</button><br />
        <button className='todoss' onClick={() => { setactive(<Sorting />) }}>Sorting</button><br />
        

          </div>
        <div className='right'>
          
          {active}
            
        </div>
      
    </div>
  )
}
