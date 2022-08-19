import React, { useContext } from 'react'
import { userContext } from '../../App';


export default function ComponentF() {

    const user = useContext(userContext);

    return (
    <div>
        ComponentF - {user}
    </div>
  )
}
