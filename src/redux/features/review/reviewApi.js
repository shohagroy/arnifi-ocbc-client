import { baseApi } from "../baseApi/apiSlice";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (data) => ({
        url: "/reviews/create",
        method: "POST",
        data,
      }),
      invalidatesTags: ["reviews"],
    }),

    getAllReviews: build.query({
      query: (arg) => ({
        url: "/reviews/get-all",
        method: "GET",
        params: arg,
      }),
      providesTags: ["reviews"],
    }),

    getAttractionReviews: build.query({
      query: ({ id, ...arg }) => ({
        url: `/reviews/attraction/${id}`,
        method: "GET",
        params: arg,
      }),
      providesTags: ["reviews"],
    }),

    getUserReviews: build.query({
      query: ({ id, ...arg }) => ({
        url: `/reviews/user/${id}`,
        method: "GET",
        params: arg,
      }),
      providesTags: ["reviews"],
    }),

    deleteReview: build.mutation({
      query: (id) => ({
        url: `/reviews/delete${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["countries"],
    }),

    updateReview: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/reviews/update/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetAllReviewsQuery,
  useGetAttractionReviewsQuery,
  useGetUserReviewsQuery,
  useDeleteReviewMutation,
  useUpdateReviewMutation,
} = reviewApi;
