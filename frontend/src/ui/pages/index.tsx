import { Helmet } from "react-helmet";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Posts</title>
      </Helmet>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
