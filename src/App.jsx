import { useEffect, useState } from "react";  
import User from "./User";  
import "./App.css"

function App(){  
  const[username,setusername]=useState('Ajeettiwarii')    
  const[userdata,setuserdata]=useState(null) 
  const[loading , setloading]=useState(true)
   
   const fetchgithubuserdata=async()=>{  
    setloading(true)
    const res=await fetch(`https://api.github.com/users/${username}`)  
    const data=await res.json(); 
    // console.log(data); 
    if(data){
      setuserdata(data) 
      setloading(false)  
      setusername('')
    }

   }
  function handleSubmit(){ 
    fetchgithubuserdata()
  }
    useEffect(()=>{  
      fetchgithubuserdata()

    },[])  
    if(loading){
      return <h1>Loading Data! please wait </h1>
    }
  
  return (
    <>   
           <div className="github-profile-container">
              <div className="input-wrapper">
                <input  
                name="search-by-username"
                 type="text"  
                 placeholder="Search Github Username..." 
                 value={username} 
                 onChange={(e)=>setusername(e.target.value)}
                  /> 
                  <button onClick={handleSubmit}>Search</button>  

              </div>  
              {
                userdata!==null ?  <User user={userdata}/> :null
              }
           </div>
    </>
  )
} 
export default App;