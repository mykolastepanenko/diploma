import React from "react";

import Nav from "../components/Nav";

function Product(props) {
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
                            src="https://cdn2.flowwow.com/data/blog/1562599250_29351868.jpg"
                            alt=""
                        />
                    </div>
                    <div className={"col col-md-8"}>
                        <div className="d-flex justify-content-between">
                            <h1>Flowers</h1>
                            <h1>4.99$</h1>
                        </div>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Recusandae labore nam provident eos numquam
                            accusantium eligendi architecto, odio enim, vero a
                            amet, possimus cumque dignissimos unde sint!
                            Debitis, adipisci at.
                        </p>
                        <button type="button" className="btn btn-success">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
