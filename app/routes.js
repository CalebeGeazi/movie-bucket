import React from 'react';
import { Route, IndexRoute } from 'react-router';

import TodoList from "./modules/TodoList";
import SearchMovies from "./modules/SearchMovies";
import MovieInfo from "./modules/SearchMovies/components/movieInfo";
import Layout from "./shared/layout";

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={SearchMovies} />
    <Route path="todo-list" component={TodoList} />
  </Route>
);
