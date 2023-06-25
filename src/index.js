import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import CartContext from './components/context';
import ScrollTop from './components/scrollTopComp'

ReactDOM.render(
  <BrowserRouter>
    <CartContext>
      <ScrollTop>
        <App />
      </ScrollTop>
    </CartContext>
  </BrowserRouter>,
  document.getElementById("root")
);
