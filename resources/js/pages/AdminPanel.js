import React from "react";

export default function AdminPanel() {
    const app = document.getElementById("app");
    const users = JSON.parse(app.getAttribute("data-users"));
    const categories = JSON.parse(app.getAttribute("data-categories"));
    const products = JSON.parse(app.getAttribute("data-products"));

    const [render, setRender] = React.useState(false);

    const [isCreateCategory, setIsCreateCategory] = React.useState(false);
    const [isCreateProduct, setIsCreateProduct] = React.useState(false);

    const [createCategoryName, setCreateCategoryName] = React.useState("");

    const [createProductName, setCreateProductName] = React.useState("");
    const [createProductPrice, setCreateProductPrice] = React.useState("");
    const [createProductCount, setCreateProductCount] = React.useState("");
    const [option, setOption] = React.useState("");
    const [createProductCategory, setCreateProductCategory] =
        React.useState("");

    const editCategoryValue = new Array(categories.length);
    editCategoryValue.fill(false);
    const [isEditCategory, setIsEditCategory] =
        React.useState(editCategoryValue);

        const editProductValue = new Array(products.length);
        editProductValue.fill(false);
    const [isEditProduct, setIsEditProduct] = React.useState(
        editProductValue
    );

    let categoryNameValue = new Array(categories.length);
    console.log("typeof categoryNameValue: ", typeof categoryNameValue);
    for (let i = 0; i < categories.length; i++) {
        categoryNameValue[i] = categories[i].name;
    }
    const [editCategoryName, setEditCategoryName] =
        React.useState(categoryNameValue);

        let productNameValue = new Array(products.length);
        for (let i = 0; i < products.length; i++) {
            productNameValue[i] = products[i].name;
        }
        let productPriceValue = new Array(products.length);
        for (let i = 0; i < products.length; i++) {
            productPriceValue[i] = products[i].price;
        }
        let productCountValue = new Array(products.length);
        for (let i = 0; i < products.length; i++) {
            productCountValue[i] = products[i].count;
        }
        const [editProductName, setEditProductName] =
            React.useState(productNameValue);
        const [editProductPrice, setEditProductPrice] =
            React.useState(productPriceValue);
        const [editProductCount, setEditProductCount] =
            React.useState(productCountValue);


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
                alert("???? ??????????");
                break;
        }
    }

    function updateHandler(target, index) {}

    function deleteHandler(target, index) {
        console.log(target);
        let formData;
        switch (target) {
            case "deleteCategory":
                formData = new FormData();
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
            case "deleteProduct":
                formData = new FormData();
                formData.append("_token", csrf_token);
                formData.append("id", index);
                fetch("/deleteProduct", {
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
                <h1>???????????? ????????????????????????????</h1>
            </div>
            <div className="container py-5">
                <h2 className="mb-3">??????????????????????:</h2>

                <div className="row mb-2 text-center">
                    <div className="col-1 font-weight-bold">ID</div>
                    <div className="col font-weight-bold">????'?? ??????????????????????</div>
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

                <h2 className="mt-5 mb-3">??????????????????:</h2>
                <div className="row mb-2 text-center">
                    <div className="col-1 font-weight-bold">ID</div>
                    <div className="col font-weight-bold">??????????</div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                {categories.map((item, index) => (
                    <div className="row mb-2 text-center" key={index}>
                        <div className="col-1">{item.id}</div>
                        <div className="col">
                            {isEditCategory[index] === false ? (
                                item.name
                            ) : (
                                <input
                                    type="text"
                                    value={editCategoryName[index]}
                                    onChange={(e) => {
                                        let arr = categoryNameValue;
                                        console.log("name", editCategoryName);
                                        console.log("arr: ", arr);
                                        arr[index] = e.target.value;
                                        setEditCategoryName(arr);
                                        setRender(!render);
                                    }}
                                />
                            )}
                        </div>
                        <div className="col">
                            {isEditCategory[index] === false ? (
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => {
                                        let arr = isEditCategory;
                                        arr[index] = !arr[index];
                                        setIsEditCategory(arr);
                                        setRender(!render);
                                    }}
                                >
                                    ????????????????????
                                </button>
                            ) : (
                                <button
                                    className="btn btn-success"
                                    onClick={() => {
                                        let arr = isEditCategory;
                                        arr[index] = !arr[index];
                                        setIsEditCategory(arr);
                                        setRender(!render);
                                        updateHandler(e.target.id, item.id);
                                    }}
                                >
                                    ????????????????
                                </button>
                            )}
                        </div>
                        <div className="col">
                            {isEditCategory[index] === false ? (
                                <button
                                    className="btn btn-secondary"
                                    id="deleteCategory"
                                    onClick={(e) =>
                                        deleteHandler(e.target.id, item.id)
                                    }
                                >
                                    ????????????????
                                </button>
                            ) : (
                                <button
                                    className="btn btn-danger"
                                    id="deleteCategory"
                                    onClick={(e) => {
                                        console.log("edit func");
                                        let arr = isEditCategory;
                                        arr[index] = !arr[index];
                                        setIsEditCategory(arr);
                                        setRender(!render);
                                    }}
                                >
                                    ??????????????
                                </button>
                            )}
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
                        ???????????????? ??????????
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
                            ??????????????
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
                                placeholder="?????????? ??????????????????"
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
                                ????????????????
                            </button>
                        </form>
                    </>
                )}

                <h2 className="mt-5 mb-3">????????????????:</h2>
                <div className="row mb-2 text-center text-white font-weight-bold py-3 bg-secondary">
                    <div className="col-1">ID</div>
                    <div className="col">??????????</div>
                    <div className="col">????????</div>
                    <div className="col">??????????????????</div>
                    <div className="col">??????????????????</div>
                    <div className="col">????????????????????</div>
                    <div className="col">????????????????</div>
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
                        <div className="col">
                            {isEditProduct[index] === false ? (
                                item.name
                            ) : (
                                <input
                                    className={"w-100"}
                                    type="text"
                                    value={editProductName[index]}
                                    onChange={(e) => {
                                        let arr = isEditProduct;
                                        arr[index] = e.target.value;
                                        setEditProductName(arr);
                                        setRender(!render);
                                    }}
                                />
                            )}
                        </div>
                        <div className="col">
                            {isEditProduct[index] === false ? (
                                item.price
                            ) : (
                                <input
                                    className={"w-100"}
                                    type="text"
                                    value={editProductPrice[index]}
                                    onChange={(e) => {
                                        let arr = isEditProduct;
                                        arr[index] = e.target.value;
                                        setEditProductPrice(arr);
                                        setRender(!render);
                                    }}
                                />
                            )}
                        </div>
                        <div className="col">
                            {isEditProduct[index] === false ? (
                                item.count
                            ) : (
                                <input
                                    className={"w-100"}
                                    type="text"
                                    value={editProductCount[index]}
                                    onChange={(e) => {
                                        let arr = isEditProduct;
                                        arr[index] = e.target.value;
                                        setEditProductCount(arr);
                                        setRender(!render);
                                    }}
                                />
                            )}
                        </div>
                        <div className="col">
                            {item.category}
                        </div>
                        <div className="col">
                            {isEditProduct[index] === false ? (
                                <button
                                    className={index % 2 === 0 ? "btn btn-outline-secondary" : "btn btn-outline-light"}
                                    onClick={() => {
                                        let arr = isEditProduct;
                                        arr[index] = !arr[index];
                                        setIsEditProduct(arr);
                                        setRender(!render);
                                    }}
                                >
                                    ????????????????????
                                </button>
                            ) : (
                                <button
                                    className="btn btn-success"
                                    onClick={() => {
                                        let arr = isEditProduct;
                                        arr[index] = !arr[index];
                                        setIsEditProduct(arr);
                                        setRender(!render);
                                        updateHandler(e.target.id, item.id);
                                    }}
                                >
                                    ????????????????
                                </button>
                            )}
                        </div>
                        <div className="col">
                            {isEditProduct[index] === false ? (
                                <button
                                    className={index % 2 === 0 ? "btn btn-outline-secondary" : "btn btn-outline-light"}
                                    id="deleteProduct"
                                    onClick={(e) =>
                                        deleteHandler(e.target.id, item.id)
                                    }
                                >
                                    ????????????????
                                </button>
                            ) : (
                                <button
                                    className="btn btn-danger"
                                    id="deleteProduct"
                                    onClick={(e) => {
                                        console.log("edit func");
                                        let arr = isEditProduct;
                                        arr[index] = !arr[index];
                                        setIsEditProduct(arr);
                                        setRender(!render);
                                    }}
                                >
                                    ??????????????
                                </button>
                            )}
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
                        ???????????????? ??????????
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
                            ??????????????
                        </button>
                        <form
                            action="/addProduct"
                            method="POST"
                            id="form_product"
                            name="form_product"
                        >
                            <input
                                type="text"
                                hidden
                                name="_token"
                                value={csrf_token}
                            />
                            <input
                                type="text"
                                name="name"
                                className="w-100 text-center py-2 px-3 mt-3"
                                placeholder="?????????? ????????????????"
                                value={createProductName}
                                onChange={(e) => {
                                    setCreateProductName(e.target.value);
                                }}
                            />
                            <input
                                type="text"
                                name="price"
                                className="w-100 text-center py-2 px-3 mt-3"
                                placeholder="???????? ????????????????"
                                value={createProductPrice}
                                onChange={(e) => {
                                    setCreateProductPrice(e.target.value);
                                }}
                            />
                            <input
                                type="text"
                                name="count"
                                className="w-100 text-center py-2 px-3 mt-3"
                                placeholder="?????????????????? ????????????????"
                                value={createProductCount}
                                onChange={(e) => {
                                    setCreateProductCount(e.target.value);
                                }}
                            />
                            {/* <input
                                type="text"
                                name="category"
                                className="w-100 text-center py-2 px-3 mt-3"
                                placeholder="?????????????????? ????????????????"
                                value={createProductCategory}
                                onChange={(e) => {
                                    setCreateProductCategory(e.target.value);
                                }}
                            /> */}

                            <select
                                name="category"
                                value={option}
                                onChange={(e) => {
                                    setOption(e.target.value);
                                }}
                            >
                                {categories.map((item) => (
                                    <option
                                        className="d-block w-100 mt-3"
                                        value={item.name}
                                    >
                                        {item.name}
                                    </option>
                                ))}
                            </select>

                            <button
                                className="btn btn-secondary w-100 mt-3"
                                type="submit"
                            >
                                ????????????????
                            </button>
                        </form>
                    </>
                )}
            </div>
        </>
    );
}
