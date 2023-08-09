import { Link, useRouteError } from 'react-router-dom';

interface ErrorResponse {
    data: string;
    internal: boolean;
    error: Error;
    status: number;
    statusText: string;
    message: string;
}

const ErrorBoundary = () => {
    const error = useRouteError() as ErrorResponse;
    console.error(error);

    return (
        <div className="flex justify-center w-screen h-screen flex-col items-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.statusText || error?.message}</i>
            </p>
            <Link to="/">Home</Link>
        </div>
    );
};

export { ErrorBoundary };
