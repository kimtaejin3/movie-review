import { BrowserRouter, Switch, Route } from "react-router-dom";
import Movies from "./routes/Movies";
import Movie from "./routes/Movie";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:movieId">
          <Movie />
        </Route>
        <Route path="/">
          <Movies />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
