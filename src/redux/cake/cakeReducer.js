import { BUY_CAKE, BUY_CANDLE } from "./cakeType"

const initialState = {
    numberOfCakes: 20,
    numberOfCandles: 30
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numberOfCakes: state.numberOfCakes - action.cakeqty
            }
        case BUY_CANDLE:
            return{
                ...state,
                numberOfCandles: state.numberOfCandles - action.candleqty
            }
        default:
            return state
    }
}

export default cakeReducer