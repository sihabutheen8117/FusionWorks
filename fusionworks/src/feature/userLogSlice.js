import { createSlice } from "@reduxjs/toolkit";

const userLogSlice  = createSlice({
    name : 'user',
    initialState : {
        log : localStorage.getItem("userLog") ? JSON.parse(localStorage.getItem("userLog")) : null,
    },
    reducers : {
        storeUserLog : (state ,action )=>{
            console.log("from userLogSlice",action)
            state.log = action.payload ;
            localStorage.setItem("userLog", JSON.stringify(action.payload));
        }
    }
})

export const {storeUserLog} = userLogSlice.actions ;
export default userLogSlice.reducer ;
