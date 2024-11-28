import { User } from "../types"
import { api } from "./api"


interface CreateModelRequest {
  file: File
  chat_name: string
  model_name: string
  instruction: string
  embending: string
}

interface RequestChat {
  url: string;
  chat_name: string;
  model_name: string;
  instruction: string;
  embending: string;
}

interface CreateModelResponse {
  text: string;
  chatId: number;
}

export interface RequestMessage {
  chat_id: number;
  question: string;
}

export interface ResponseTest {
  aiAnswer: string;
}

export interface Chat {
  chat_id: number;
  user_id: number;
  chat_name: string;
  model_name: string;
  embending: string;
  file_url: string;
  instruction: string;
  created_at: string; 
}


export interface Message {
  message_id: number;
  chat_id: number;
  user_id: number;
  question: string;
  ai_answer: string;
  sent_at: string; 
}

export interface GetHistoryResponse {
  messages: Message[];
}

export const allApi = api.injectEndpoints({
  endpoints: builder => ({

    getHistory: builder.mutation<GetHistoryResponse, {chatId: number}>({
      query: (body) => ({
        url: '/api/getHistory', // Замените на реальный путь вашего эндпоинта
        method: 'GET',
        body:body
      }),
    }),

    getAllChats: builder.query<Chat[], void>({
      query: () => ({
        url: '/api/getAllChats', // Замените на реальный путь вашего эндпоинта
        method: 'GET',
      }),
    }),

    sendMessage: builder.mutation<ResponseTest, RequestMessage>({
      query: (body) => ({
        url: '/api/setMessage', // Замените на реальный путь вашего эндпоинта
        method: 'POST',
        body,
      }),
    }),

    createModelFromLink: builder.mutation<CreateModelResponse, RequestChat>({
      query: (body) => ({
        url: "/api/createModelFromFile", // Замените на реальный путь вашего эндпоинта
        method: 'POST',
        body: body,
      }),
    }),

    createModelFromFile: builder.mutation<CreateModelResponse, CreateModelRequest>({
      query: ({ file, chat_name, model_name, instruction, embending }) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('chat_name', chat_name);
        formData.append('model_name', model_name);
        formData.append('instruction', instruction);
        formData.append('embending', embending);

        return {
          url: '/api/createModelFromFile', // Adjust the endpoint path if necessary
          method: 'POST',
          body: formData,
        };
      },
    }),

    login: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: userData => ({
        url: "/auth/signin",
        method: "GET",
        body: userData,
      }),
    }),

    register: builder.mutation<void, { email: string; password: string }>({
      query: userData => ({
        url: "/auth/registration",
        method: "PUT",
        body: userData,
      }),
    }),

  }),
})

export const {
  useGetAllChatsQuery,
  useSendMessageMutation,
  useLoginMutation,
  useRegisterMutation,
  useCreateModelFromFileMutation,
  useCreateModelFromLinkMutation,
  useLazyGetAllChatsQuery,
  useGetHistoryMutation,
} = allApi