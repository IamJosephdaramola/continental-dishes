import { RecipeCardPlaceholder } from './recipe-card-placeholder';

const length = 10;
const arr = new Array(length).fill(0);

const RecipePlaceholderContainer = () => {
    return (
        <div className="flex flex-wrap gap-5 w-full justify-center lg:justify-start">
            {arr.map((_, i) => (
                <RecipeCardPlaceholder key={i} />
            ))}
        </div>
    );
};

export { RecipePlaceholderContainer };
