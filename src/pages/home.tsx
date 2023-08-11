import { Fragment, useState } from 'react';
import { useGetRecipesQuery } from '../store';
import { RecipeContainer, RecipePlaceholderContainer, SearchForm } from '../components';

const Home = () => {
    const [number, setNumber] = useState(20);
    const [query, setQuery] = useState('');
    const { data, isLoading, error } = useGetRecipesQuery({ query, number });

    return (
        <Fragment>
            <header className="flex flex-col justify-center items-center w-full h-40 md:h-60 bg-slate-100">
                <h1 className="text-bold text-2xl md:text-6xl mb-4 md:mb-8">
                    Continental Delicacies
                </h1>
                <SearchForm onSubmit={(value) => setQuery(value)} />
            </header>
            <main className="container mx-auto my-8 flex flex-col">
                <RecipeContainer recipes={data?.results} error={error} />
                {isLoading ? (
                    <RecipePlaceholderContainer />
                ) : (
                    <button
                        className="text-center mt-8 bg-fuchsia-500 hover:bg-fuchsia-600 text-white transition linear duration-500 rounded-md mx-auto p-2 disabled:pointer-events-none disabled:opacity-0"
                        disabled={!!error}
                        onClick={() => setNumber((prev) => prev + 20)}
                    >
                        Load more
                    </button>
                )}
            </main>
        </Fragment>
    );
};

export { Home };
