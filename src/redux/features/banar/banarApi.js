import { baseApi } from "../baseApi/apiSlice";

export const banarApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    uploadNewBanar: build.mutation({
      query: (data) => ({
        url: "/banars/upload",
        method: "POST",
        data,
      }),
      invalidatesTags: ["banars"],
    }),

    getAllBanars: build.query({
      query: () => ({
        url: "/banars",
        method: "GET",
      }),
      providesTags: ["banars"],
    }),

    deleteBanar: build.mutation({
      query: (data) => ({
        url: `/banars/${data?.id}`,
        method: "DELETE",
        data,
      }),
      invalidatesTags: ["banars"],
    }),
  }),
});

export const {
  useUploadNewBanarMutation,
  useGetAllBanarsQuery,
  useDeleteBanarMutation,
} = banarApi;
