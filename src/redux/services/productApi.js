import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["products"],
    }),
    getAllCategories: builder.query({
      query: () => "/products/categories",
      providesTags: ["products"],
    }),
    getProductByCategory: builder.query({
      query: (name) => `/products/category/${name}`,
      providesTags: ["products"],
    }),
    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),
    getProductsByLimit: builder.query({
      query: ({ skip, limit }) => `/products?skip=${skip}&limit=${limit}`,
      providesTags: ["products"],
    }),
    searchProducts: builder.query({
      query: (name) => `/products/search?q=${name}`,
      providesTags: ["products"],
    }),
    getProductsBySkipAndLimit: builder.query({
      query: ({ skip, limit }) => `/posts?skip=${skip}&limit=${limit}`,
      providesTags: ["products"],
    }),
  }),
});

export const {
  useGetSingleProductQuery,
  useGetAllCategoriesQuery,
  useGetAllProductsQuery,
  useGetProductsByLimitQuery,
  useGetProductByCategoryQuery,
  useSearchProductsQuery,
  useGetProductsBySkipAndLimitQuery,
} = productApi;
