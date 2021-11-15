import React, { useEffect, Suspense } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
const ImageList = React.lazy(() => import("./components/ImageList/ImageList"));
const GeneralForm = React.lazy(() => import("./components/Form/GeneralForm"));

const App = () => {
  useEffect(() => {}, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={ImageList} />
            <Route exact path="/generalform" component={GeneralForm} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
