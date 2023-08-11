import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'isomorphic-dompurify';
import { IoIosArrowForward } from 'react-icons/io';
import { useGetRecipeQuery } from '../store';

const RecipeDetails = () => {
    const { id } = useParams();
    const { data } = useGetRecipeQuery(id ?? '');

    if (!data) {
        return (
            <div>
                no such recipe <Link to="/">Home</Link>
            </div>
        );
    }

    const {
        title,
        image,
        summary,
        sourceUrl,
        spoonacularSourceUrl,
        instructions,
        analyzedInstructions,
    } = data;
    const sanitizedSummary = DOMPurify.sanitize(summary);
    const sanitizedInstructions = DOMPurify.sanitize(instructions);

    const { steps } = analyzedInstructions[0];

    return (
        <section id="recipe-details" className="container mx-auto md:max-w-6xl p-10 md:px-0">
            <div className="flex flex-col sm:items-center sm:flex-row mb-8">
                <div className="flex items-center md:justify-center mb-4 sm:mb-0">
                    <Link to="/" className="hover:underline text-sm">
                        Recipes
                    </Link>
                    <IoIosArrowForward className="font-bold  text-xl go-to-icon" />
                </div>
                <h1 className="font-bold text-md sm:text-lg md:text-2xl">{title}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-slate-100 rounded-lg shadow-md flex items-center justify-center p-4">
                    <img src={image} alt={`${title} image`} className="rounded-lg w-full h-full" />
                </div>
                <div className="md:w-96">
                    <div className="bg-slate-100 rounded-lg shadow-md flex flex-col p-4 h-fit mb-4">
                        <h2 className="font-bold text-xl mb-2">Summary</h2>
                        <div
                            className="text-sm font-light cms-content"
                            dangerouslySetInnerHTML={{ __html: sanitizedSummary }}
                        />
                    </div>
                    <a
                        href={spoonacularSourceUrl}
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                        className=" bg-fuchsia-500 hover:bg-fuchsia-600 text-white transition linear duration-500 rounded-md w-full p-2 inline-block text-center"
                    >
                        View stats
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="">
                    <div className="bg-slate-100 rounded-lg shadow-md flex flex-col p-4 h-fit mb-4">
                        <h2 className="font-bold text-xl mb-2"> TL;DR Instructions</h2>
                        <div
                            className="text-sm font-light cms-content"
                            dangerouslySetInnerHTML={{ __html: sanitizedInstructions }}
                        />
                    </div>
                    <a
                        href={sourceUrl}
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                        className=" bg-fuchsia-500 hover:bg-fuchsia-600 text-white transition linear duration-500 rounded-md w-full p-2 inline-block text-center"
                    >
                        View source
                    </a>
                </div>
                <div className="md:w-96">
                    {steps.length > 0 && (
                        <div className="bg-slate-100 rounded-lg shadow-md flex flex-col p-4 h-fit mb-4">
                            <div className="flex gap-2 items-center mb-2">
                                <h2
                                    aria-label={`${title}'s step by step preparation. ${steps.length} steps`}
                                    className="font-bold text-xl "
                                >
                                    Step by step
                                </h2>
                                <small>({steps.length} steps)</small>
                            </div>
                            {steps.map((x) => (
                                <div key={x.number} className="text-sm font-light mb-2">
                                    <h3 className="font-bold mb-2">Step {x.number}</h3>
                                    <span className="inline-block">{x.step}</span>
                                    {x.step}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export { RecipeDetails };
