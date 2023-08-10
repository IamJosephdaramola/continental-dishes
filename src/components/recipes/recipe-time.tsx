import { TfiAlarmClock } from 'react-icons/tfi';

const RecipeTime = ({ time }: { time: string }) => {
    return (
        <span className="flex items-center">
            <TfiAlarmClock className="mr-2 text-lg" /> <span>{time}</span>
        </span>
    );
};

export { RecipeTime };
