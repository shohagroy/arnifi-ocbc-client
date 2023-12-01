import { baseApi } from "../baseApi/apiSlice";

export const cityAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCity: build.mutation({
      query: (data) => ({
        url: "/cities/create",
        method: "POST",
        data,
      }),
      invalidatesTags: ["cities"],
    }),

    getAllCities: build.query({
      query: (arg) => ({
        url: "/cities",
        method: "GET",
        params: arg,
      }),
      providesTags: ["cities"],
    }),

    getAllCitiesData: build.query({
      query: (arg) => ({
        url: "/cities/get-all",
        method: "GET",
        params: arg,
      }),
      providesTags: ["cities"],
    }),

    deleteCity: build.mutation({
      query: (id) => ({
        url: `/cities/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cities"],
    }),

    updateCity: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/cities/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["cities"],
    }),
  }),
});

export const {
  useCreateCityMutation,
  useGetAllCitiesQuery,
  useDeleteCityMutation,
  useUpdateCityMutation,
  useGetAllCitiesDataQuery,
} = cityAPi;
