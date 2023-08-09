import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ComplexSearch, RecipeInformation } from '../types';

interface Params {
    query: string;
    number: number;
    offset?: number;
}

const key: string = import.meta.env.VITE_API_KEY;

const recipeApi = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com/recipes' }),
    endpoints: (builder) => ({
        getRecipes: builder.query<ComplexSearch, Params>({
            query: ({ query, offset = 0, number }) => ({
                url: `complexSearch?query=${query}&offset=${offset}&number=${number}&addRecipeInformation=true&apiKey=${key}`,
            }),
        }),
        getRecipe: builder.query<RecipeInformation, string>({
            query: (id) => ({
                url: `${id}/information?apiKey=${key}`,
            }),
        }),
    }),
});

export const { useGetRecipesQuery, useGetRecipeQuery } = recipeApi;
export { recipeApi };
