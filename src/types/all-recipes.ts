interface Recipe {
    id: number;
    image: string;
    title: string;
    readyInMinutes: number;
}

interface ComplexSearch {
    results: Recipe[];
    offset: number;
    number: number;
    totalResults: number;
}

interface AnalyzedInstruction {
    name: string;
    steps: Array<{
        number: number;
        step: string;
    }>;
}

interface RecipeInformation extends Recipe {
    aggregateLikes: number;
    analyzedInstructions: AnalyzedInstruction[];
    instructions: string;
    sourceUrl: string;
    spoonacularSourceUrl: string;
    summary: string;
}

export type { ComplexSearch, RecipeInformation, Recipe };
