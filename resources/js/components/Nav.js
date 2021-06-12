import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm position-absolute w-100">
            <div className="container">
                <Link
                    className="navbar-brand text-uppercase text-white-hover"
                    to="/"
                >
                    green garden shop
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="{{ __('Toggle navigation') }}"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto"></ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {props.hasOwnProperty("user") ? (
                                <Link
                                    className="nav-link text-white-hover"
                                    to="/admin-panel"
                                >
                                    Адмін панель
                                </Link>
                            ) : null}
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-white-hover"
                                to="/cart"
                            >
                                Корзина
                            </Link>
                        </li>
                        <li className="nav-item">
                            {props.hasOwnProperty("user") ? (
                                <a className="nav-link text-white-hover">
                                    {props.user.name}
                                </a>
                            ) : (
                                <a
                                    className="nav-link text-white-hover"
                                    href="/login"
                                >
                                    Увійти
                                </a>
                            )}
                        </li>
                        <li className="nav-item">
                            {props.hasOwnProperty("user") ? (
                                <a
                                    className="nav-link text-white-hover"
                                    href="/logout"
                                >
                                    Вийти
                                </a>
                            ) : (
                                <a
                                    className="nav-link text-white-hover"
                                    href="/register"
                                >
                                    Реєстрація
                                </a>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
