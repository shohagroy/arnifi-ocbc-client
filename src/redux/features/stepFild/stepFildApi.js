import { baseApi } from "../baseApi/apiSlice";

export const stepFildApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createStepFild: build.mutation({
      query: (data) => ({
        url: "/step-filds",
        method: "POST",
        data,
      }),
      invalidatesTags: ["step-filds", "form-step"],
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
      query: (search) => ({
        url: `/step-filds/get-all${search}`,
        method: "GET",
      }),
      providesTags: ["step-filds"],
    }),

    deleteStepFild: build.mutation({
      query: (id) => ({
        url: `/step-filds/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["step-filds", "form-step"],
    }),

    updateStepFild: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/step-filds/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["step-filds", "form-step"],
    }),
  }),
});

export const {
  useCreateStepFildMutation,
  useGetStepFildsQuery,
  useDeleteStepFildMutation,
  useUpdateStepFildMutation,
} = stepFildApi;
