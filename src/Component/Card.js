import React from 'react'

export default function Card(props) {
  
  return (
    <div>
       {
        props.moviedata.map((mov,index)=>(
            <div>
            <li key={index}>
                <img className='img1' src= {mov.imgSrc}/>,
                {mov.title},
                {mov.text}
            </li>
            <button>watch now</button>
            </div> 
        ))
       }
    </div>
  )
}


{/* <table border={3}>
                <tr key="index">
                    <td>
                    <img className='img1' src= {mov.imgSrc}/>,  {mov.title}, {mov.text}
                    </td>
                </tr>
            </table> */}