import React from "react";

function Register() {
    return (
        <>
            <div
                className="container"
                style={{ paddingTop: "100px", minHeight: "calc(100vh - 70px)" }}
            >
                <form
                    action="/register"
                    style={{
                        backgroundColor: "white",
                        textAlign: "center",
                        border: "2px black solid",
                        borderRadius: "10px",
                        padding: "20px 40px",
                    }}
                >
                    <input hidden type="text" name="_token" value={csrf_token} />
                    <h1>Реєстрація</h1>
                    <div
                        style={{
                            width: "100%",
                            maxWidth: "750px",
                            // backgroundColor: "red",
                            margin: "auto",
                        }}
                    >
                        <label className="">
                            <div className="row">
                                <div className="col-12 col-md">
                                    <span className="text-right">
                                        Електронна пошта:
                                    </span>
                                </div>
                                <div className="col-12 col-md">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                        </label>
                        <label className="">
                            <div className="row">
                                <div className="col-12 col-md">
                                    <span className="text-right">Ім'я:</span>
                                </div>
                                <div className="col-12 col-md">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Ім'я"
                                    />
                                </div>
                            </div>
                        </label>
                        <label className="">
                            <div className="row">
                                <div className="col-12 col-md">
                                    <span className="text-right">Пароль:</span>
                                </div>
                                <div className="col-12 col-md">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Пароль"
                                    />
                                </div>
                            </div>
                        </label>
                        <button type="submit" className="btn">
                            Зареєструватися
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;
