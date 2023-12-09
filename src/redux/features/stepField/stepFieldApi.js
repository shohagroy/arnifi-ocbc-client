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
  useDeleteStepFildMutation,
  useUpdateStepFildMutation,
} = stepFildApi;
