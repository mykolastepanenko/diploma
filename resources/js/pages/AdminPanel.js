import React from "react";

export default function AdminPanel() {
    const app = document.getElementById("app");
    const users = JSON.parse(app.getAttribute("data-users"));
    const categories = JSON.parse(app.getAttribute("data-categories"));
    const products = JSON.parse(app.getAttribute("data-products"));

    console.log("users");
    console.log(users);

    console.log(categories);

    const [isCreateCategory, setIsCreateCategory] = React.useState(false);
    const [isCreateProduct, setIsCreateProduct] = React.useState(false);

    const [createCategoryName, setCreateCategoryName] = React.useState("");

    const [createProductName, setCreateProductName] = React.useState("");
    const [createProductPrice, setCreateProductPrice] = React.useState("");
    const [createProductCount, setCreateProductCount] = React.useState("");

    function submitHandler(e) {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.name);
        let form;
        switch (e.target.id) {
            case "form_category":
                form = document.getElementById(e.target.id);
                const formData = new FormData(form);
                formData.append("img", "null");
                for (let item of formData) {
                    console.log(item);
                }
                fetch("/addCategory", {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => {
                        console.log(response);
                        location.reload();
                    })
                    .catch((err) => console.log(err));
                break;
            default:
                alert("не нашел");
                break;
        }
    }

    function deleteHandler(target, index) {
        console.log(target);
        switch (target) {
            case "deleteCategory":
                const formData = new FormData();
                formData.append("_token", csrf_token);
                formData.append("id", index);
                fetch("/deleteCategory", {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => {
                        console.log(response);
                        location.reload();
                    })
                    .catch((err) => console.log(err));
                break;
        }
    }

    return (
        <>
            <div className="w-100 vh-100 d-flex justify-content-center align-items-center welcome">
                <h1>Панель адміністратора</h1>
            </div>
            <div className="container py-5">
                <h2 className="mb-3">Користувачі:</h2>

                <div className="row mb-2 text-center">
                    <div className="col-1 font-weight-bold">ID</div>
                    <div className="col font-weight-bold">Ім'я користувача</div>
                    <div className="col font-weight-bold">Email</div>
                    <div className="col font-weight-bold">isAdmin</div>
                </div>

                {users.map((item, index) => (
                    <div key={index}>
                        <div className="row mb-2 text-center">
                            <div className="col-1">{item.id}</div>
                            <div className="col">{item.name}</div>
                            <div className="col">{item.email}</div>
                            <div className="col">{item.isAdmin}</div>
                        </div>
                    </div>
                ))}

                <h2 className="mt-5 mb-3">Категорії:</h2>
                <div className="row mb-2 text-center">
                    <div className="col-1 font-weight-bold">ID</div>
                    <div className="col font-weight-bold">Назва</div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                {categories.map((item, index) => (
                    <div className="row mb-2 text-center" key={index}>
                        <div className="col-1">{item.id}</div>
                        <div className="col">{item.name}</div>
                        <div className="col">
                            <button className="btn btn-secondary">
                                Редагувати
                            </button>
                        </div>
                        <div className="col">
                            <button
                                className="btn btn-secondary"
                                id="deleteCategory"
                                onClick={(e) =>
                                    deleteHandler(e.target.id, item.id)
                                }
                            >
                                Видалити
                            </button>
                        </div>
                    </div>
                ))}
                {!isCreateCategory && (
                    <button
                        className="btn btn-secondary w-100 mt-3"
                        onClick={() => {
                            setIsCreateCategory(true);
                        }}
                    >
                        Створити новий
                    </button>
                )}

                {isCreateCategory && (
                    <>
                        <button
                            className="btn btn-secondary w-100 mt-3"
                            onClick={() => {
                                setIsCreateCategory(false);
                            }}
                        >
                            Закрити
                        </button>
                        <form
                            method="POST"
                            action="/addCategory"
                            // onSubmit={submitHandler}
                            id="form_category"
                            name="form_category"
                        >
                            <input
                                type="text"
                                name="_token"
                                hidden
                                value={csrf_token}
                            />
                            <input
                                type="text"
                                className="w-100 text-center py-2 px-3 mt-3"
                                placeholder="Назва категорії"
                                value={createCategoryName}
                                name="name"
                                onChange={(e) => {
                                    setCreateCategoryName(e.target.value);
                                }}
                            />
                            <button
                                className="btn btn-secondary w-100 mt-3"
                                type="submit"
                            >
                                Створити
                            </button>
                        </form>
                    </>
                )}

                <h2 className="mt-5 mb-3">Продукти:</h2>
                <div className="row mb-2 text-center text-white font-weight-bold py-3 bg-secondary">
                    <div className="col-1">ID</div>
                    <div className="col">Назва</div>
                    <div className="col">Ціна</div>
                    <div className="col">Кількість</div>
                    <div className="col">Редагувати</div>
                    <div className="col">Видалити</div>
                </div>
                {products.map((item, index) => (
                    <div
                        key={index}
                        className={
                            "row text-center py-3 align-items-center " +
                            (index % 2 === 1 && "bg-secondary text-white")
                        }
                    >
                        <div className="col-1">{item.id}</div>
                        <div className="col">{item.name}</div>
                        <div className="col">{item.price}</div>
                        <div className="col">{item.count}</div>
                        <div className="col">
                            <button
                                className={
                                    "btn " +
                                    (index % 2 === 0
                                        ? "btn-outline-secondary"
                                        : "btn-outline-light")
                                }
                            >
                                Редагувати
                            </button>
                        </div>
                        <div className="col">
                            <button
                                className={
                                    "btn " +
                                    (index % 2 === 0
                                        ? "btn-outline-secondary"
                                        : "btn-outline-light")
                                }
                            >
                                Видалити
                            </button>
                        </div>
                    </div>
                ))}

                {!isCreateProduct && (
                    <button
                        className="btn btn-secondary w-100 mt-3"
                        onClick={() => {
                            setIsCreateProduct(true);
                        }}
                    >
                        Створити новий
                    </button>
                )}

                {isCreateProduct && (
                    <>
                        <button
                            className="btn btn-secondary w-100 mt-3"
                            onClick={() => {
                                setIsCreateProduct(false);
                            }}
                        >
                            Закрити
                        </button>
                        <input
                            type="text"
                            className="w-100 text-center py-2 px-3 mt-3"
                            placeholder="Назва продукту"
                            value={createProductName}
                            onChange={(e) => {
                                setCreateProductName(e.target.value);
                            }}
                        />
                        <input
                            type="text"
                            className="w-100 text-center py-2 px-3 mt-3"
                            placeholder="Ціна продукту"
                            value={createProductPrice}
                            onChange={(e) => {
                                setCreateProductPrice(e.target.value);
                            }}
                        />
                        <input
                            type="text"
                            className="w-100 text-center py-2 px-3 mt-3"
                            placeholder="Кількість продукту"
                            value={createProductCount}
                            onChange={(e) => {
                                setCreateProductCount(e.target.value);
                            }}
                        />
                        <button
                            className="btn btn-secondary w-100 mt-3"
                            onClick={() => {
                                alert(`
                                ${createProductName}
                                ${createProductPrice}
                                ${createProductCount}
                                `);
                            }}
                        >
                            Створити
                        </button>
                    </>
                )}
            </div>
        </>
    );
}
