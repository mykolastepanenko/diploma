import React from "react";
import { useParams } from "react-router-dom";

function Product(props) {
    const product = props.products[useParams().id - 1];
    return (
        <>
            <div
                className="container d-flex align-items-center"
                style={{ minHeight: "100vh" }}
            >
                <div className="row align-items-center">
                    <div className={"col col-md-4"}>
                        <img
                            className={"w-100"}
                            src={product.img}
                            alt=""
                            style={{ width: "222px", height: "222px" }}
                        />
                    </div>
                    <div className={"col col-md-8"}>
                        <div className="d-flex justify-content-between">
                            <h1>{product.name}</h1>
                            <h1>{product.price ? product.price + " грн" : "500.00$"}</h1>
                        </div>
                        <h4>В наявності: {product.count}</h4>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Recusandae labore nam provident eos numquam
                            accusantium eligendi architecto, odio enim, vero a
                            amet, possimus cumque dignissimos unde sint!
                            Debitis, adipisci at.
                        </p>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                props.addToCart(product);
                            }}
                        >
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
