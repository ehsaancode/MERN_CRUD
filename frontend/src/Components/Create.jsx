import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const addUser = {name, age, email}

        const response = await fetch("http://localhost:4000",{
            method: "POST",
            body: JSON.stringify(addUser),
            headers: {
                "Content-Type": "application/JSON"
            }

        })
        
        const result = await response.json()

        if(!response.ok){
            setError(result.error)
            
        }
        if(response.ok){
            console.log(result)
            setName("")
            setEmail("")
            setAge("")
            navigate("/")
        }
    }



  return (
    <div> {error && <div class="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
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
                <label value={age} className="form-label">Age</label>
                <input onChange={(e)=> setAge (e.target.value)} type="number" className="form-control" />
            </div>
        
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Create
