import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
function App() {
  const [data,setdata]=useState([])



  
  const fetchdata=()=>{
    axios.get("http://127.0.0.1:8000/studlist/").then((response)=>
     setdata(response.data)).catch((err)=>console.log(err))
  }
  
  
  
  useEffect(()=>{fetchdata()},[]);
  return (
    <div>
    
      {
        data.map(data=>{
          return <div>
            <p>First Name  :  {data.firstName}</p>
            <p>Last Name   :   {data.lastName}</p>
            <p>Grade       : {data.grade}</p>
          </div>
        })

      }
    </div>
  
  );
}

export default App;
