import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import todoStore from "../../modules/TodoList/store";
import moviesStore from "../../modules/SearchMovies/store";

const stores = { todoStore, moviesStore };

export default function App({ children }) {
  const containerStyle = {
    marginTop: "60px"
  };
  return (
    <div>
      <Nav />
      <main role="main" className="main" style={containerStyle}>
        <Provider {...stores}>
          {children}
        </Provider>
      </main>
      <Footer />
    </div>
  );
}
