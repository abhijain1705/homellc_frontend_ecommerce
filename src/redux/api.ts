import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ForgotInterface, LoginInterface, NewPasword, SignupInterface } from "../common/interface/interface";

export const userAPI = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
  }),

  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (newUser: SignupInterface) => {
        return {
          url: "homellc/users/signup",
          method: "POST",
          body: newUser,
        };
      },
    }),
    login: builder.mutation({
      query: (oldUser: LoginInterface) => {
        return {
          url: "homellc/users/login",
          method: "POST",
          body: oldUser,
        };
      },
    }),
    forgotPassword: builder.mutation({
      query: (forgotUser: ForgotInterface) => {
        return {
          url: 'homellc/passwords/forgot-password',
          method: 'POST',
          body: forgotUser
        }
      }
    }),
    updatePassword: builder.mutation({
      query: (newPassword: NewPasword) => {
        return {
          url: `homellc/passwords/reset-password/${newPassword.token}`,
          method: 'POST',
          body: newPassword
        }
      }
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useForgotPasswordMutation, useUpdatePasswordMutation } = userAPI;
