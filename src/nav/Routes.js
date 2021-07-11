import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CharacterList from "views/content/CharacterList";
// import CharacterDetail from "views/content/CharacterDetail";

const Routes = () => (
  <Switch>
    <Route path="/">
      <CharacterList />
    </Route>
    <Route path="/character/:characterId">{/* <CharacterDetail /> */}</Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
