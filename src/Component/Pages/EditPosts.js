import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

//http://localhost:3000/posts/6

export default function EditPosts() {

    const [post, setPost] = useState()

  // const result = useParams()
  // console.log(result)

  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error.message));
  }, []);

  const updateRecord = () => {
    axios.put(`http://localhost:3001/posts/${id}`, post)
    .then(() => {
        alert('Data Updated')
        navigate('/Component/APIDEMO/posts')
    })
    .catch((error) => console.log(error.message))
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <h2>Edit Post : {id} </h2>
          {/* <p>
                    <label>ID</label>
                    <input type="text" value={post.id} readOnly />
                </p> */}

          <p>
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={post?.title}
              onChange={(event) =>
                setPost({ ...post, title: event.target.value })
              }
            />
          </p>
          <p>
            <label>Body</label>
            <input
              type="text"
              className="form-control"
              value={post?.body}
              onChange={(event) =>
                setPost({ ...post, body: event.target.value })
              }
            />
          </p>

          <button onClick={updateRecord} className="btn btn-lg btn-warning">Update</button>
        </div>
      </div>
    </div>
  );
}
