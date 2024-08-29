import { createSlice } from '@reduxjs/toolkit'

const initialState={
    value:0,
}


 export const CounterSlice = createSlice({
    name: "counter",
    reducers:{

    },
 })

 export const { } = CounterSlice.actions
 export default CounterSlice.reducer