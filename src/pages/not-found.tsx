import { Link, useRouteError } from 'react-router-dom';

interface ErrorResponse {
    data: string;
    internal: boolean;
    error: Error;
    status: number;
    statusText: string;
    message: string;
}

const NotFound = () => {
    const error = useRouteError() as ErrorResponse;

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">Home</Link>
        </div>
    );
};

export { NotFound };
