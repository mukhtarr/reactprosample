import { BUY_CAKE, BUY_CANDLE } from "./cakeType"

export const buyCake = (num1) => {
    return{
        type: BUY_CAKE,
        cakeqty:num1
    }
}
export const buyCandle = (num2) => {
    return{
        type: BUY_CANDLE,
        candleqty:num2
    }
}