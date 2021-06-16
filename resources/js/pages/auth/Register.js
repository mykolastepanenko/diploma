import React from "react";

function Register() {
    function submitHandler(e) {
        e.preventDefault();
        let form = document.getElementById("form");
        let formData = new FormData(form);

        fetch("/register", {
            method: "POST",
            body: formData,
        }).then((result) => {
            if (result.ok) {
                location.href = "/login";
            }
        });
    }

    return (
        <>
            <div
                className="container d-flex justify-content-center align-items-center"
                style={{ minHeight: "calc(100vh - 70px)" }}
            >
                <form
                    id="form"
                    onSubmit={submitHandler}
                    className="d-flex justify-content-center align-items-center flex-column"
                    style={{ width: "100%", maxWidth: "450px" }}
                >
                    <h2>Регістрація</h2>
                    <input
                        type="text"
                        hidden
                        name="_token"
                        value={csrf_token}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Ваше ім'я"
                        className="w-100 mt-3 form-control"
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
                    <input
                        name="password_confirmation"
                        type="password"
                        placeholder="Підтвердіть пароль"
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

export default Register;
