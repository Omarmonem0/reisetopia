import { useRouteError } from "react-router-dom";
import './Error.css';

const ErrorPage = () => {
  const error:any = useRouteError();
  return (
    <div id="errorPage">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;