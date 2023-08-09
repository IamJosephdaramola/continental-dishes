import { useState, type FormEvent } from 'react';
import { useGetRecipesQuery } from '../store';
import { Link } from 'react-router-dom';

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
            <div>
                <div>
                    {data?.results.map((recipe) => (
                        <h2 key={recipe.id}>
                            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                        </h2>
                    ))}
                </div>
                {isLoading ? (
                    <span>loading...</span>
                ) : (
                    <button onClick={() => setNumber((prev) => prev + 10)}>Next</button>
                )}
            </div>
        </div>
    );
};

export { Home };
