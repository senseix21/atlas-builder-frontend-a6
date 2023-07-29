import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://atlas-builder-backend-a6.vercel.app' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products"
        }),
        getSingleProducts: builder.query({

        })
    })
})

export const { useGetProductsQuery } = apiSlice