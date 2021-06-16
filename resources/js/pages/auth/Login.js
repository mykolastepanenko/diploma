import React from "react";
import Nav from "../../components/Nav";

function Login() {
    return (
        <>
            <div
                className="container d-flex justify-content-center align-items-center"
                style={{ minHeight: "calc(100vh - 70px)" }}
            >
                <form
                    action="/login"
                    method="POST"
                    className="d-flex justify-content-center align-items-center flex-column"
                    style={{ width: "100%", maxWidth: "450px" }}
                >
                    <h2>Авторизація</h2>
                    <input
                        type="text"
                        hidden
                        name="_token"
                        value={csrf_token}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Елентронна пошта"
                        className="w-100 mt-3 form-control"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        className="w-100 mt-3 form-control"
                    />
                    <button
                        type="submit"
                        className="w-100 mt-3 btn btn-secondary"
                    >
                        Увійти
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;
