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

    updateInfo: build.mutation({
      query: ({ key, ...other }) => ({
        url: `/users/${key}`,
        method: "PATCH",
        data: other,
      }),
      invalidatesTags: ["users"],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),

    getAllUser: build.query({
      query: (arg) => ({
        url: "/users",
        method: "GET",
        params: arg,
      }),
      providesTags: ["users"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useUpdateInfoMutation,
  useGetAllUserQuery,
  useDeleteUserMutation,
} = userApi;
