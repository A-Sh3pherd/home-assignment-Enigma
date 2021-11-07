import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { ThemeProvider } from "@material-ui/core";
import { theme } from './theme.js'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <ThemeProvider theme={ theme }>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
