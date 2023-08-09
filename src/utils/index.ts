const convertTimeToHourAndMinutes = (readyInMinutes: number) => {
    const hour = Math.floor(readyInMinutes / 60);
    const minutes = readyInMinutes % 60;

    return { hour, minutes };
};

const getHourString = (hour: number) => {
    if (hour === 1) {
        return `${hour} hour`;
    }
    if (hour > 1) {
        return `${hour} hours`;
    }

    return '';
};

export { convertTimeToHourAndMinutes, getHourString };
