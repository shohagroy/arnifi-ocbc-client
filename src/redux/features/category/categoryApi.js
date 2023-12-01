import { baseApi } from "../baseApi/apiSlice";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCategory: build.mutation({
      query: (data) => ({
        url: "/categories/create",
        method: "POST",
        data,
      }),
      invalidatesTags: ["categories"],
    }),

    getAllCategories: build.query({
      query: (arg) => ({
        url: "/categories",
        method: "GET",
        params: arg,
      }),
      providesTags: ["categories"],
    }),

    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["categories"],
    }),

    updateCategory: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/categories/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["categories"],
    }),

    getAllCategoryData: build.query({
      query: () => ({
        url: "/categories/get-all",
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetAllCategoriesQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
  useGetAllCategoryDataQuery,
} = categoryApi;
