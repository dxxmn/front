import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../constants";
import {RootState} from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
    prepareHeaders: headers => {
        headers.set('Content-Type', 'application/json;charset=UTF-8')
        headers.set('Authorization','сюда токен')
    }
})

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 1})
export const api = createApi({
    reducerPath:'splitApi',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
})