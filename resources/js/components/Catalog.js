import React from "react";
import { Link } from "react-router-dom";

export default function Catalog(props) {
    return (
        <>
            <div
                    className="card mx-auto mb-3 grayscale"
                    style={{ width: "14rem" }}
                >
                    <img
                        src={props.item.img}
                        className="card-img-top"
                        style={{ width: "222px", height: "222px" }}
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">{props.item.name}</h5>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ullam quidem.
                        </p>
                        <Link
                            to={`/product/${props.item.id}`}
                            className="w-100 btn btn-primary stretched-link"
                        >
                            Детальніше
                        </Link>
                    </div>
                </div>
        </>
    );
}
