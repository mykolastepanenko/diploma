import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const app = document.getElementById("app");

function FrontEnd() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/product">
                    <Product />
                </Route>
                <Route path="/">
                    <Home app={app} />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default FrontEnd;

if (document.getElementById("app")) {
    ReactDOM.render(<FrontEnd />, document.getElementById("app"));
}
