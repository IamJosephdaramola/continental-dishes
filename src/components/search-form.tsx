import { type FormEvent } from 'react';

const SearchForm = ({ onSubmit }: { onSubmit: (query: string) => void }) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // @ts-expect-error to resolve issue
        const formData = new FormData(event.target);
        const value = formData.get('search') as string;
        onSubmit(value ?? '');
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center md:items-center">
            <label className=" h-10 md:w-80 mb-4 md:mb-0 w-full">
                <input
                    type="text"
                    name="search"
                    placeholder="search for recipes"
                    className="w-full h-full px-2"
                />
            </label>
            <button
                type="submit"
                className="ml-5 rounded-md bg-fuchsia-500 hover:bg-fuchsia-600 p-2 h-10 w-20 text-sm  text-white transition linear duration-500"
            >
                Search
            </button>
        </form>
    );
};

export { SearchForm };
