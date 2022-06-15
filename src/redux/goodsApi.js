import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: build => ({
    getGoods: build.query({
      query: (limit = '') => `goods?${limit && `_limit=${limit}`}`,
    }),
    addProduct: build.mutation({
      query: body => ({
        url: 'goods',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetGoodsQuery, useAddProductMutation } = goodsApi;
