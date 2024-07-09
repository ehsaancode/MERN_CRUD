import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    
    const [error, setError] = useState("")
    
    
    
    const {id} = useParams()
    const navigate = useNavigate()


    const getSingleUser = async()=>{

        const response = await fetch(`http://localhost:4000/${id}`)
    
        const result = await response.json()
        
        if(!response.ok){
            setError(result.error)
            
        }
        if(response.ok){
            setError("")
            console.log(result)
            setAge(result.age)
            setEmail(result.email)
            setName(result.name)
        }

    }

    //update the user data
    
    useEffect(()=>{
        getSingleUser()
    },[])

    const handleUpdate = async (e)=>{
        
        e.preventDefault()

        const updatedUser = {name, age, email}

        const response = await fetch(`http://localhost:4000/${id}`,{
            method: "PATCH",
            body: JSON.stringify(updatedUser),
            headers: {
                "Content-Type": "application/JSON"
            }

        })
        
        const result = await response.json()

        if(!response.ok){
            setError(result.error)
            
        }
        if(response.ok){
            setError("")
            navigate("/")
        }
        
    }


  return (
    <div>
      <form onSubmit={handleUpdate}>
            <div  className="mb-3">
                <label className="form-label">Name</label>
                <input onChange={(e)=> setName (e.target.value)} type="text" value={name} className="form-control" />
            </div>
            <div  className="mb-3">
                <label className="form-label">Email address</label>
                <input onChange={(e)=> setEmail (e.target.value)} type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div  className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div  className="mb-3">
                <label  className="form-label">Age</label>
                <input  value={age} onChange={(e)=> setAge (e.target.value)} type="number" className="form-control" />
            </div>
        
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
  )
}

export default Edit
