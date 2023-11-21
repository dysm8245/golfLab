import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: "user",
    initialState:{
        userList: [],
        id: "",
        token: "",
        username: "username",
        email: "email"
    },
    reducers:{
        chooseList: (state, action) => {state.userList = action.payload},
        chooseId: (state, action) => {state.id = action.payload},
        chooseToken: (state, action) => {state.token = action.payload},
        chooseUsername: (state, action) => {state.username = action.payload},
        chooseEmail: (state, action) => {state.email = action.payload}
    }
})

export const user = UserSlice.reducer
export const {chooseList, chooseId, chooseToken, chooseUsername, chooseEmail} = UserSlice.actions