import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link,useNavigate } from "react-router-dom"

  const User =()=>{ 
    const [data, setData]=useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
      getUsers();
    },[])

    const getUsers=async()=>{
      const response = await axios.get("http://localhost:5000/cars") //backend url that will fetch data from 
      if(response.status ===200){
        setData(response.data)
      }
    }
    console.log(data)

    //this function will allow you to delete the data in the app
    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/cars/'+id)
        .then(res => {
            console.log(res)
            navigate('/')
        }).catch(err => console.log(err))
    }

        //This function is for reloading the page
    function refreshPage(){
        window.location.reload();
    } 

    return(
      <div className="app">
        <h2>Database</h2> 

        <br></br>
          <Link to="/cars"><button>Add +</button></Link>

        <table>
          <thead>
            <tr>
              <th style={{textAlign:"center"}}>Model</th>
              <th style={{textAlign:"center"}}>Make</th>
              <th style={{textAlign:"center"}}>Owner</th>
              <th style={{textAlign:"center"}}>Registration Number</th>
          </tr>
        </thead>

      <tbody>
        {data && data.map((item,index)=>{  
          return(  /*this going to display each table data to be place on each table header */
            <tr key={index}> 
                <td>{item.Model}</td>
                <td>{item.Make}</td>
                <td>{item.Owner}</td>
                <td>{item.Registration_number}</td>
                <td>
                    <Link to={`/cars/${item._id}`}><button>Update</button></Link>
                    <button onClick={() => handleDelete(item._id)} >Delete</button>
                </td>
            </tr>
            
          )
        })}
      </tbody>
        </table>

        <button onClick={refreshPage}>Refresh Page</button>
      </div>
    );
  }


export default User;