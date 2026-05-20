import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name:'theme',
    initialState:{
        value:'light'
    }, reducers:{
        changeThemeToLight:(state)=>{
            state.value = 'light'
            console.log(state.value)
        },
        changeThemeToDark:(state)=>{
            state.value = 'dark'
            console.log(state.value)
        }
    }
})

export const {changeThemeToDark, changeThemeToLight} = themeSlice.actions
export default themeSlice.reducer