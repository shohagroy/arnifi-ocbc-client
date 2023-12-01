import { baseApi } from "../baseApi/apiSlice";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBooking: build.mutation({
      query: (data) => ({
        url: "/booking/create",
        method: "POST",
        data,
      }),
      invalidatesTags: ["booking", "attractions"],
    }),
    cancelBooking: build.mutation({
      query: (data) => ({
        url: "/booking/cancel",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["booking", "attractions"],
    }),

    getUserBookingList: build.query({
      query: (arg) => ({
        url: "/booking/user-booking",
        method: "GET",
        params: arg,
      }),
      providesTags: ["booking"],
    }),

    getAllBookingList: build.query({
      query: (arg) => ({
        url: "/booking/get-all",
        method: "GET",
        params: arg,
      }),
      providesTags: ["booking"],
    }),

    refundConfirm: build.mutation({
      query: (data) => ({
        url: "/booking/refund-confirm",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["booking", "attractions"],
    }),

    refundCancel: build.mutation({
      query: (data) => ({
        url: "/booking/refund-cancel",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["booking", "attractions"],
    }),

    cancelAndRefund: build.mutation({
      query: (data) => ({
        url: "/booking/cancel-and-refund",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["booking", "attractions"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingListQuery,
  useGetUserBookingListQuery,
  useCancelBookingMutation,
  useRefundConfirmMutation,
  useRefundCancelMutation,
  useCancelAndRefundMutation,
} = bookingApi;
