import React from "react";
import ItemCard from "./ItemCard";

function ItemBlock(props) {
    return (
        <>
            <div className={"row"}>
                <div className="col">
                    <ItemCard img={props.img} />
                </div>
                <div className="col">
                    <ItemCard img={props.img} />
                </div>
                <div className="col">
                    <ItemCard img={props.img} />
                </div>
                <div className="col">
                    <ItemCard img={props.img} />
                </div>
            </div>
        </>
    );
}

export default ItemBlock;
