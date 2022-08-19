import React, { useEffect,useState } from 'react'
import { getPosts } from './actions/postAction'
import postStore from './store/postStore'


export default function FluxPosts() {
  const [post,setPosts] = useState(postStore.getPosts())

  useEffect(()=>{
      postStore.addChangeListener(onChange)
      if(postStore.getPosts().length===0){
        getPosts()
      }
  })

  const onChange = ()=>{
     setPosts(postStore.getPosts())
  }
  return (
    <div>
      {
        post?post.map(p=>(
          <div key={p.id}>
              <h1>{p.id}</h1>
              <h2>{p.title}</h2>
              <h3>{p.body}</h3>
              <hr/>
          </div>
        )):<h1>No data found</h1>
      }
    </div>
  )
}
