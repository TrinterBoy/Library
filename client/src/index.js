import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import BookStore from "./store/BookStore";
import BasketStore from "./store/BasketStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
      user: new UserStore(),
      book: new BookStore(),
      basket: new BasketStore()
    }}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
);