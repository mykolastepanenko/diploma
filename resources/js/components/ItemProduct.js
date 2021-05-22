import React from "react";
import { Link } from "react-router-dom";

function ItemCard(props) {
    return (
        <div className="card mx-auto mb-3 grayscale" style={{ width: "14rem" }}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Название карточки</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
                <Link
                    to="/product"
                    className="w-100 btn btn-primary stretched-link"
                >
                    Подробнее
                </Link>
            </div>
        </div>
    );
}

export default ItemCard;
