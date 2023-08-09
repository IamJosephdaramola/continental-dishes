interface Recipe {
    id: number;
    image: string;
    imageType: string;
    title: string;
}

interface ComplexSearch {
    results: Recipe[];
    offset: number;
    number: number;
    totalResults: number;
}

interface RecipeInformation extends Recipe {}

export type { ComplexSearch, RecipeInformation };
