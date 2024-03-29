import { baseApi } from "../baseApi/apiSlice";

export const formStepApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFormStep: build.mutation({
      query: (data) => ({
        url: "/form-step",
        method: "POST",
        data,
      }),
      invalidatesTags: ["form-step"],
    }),

    getAllFormSteps: build.query({
      query: (arg) => ({
        url: "/form-step",
        method: "GET",
        params: arg,
      }),
      providesTags: ["form-step"],
    }),

    getWillStepFilds: build.query({
      query: (params) => ({
        url: `/form-step${params}`,
        method: "GET",
      }),
      providesTags: ["form-step"],
    }),

    deleteFormStep: build.mutation({
      query: (id) => ({
        url: `/form-step/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["form-step"],
    }),

    updateFormStep: build.mutation({
      query: ({ key, sl, ...data }) => ({
        url: `/form-step/${key}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["form-step"],
    }),
  }),
});

export const {
  useCreateFormStepMutation,
  useGetAllFormStepsQuery,
  useDeleteFormStepMutation,
  useUpdateFormStepMutation,
  useGetWillStepFildsQuery,
} = formStepApi;
