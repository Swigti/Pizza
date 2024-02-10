import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productSlice = createApi({
    reducerPath:'products',
    tagTypes:['products'],
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000"}),
    endpoints:(build)=>({
        getProducts: build.query({
           query:(filter)=>`products?${filter.category !== 'All' ? `category=${filter.category}`:''}`,
           providesTags:['products']
        }),
        getProduct: build.query({
            query:(id)=> `products/${id}`
        }),
        addProduct:build.mutation({
            query:(product)=>({
                url:"products",
                method:"POST",
                body:product
            }),
            invalidatesTags:['products']
        }),
        delProduct:build.mutation({
            query:(id)=>({
                url:`products/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:['products']
        }),
        registerUser:build.mutation({
            query:(user)=>({
                url:"register",
                method:"POST",
                body:user
            })
        }),
        loginUser:build.mutation({
            query:(user)=>({
                url:"login",
                method:"POST",
                body:user
            })
        })
    })
}) 

export const {useGetProductsQuery 
          , useAddProductMutation
          ,useGetProductQuery
          ,useDelProductMutation,
          useRegisterUserMutation,
          useLoginUserMutation
        } = productSlice