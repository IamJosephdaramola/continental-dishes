const RecipeCardPlaceholder = () => {
    return (
        <div className="animate-pulse flex flex-col w-[19rem] h-[19rem]  bg-slate-100 rounded-lg shadow-md">
            <div className="w-full h-3/5 rounded-t-lg bg-slate-300"></div>
            <div className="p-4 h-2/5 flex flex-col">
                <div className="h-2 bg-slate-300 rounded"></div>
                <div className="h-2 bg-slate-300 rounded mt-5"></div>
                <div className="h-2 bg-slate-300 rounded mt-5"></div>
            </div>
        </div>
    );
};

export { RecipeCardPlaceholder };
