import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URl } from "../../utils/constants";

// export const getCategories = createAsyncThunk(
//     'categories/getCategories', 
//     async (_, thunkAPI) => {
//         try{
//             const res = await axios(`${BASE_URl}/categories?limit=6`)
//             return res.data
//         }catch(err){
//             console.log(err);
//             return thunkAPI.rejectWithValue(err)
//         }
//     })

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: [],
        cart: [],
        isLoading: false
    },
    reducers: {
        addItemToCart: (state, { payload }) => {
            let newCart = [...state.cart]
            const found = state.cart.find(( { id } ) => id === payload.id)

            if (found) {
                newCart = newCart.map((item) => {
                    return item.id === payload.id ? {...item, quantity: payload.quantity || item.quantity + 1 }
                    : item
                })
            } else newCart.push({ ...payload, quantity: 1 })

            state.cart = newCart
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(getCategories.pending, (state, {payload}) => {
        //     state.isLoading = true
        // })
        // builder.addCase(getCategories.fulfilled, (state, {payload}) => {
        //     state.list = payload
        //     state.isLoading = false
        // })
        // builder.addCase(getCategories.rejected, (state, {payload}) => {
        //     state.isLoading = false
            
        // })
    }
})

export const { addItemToCart } = userSlice.actions

export default userSlice.reducer