import React from "react";
import { Switch, Route } from "react-router-dom";

import ShelfContainer from './ShelfContainer';


export default (
  <Switch>
    <Route component={ ShelfContainer } path="/" exact />
    <Route component={ ShelfA } path="/ShelfA" />
    <Route component={ ShelfB } path="/ShelfB" />
  </Switch>
)
