import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AddPosts() {

  const [posts, setPosts] = useState();
    const [showCreateForm, setCreateForm] = useState(false)
    const [newRecord, setNewRecord] = useState({Id:'', useId:'',title:'', body:'', latest: true, oldest: false, liked: false, dislike: false})
    const [showEditForm, setShowEditForm] = useState(false)
    const [singlePost, setSinglePost] = useState()

  useEffect(() => {
    //logic to connect API --- read all records
    axios
      .get("http://localhost:3001/posts")
      .then((response) => setNewRecord(response.data))
      .catch((error) => console.log(error));
  },[]);
  //puting an array will stop calling api again and again

  const AddRecord = () => {
    axios.post(`http://localhost:3001/posts`, newRecord)
    .then(() => {
      alert('Data Added')
  //    navigate('posts/latest')
    })
    .catch((error) => console.log(error.message));
  }

  //logic to connect API --- to post records
  const createRecord = () => {
    axios
    .post("http://localhost:3001/posts", newRecord)
    .then((response) => {
        alert('Record Added Successfully')
        setCreateForm(false)
    })
    .catch((error) => console.log(error));
  }

  const editPostDetails = (singlePost)=> {
    console.log(singlePost)
    
    setSinglePost(singlePost)
    setShowEditForm(true)
  }

  const updateRecord = ()=> {
    axios
    .put(`http://localhost:3001/posts/${singlePost.id}`, newRecord)
    .then((response) => {
        alert('Record Updated Successfully')
        setShowEditForm(false)
    })
    .catch(error => console.log(error));
  }

  return (
    <div>
        
        <div className='container mt-4'>
        <div className='row'>
            <div className='col-md-12'>
                
            {/* Form */}
      <div className="row mt-4">
        <div className="col-md-12">
          {
            showCreateForm || showEditForm?
            <>
            <div className="container row border">
                <label>Title</label>
                <input 
                type="text" 
                className="form-control" 
                defaultValue={singlePost.title}
                onChange={(event)=> setNewRecord({...newRecord, title:event.target.value})}/>

                <label>Body</label>
                <input 
                type="text" 
                className="form-control"
                defaultValue={singlePost.body} 
                onChange={(event)=> setNewRecord({...newRecord, body:event.target.value})}/>

               {
                showEditForm?
                <button onClick={updateRecord} className="btn btn-success mt-4">Update</button>:
                <button onClick={createRecord} className="btn btn-success mt-4">Create</button>
               }
 
          </div>
            </>:null
          }
        </div>
      </div>

            </div>
        </div>
    </div>

    </div>
  )
}
