import React from "react";

export default function AdminPanel() {
    const app = document.getElementById("app");
    const users = JSON.parse(app.getAttribute("data-users"));
    const categories = JSON.parse(app.getAttribute("data-categories"));
    const products = JSON.parse(app.getAttribute("data-products"));

    console.log("users");
    console.log(users);

    console.log(categories);

    return (
        <>
            <div className="w-100 vh-100 d-flex justify-content-center align-items-center welcome">
                <h1>Admin Panel</h1>
            </div>
            <div className="container py-5">
                <h2 className="mb-3">Користувачі:</h2>

                <div className="row mb-2 text-center">
                    <div className="col font-weight-bold">Ім'я користувача</div>
                    <div className="col font-weight-bold">Email</div>
                    <div className="col font-weight-bold">isAdmin</div>
                </div>

                {users.map((item, index) => (
                    <div key={index}>
                        <div className="row mb-2 text-center">
                            <div className="col">{item.name}</div>
                            <div className="col">{item.email}</div>
                            <div className="col">{item.isAdmin}</div>
                        </div>
                    </div>
                ))}

                <h2 className="mt-5 mb-3">Категорії:</h2>
                <div className="row mb-2 text-center">
                    <div className="col font-weight-bold">Назва</div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                {categories.map((item, index) => (
                    <div className="row mb-2 text-center">
                        <div className="col">{item.name}</div>
                        <div className="col">
                            <button className="btn btn-secondary">
                                Редагувати
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-secondary">
                                Видалити
                            </button>
                        </div>
                    </div>
                ))}

                <h2 className="mt-5 mb-3">Продукти:</h2>
                <div className="row mb-2 text-center">
                    <div className="col font-weight-bold">Назва</div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                {products.map((item, index) => (
                    <div className="row mb-2 text-center">
                        <div className="col">{item.name}</div>
                        <div className="col">
                            <button className="btn btn-secondary">
                                Редагувати
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-secondary">
                                Видалити
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
