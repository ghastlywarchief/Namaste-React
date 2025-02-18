import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>Something is Wrong!!!</h2>
            <h3>{err}{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default Error;
