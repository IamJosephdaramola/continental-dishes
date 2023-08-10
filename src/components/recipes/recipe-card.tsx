import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { RecipeTime } from './recipe-time';
import { convertTimeToHourAndMinutes, getHourString } from '../../utils';
import type { Recipe } from '../../types';

const RecipeCard = ({ id, title, image, readyInMinutes }: Recipe) => {
    const { hour, minutes } = convertTimeToHourAndMinutes(readyInMinutes);

    const hourString = getHourString(hour);

    const ariaLabel = `${title}. Ready in ${hourString} ${minutes} minutes.`;

    return (
        <Link
            to={`/recipes/${id}`}
            className="flex flex-col w-[19rem] h-[19rem]  bg-slate-100 rounded-lg shadow-md text-sm recipe-card"
            aria-label={ariaLabel}
        >
            <img
                className="w-full h-3/5 rounded-t-lg object-cover"
                src={image}
                alt={`${title} image`}
            />
            <div className="p-4 h-2/5 flex flex-col">
                <h2 aria-label={ariaLabel} className="font-bold">
                    {title}
                </h2>
                <div className="mt-auto flex items-center justify-between">
                    <RecipeTime time={`${hourString} ${minutes} minutes`} />
                    <IoIosArrowForward className="font-bold  text-xl go-to-icon" />
                </div>
            </div>
        </Link>
    );
};

export { RecipeCard };
