import React, { useState } from 'react'
import { buyCake, buyCandle } from '../redux/cake/cakeAction'
import { connect } from 'react-redux'

function CakeContainer(props) {
const [cake, setCake] = useState(0)
const [candle, setCandle] = useState(0)

  return (
    <div className='container mt-4'>
        <h1>Number of cakes : {props.numberOfCakes} </h1>
        <h3>How many cakes required :</h3> 
        <input type="number" onChange={(event)=> setCake(event.target.value)}/> <br/> <br/>
        <button onClick={()=> props.buyCake(cake)} className='btn btn-success btn-lg'>Buy Cake</button>
        <h2>Number of Cakes : {props.numberOfCakes} </h2>
<hr/>
        <h1>Number of candles : {props.numberOfCandles} </h1>
        <h3>How many candles required :</h3> 
        <input type="number" onChange={(event)=> setCandle(event.target.value)}/> <br/> <br/>
        <button onClick={()=> props.buyCandle(candle)} className='btn btn-success btn-lg'>Buy Candle</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return{
        numberOfCakes : state.numberOfCakes,
        numberOfCandles : state.numberOfCandles
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCake:(num1)=> {dispatch(buyCake(num1))},
        buyCandle:(num2)=> {dispatch(buyCandle(num2))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)