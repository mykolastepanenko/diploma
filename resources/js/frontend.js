import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const app = document.getElementById("app");
const categories = JSON.parse(app.getAttribute("data-categories"));
const products = JSON.parse(app.getAttribute("data-products"));

function FrontEnd() {
    const cart = {
        cart: [],
        add: function () {
            this.cart.push(product);
            console.log(cart);
        },
        delete: function (index) {
            this.cart.splice(index, 1);
        },
        clear: function () {
            cart.cart.splice(0, cart.cart.length);
            console.log("\n\n\ndeleted");
            console.log(cart.cart);
        },
    };

    function addToCart(product) {
        cart.cart.push(product);
        console.log(cart);
    }

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
                <Route path="/cart">
                    <Cart cart={cart} />
                </Route>
                <Route path="/product/:id">
                    <Product addToCart={addToCart} products={products} />
                </Route>
                <Route path="/category/:id">
                    <Category categories={categories} />
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
