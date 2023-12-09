import { baseApi } from "../baseApi/apiSlice";

export const idTypeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createIdType: build.mutation({
      query: (data) => ({
        url: "/idTypes",
        method: "POST",
        data,
      }),
      invalidatesTags: ["idTypes"],
    }),

    getAllIdTypes: build.query({
      query: (arg) => ({
        url: "/idTypes",
        method: "GET",
        params: arg,
      }),
      providesTags: ["idTypes"],
    }),

    deleteIdType: build.mutation({
      query: (id) => ({
        url: `/idTypes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["idTypes"],
    }),

    updateIdTypes: build.mutation({
      query: ({ key, sl, ...data }) => ({
        url: `/idTypes/${key}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["idTypes"],
    }),
  }),
});

export const {
  useCreateIdTypeMutation,
  useGetAllIdTypesQuery,
  useDeleteIdTypeMutation,
  useUpdateIdTypesMutation,
} = idTypeApi;
