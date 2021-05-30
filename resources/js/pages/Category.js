import React from "react";
import { useParams } from "react-router-dom";
import Catalog from "../components/Catalog";

export default function (props) {
    const category = props.categories[useParams().id - 1];
    const seeds = JSON.parse(app.getAttribute("data-seeds"));
    return (
        <>
            {/* <div
                className="container d-flex align-items-center"
                style={{ minHeight: "100vh" }}
            >
                <div className="row align-items-center">
                    <div className={"col col-md-4"}>
                        <img className={"w-100"} src={category.img} alt="" />
                    </div>
                    <div className={"col col-md-8"}>
                        <div className="d-flex justify-content-between">
                            <h1>{category.name}</h1>
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
            </div> */}

            <div className="container" style={{ paddingTop: "100px" }}>
                <h1>Категорія: {category.name}</h1>
                <div className="catalog d-flex flex-wrap justify-content-between">
                    {useParams().id === "1" && (
                        <>
                            <Catalog item={seeds[0]} />
                            <Catalog item={seeds[1]} />
                            <Catalog item={seeds[2]} />
                            <Catalog item={seeds[3]} />
                            <Catalog item={seeds[4]} />
                            <Catalog item={seeds[0]} />
                            <Catalog item={seeds[1]} />
                            <Catalog item={seeds[2]} />
                            <Catalog item={seeds[3]} />
                            <Catalog item={seeds[4]} />
                            <Catalog item={seeds[0]} />
                            <Catalog item={seeds[1]} />
                            <Catalog item={seeds[2]} />
                            <Catalog item={seeds[3]} />
                            <Catalog item={seeds[4]} />
                            <Catalog item={seeds[0]} />
                            <Catalog item={seeds[1]} />
                            <Catalog item={seeds[2]} />
                            <Catalog item={seeds[3]} />
                            <Catalog item={seeds[4]} />
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
