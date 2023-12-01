import { baseApi } from "../baseApi/apiSlice";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (data) => ({
        url: "/auth/create-user",
        method: "POST",
        data,
      }),
      invalidatesTags: ["users"],
    }),

    login: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
      invalidatesTags: ["users"],
    }),

    updateInfo: build.mutation({
      query: (data) => ({
        url: "/users/update-info",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["users"],
    }),

    updateAvatar: build.mutation({
      query: (data) => ({
        url: "/users/update-avatar",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["users"],
    }),

    getUserProfile: build.query({
      query: () => ({
        url: "/users/get-profile",
        method: "GET",
      }),
      providesTags: ["users"],
    }),

    getAllUser: build.query({
      query: (arg) => ({
        url: "/users",
        method: "GET",
        params: arg,
      }),
      providesTags: ["users"],
    }),

    changeUserPassword: build.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["users"],
    }),

    changeUserRole: build.mutation({
      query: (data) => ({
        url: "/auth/change-user-role",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["users"],
    }),

    deleteUser: build.mutation({
      query: (data) => ({
        url: "/auth/delete-user",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["users"],
    }),

    getCallBackUrl: build.query({
      query: (data) => ({
        url: "/auth/get-google-callback",
        method: "GET",
        data,
      }),
      providesTags: ["users"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginMutation,
  useUpdateInfoMutation,
  useGetUserProfileQuery,
  useChangeUserPasswordMutation,
  useUpdateAvatarMutation,
  useGetAllUserQuery,
  useChangeUserRoleMutation,
  useDeleteUserMutation,
  useGetCallBackUrlQuery,
} = userApi;
