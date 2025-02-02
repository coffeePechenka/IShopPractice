import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URl } from "../../utils/constants";

export const getProducts = createAsyncThunk(
    'products/getProducts', 
    async (_, thunkAPI) => {
        try{
            const res = await axios(`${BASE_URl}/products`)
            return res.data
        }catch(err){
            console.log(err);
            return thunkAPI.rejectWithValue(err)
        }
    })

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        filtered: [],
        // related: [],
        isLoading: false
    },
    reducers: {
        filterByPrice: (state, { payload }) => {
            state.filtered = state.list.filter(({price}) => price < payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, {payload}) => {
            state.isLoading = true
        })
        builder.addCase(getProducts.fulfilled, (state, {payload}) => {
            state.list = payload
            state.isLoading = false
        })
        builder.addCase(getProducts.rejected, (state, {payload}) => {
            state.isLoading = false
            
        })
    }
})


export const { filterByPrice } = productsSlice.actions
export default productsSlice.reducer