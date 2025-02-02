import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URl } from "../../utils/constants";



export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URl }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ({ id }) => `/product/${id}`,
            providesTags: ["Product"],
        })
    })
})

export const { useGetProductQuery } = apiSlice