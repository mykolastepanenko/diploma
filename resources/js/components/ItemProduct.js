import React from "react";
import { Link } from "react-router-dom";

function ItemCard(props) {
    console.log(props);
    return (
        <div className="card mx-auto mb-3 grayscale" style={{ width: "14rem" }}>
            <img
                src={props.product.img}
                className="card-img-top"
                style={{maxWidth: '222px', maxHeight: '222px'}}
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{props.product.name}</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ullam quidem.
                </p>
                <Link
                    to={`/product/${props.product.id}`}
                    className="w-100 btn btn-primary stretched-link"
                >
                    Детальніше
                </Link>
            </div>
        </div>
    );
}

export default ItemCard;
