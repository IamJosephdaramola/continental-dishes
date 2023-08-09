import { Link, useParams } from 'react-router-dom';
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

    return (
        <div>
            <img src={data.image} alt="sss" />
            {data.title} recipe details
            <Link to="/">Home</Link>
        </div>
    );
};

export { RecipeDetails };
