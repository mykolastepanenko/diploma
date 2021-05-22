import React from "react";
import { Link } from "react-router-dom";

function ItemCategory(props) {
    return (
        <>
            <div
                className="card mx-auto mb-3 grayscale"
                style={{ width: "14rem" }}
            >
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                    <h5
                        className="card-title text-uppercase text-center mb-0"
                        style={{
                            lineHeight: 1.5,
                        }}
                    >
                        {props.category.name}
                    </h5>
                </div>
                <Link to={`/category/${props.category.id}`} className="stretched-link"></Link>
            </div>
        </>
    );
}

export default ItemCategory;
