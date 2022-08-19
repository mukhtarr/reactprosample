import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'


export default function Menu() {

  const [role, setRole] = useState()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(()=>{
 
    let user_role =  sessionStorage.getItem('role')
    setRole(user_role)
   
  },[location])
 
  const logoutProcess = ()=>{
     sessionStorage.removeItem('role')
     alert('Logout successfully')
     navigate('/login')
  }


  return (
    <>

<div>
      <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
      <Link className="navbar-brand text-primary" to="/">K O E N I G</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {
            role?(role =='Admin')?(
              <>
              <Link className="nav-link active text-primary" aria-current="page" to="/welcome">Home</Link>
              <Link className="nav-link text-primary" to="/Component/APIDEMO/posts">Posts</Link>
              <Link className="nav-link text-primary" to="/addposts">Add Post</Link>
              <button onClick={logoutProcess} className='btn btn-sm btn-danger'>Logout</button>
              </>
            ):(
              <>
              <Link className="nav-link text-primary" aria-current="page" to="/welcome">Home</Link>
              <Link className="nav-link text-primary" to="/Component/APIDEMO/posts">Posts</Link>
              <button onClick={logoutProcess}  className='btn btn-sm btn-danger'>Logout</button>
              </>
             
            ):(
             <>
              <Link className="nav-link text-primary" aria-current="page" to="/welcome">Home</Link>
              <Link className="nav-link text-primary" to="/login">Login</Link>
              <Link className="nav-link text-primary" to="/register">Register</Link>
             </>
            )
          }
         
               </div>
      </div>
    </div>
  </nav></div>


    </>
  )
}
