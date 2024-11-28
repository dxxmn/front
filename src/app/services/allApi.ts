import { User } from "../types";
import {api} from "./api";

export const allApi = api.injectEndpoints({
    endpoints: (builder) => ({

      login: builder.mutation<
        { token: string },
        { email: string; password: string }
      >({
        query: (userData) => ({
          url: "/auth/signin",
          method: "POST",
          body: userData,
        }),
      }),

      register: builder.mutation<
        { email: string; password: string; },
        { email: string; password: string; }
      >({
        query: (userData) => ({
          url: "/registration",
          method: "POST",
          body: userData,
        }),
      }),

      current: builder.query<User, void>({
        query: () => ({
          url: "/current",
          method: "GET",
        }),
      }),

      getProjects: builder.query({
        query:(userData) => ({
          url:'',
          method:'',
          body:userData
        })
      }),

      createModelFromFile: builder.mutation<{chatId:string},{file:FormData}>({
        query:(userData) => ({
          url:'/createModelFromFile',
          method:'GET',
          body:userData
        })
      }),

      
    }),
  })
  

export const {
    useLoginMutation,
    useRegisterMutation,
    useCreateModelFromFileMutation,
    useLazyCurrentQuery
} =allApi