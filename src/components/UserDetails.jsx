
import {useEffect,useState } from "react"
 
 const UserDetails=()=>{

    const[UserData,setUserData]=useState({})
    const[loading,setLoading]=useState({})
    
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await fetch('https://jsonplaceholder.typicode.com/users/1')
            const data=await response.json()
            setLoading(false)
            console.log(data)
            setUserData(data)
        }
        fetchData

    },[])


    return(
        <div className="w-[300px] mx-auto bg-orange-100 flex flex-col justify-center items-center rounded-md"> 
        <h1 className="text-xl mb-2 flex justify-center"> User Detail</h1>
        {loading ? (
            <p>Loading... </p>
        ) :(
        <>
       
             <div ><strong>Name :</strong> {UserData.name}</div>
             <div ><strong>Email :</strong> {UserData.email}</div>
             <div ><strong>UserName :</strong> {UserData.username}</div>
             <div ><strong>Address :</strong>{UserData.address.street} , {UserData.address.city} , {UserData.address.zipcode}</div>
        
        </> )     }



        </div>
    );
};



export default UserDetails;