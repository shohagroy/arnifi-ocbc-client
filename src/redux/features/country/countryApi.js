import { baseApi } from "../baseApi/apiSlice";

export const countryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCountry: build.mutation({
      query: (data) => ({
        url: "/countries",
        method: "POST",
        data,
      }),
      invalidatesTags: ["countries"],
    }),

    getAllCountries: build.query({
      query: (arg) => ({
        url: "/countries",
        method: "GET",
        params: arg,
      }),
      providesTags: ["countries"],
    }),

    getAllCountryData: build.query({
      query: () => ({
        url: "/countries/get-all",
        method: "GET",
      }),
      providesTags: ["countries"],
    }),

    deleteCountry: build.mutation({
      query: (id) => ({
        url: `/countries/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["countries"],
    }),

    updateCountry: build.mutation({
      query: ({ key, sl, ...data }) => ({
        url: `/countries/${key}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["countries"],
    }),
  }),
});

export const {
  useCreateCountryMutation,
  useGetAllCountriesQuery,
  useDeleteCountryMutation,
  useUpdateCountryMutation,
  useGetAllCountryDataQuery,
} = countryApi;
