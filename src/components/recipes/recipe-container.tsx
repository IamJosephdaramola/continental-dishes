import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { RecipeCard } from './recipe-card';
import type { Recipe } from '../../types';

const RecipeContainer = ({
    recipes,
    error,
}: {
    recipes?: Recipe[];
    error?: FetchBaseQueryError | SerializedError;
}) => {
    if (error) {
        return <h2 className="text-center">No Recipes Found </h2>;
    }
    return (
        <div className="flex flex-wrap gap-5 w-full justify-center lg:justify-start">
            {recipes?.map((recipe) => <RecipeCard key={recipe.id} {...recipe} />)}
        </div>
    );
};

export { RecipeContainer };
