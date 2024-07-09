import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllPosts = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState()

    const getData= async ()=>{
        const response = await fetch("http://localhost:4000")

        const result = await response.json()

        if(!response.ok){
            setError(result.error)
        }
        if(response.ok){
            console.log(result)
        }
        setData(result)

    }

    const handleDelete = async (id)=>{
        const response = await fetch(`http://localhost:4000/${id}`,{
            method: "DELETE"
        })
        const result = response.json()

        if(!response.ok){
            setError(result.error)

        }
        if(response.ok){
            setError("Deleted Successfully")
            getData()
            setTimeout(()=>{
                setError("")
    
            }, 1000)
        }

    }

    useEffect(()=>{
        getData()
    },[])

    console.log(data)

  return (
    <div className='container my-2'>
         {error && <div class="alert alert-danger">{error} </div>}

        <h2 className='text-center'>All data</h2>
        <div className="row">

            {data?.map((e)=>(

            <div key={e._id} className="col-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Name: {e.name}</h5>
                        <p className="card-text">Age: {e.age}</p>
                        <p className="card-text">Email: {e.email}</p>
                        <Link to={`/${e._id}`} className="card-link">Edit</Link>
                        <a href='#' onClick={()=>handleDelete(e._id)} className="card-link">Delete</a>
                    </div>
                </div>
            </div>
            ))}
            
        </div>
    </div>
  )
}

export default AllPosts
