import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URl } from "../../utils/constants";

export const getCategories = createAsyncThunk(
    'categories/getCategories', 
    async (_, thunkAPI) => {
        try{
            const res = await axios(`${BASE_URl}/categories?limit=6`)
            return res.data
        }catch(err){
            console.log(err);
            return thunkAPI.rejectWithValue(err)
        }
    })

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state, {payload}) => {
            state.isLoading = true
        })
        builder.addCase(getCategories.fulfilled, (state, {payload}) => {
            state.list = payload
            state.isLoading = false
        })
        builder.addCase(getCategories.rejected, (state, {payload}) => {
            state.isLoading = false
            
        })
    }
})

export default categoriesSlice.reducer