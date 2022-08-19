import React, { useState } from 'react'


export default function UseStateWithObject() {

    const [name, setName] = useState({firstname:'', lastname:''})

  return (
    <div>
        <form className='form-control'>
            <p>
                FirstName : <br/>
                <input
                    type="text"
                    onChange={(event)=> setName({...name, firstname:event.target.value})}
                />
            </p>
            <p>
                LastName : <br/>
                <input 
                    type="text"
                    onChange={(event)=> setName({...name, lastname:event.target.value})}
                />
            </p>
            <hr/>
            <h3>{JSON.stringify(name)}</h3>
        </form>
    </div>

    )
}
