import { baseApi } from "../baseApi/apiSlice";

export const explorePdfApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPdf: build.mutation({
      query: (data) => ({
        url: "/create-pdf",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useCreatePdfMutation } = explorePdfApi;
