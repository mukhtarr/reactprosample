import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import LikedPosts from '../Pages/LikedPosts'
import DislikedPosts from '../Pages/DislikedPosts'
import LatestsPosts from '../Pages/LatestsPosts'
import OldestPosts from '../Pages/OldestPosts'

export default function Posts() {

 
  return (
    <div className='container mt-4'>      
      <ul className="nav justify-content-center">
        <li className="nav-item">
            <Link className="nav-link active" to="latest">LATEST</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="oldest">OLDEST</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="liked">LIKED</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link " to="disliked" >DISLIKED</Link>
        </li>
        </ul>

        {/* Routing Configuration */}
        <Routes>
             <Route path='/latest' element={<LatestsPosts/>}/>
             <Route path='/oldest' element={<OldestPosts/>}/>
             <Route path='/liked' element={<LikedPosts/>}/>
             <Route path='/disliked' element={<DislikedPosts/>}/>
        </Routes>
    </div>
  )
}
