import { useState, type FormEvent } from 'react';
import { useGetRecipesQuery } from '../store';
import { RecipeCard } from '../components';

const Home = () => {
    const [number, setNumber] = useState(10);
    const [query, setQuery] = useState('');
    const { data, isLoading } = useGetRecipesQuery({ query, number });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // @ts-expect-error to resolve issue
        const formData = new FormData(event.target);
        const value = formData.get('search') as string;
        setQuery(value ?? '');
    };

    return (
        <div>
            <h1>Welcome to Spoon</h1>
            <form onSubmit={onSubmit}>
                <label>
                    <input type="text" name="search" placeholder="search for recipes" />
                </label>
                <button type="submit">submit</button>
            </form>
            <main className="container mx-auto">
                <div className="flex flex-wrap gap-5 w-full justify-center lg:justify-start">
                    {data?.results.map((recipe) => <RecipeCard key={recipe.id} {...recipe} />)}
                </div>
                {isLoading ? (
                    <span>loading...</span>
                ) : (
                    <button onClick={() => setNumber((prev) => prev + 10)}>Next</button>
                )}
            </main>
        </div>
    );
};

export { Home };
