import { baseApi } from "../baseApi/apiSlice";

export const stepFildApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createStepFild: build.mutation({
      query: (data) => ({
        url: "/step-filds",
        method: "POST",
        data,
      }),
      invalidatesTags: ["step-filds"],
    }),

    // getAllCountries: build.query({
    //   query: (arg) => ({
    //     url: "/step-filds",
    //     method: "GET",
    //     params: arg,
    //   }),
    //   providesTags: ["step-filds"],
    // }),

    getStepFilds: build.query({
      query: () => ({
        url: "/step-filds/get-all",
        method: "GET",
      }),
      providesTags: ["step-filds"],
    }),

    deleteStepFild: build.mutation({
      query: (id) => ({
        url: `/step-filds/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["step-filds"],
    }),

    updateStepFild: build.mutation({
      query: ({ key, sl, ...data }) => ({
        url: `/step-filds/${key}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["step-filds"],
    }),
  }),
});

export const {
  useCreateStepFildMutation,
  useGetStepFildsQuery,
  useDeleteStepFildMutation,
  useUpdateStepFildMutation,
} = stepFildApi;
