import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage()
{
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oopsie woopsie</h1>
            <p>An unexpected problem has occured.</p>
            {
                isRouteErrorResponse(error) ?
                (<p>{error.statusText || error.error?.message}</p>)
                :
                "Unknown error, our bad"
            }
            
        </div>
    )
}