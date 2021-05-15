import React from "react";
import ItemCategory from "./ItemCategory";

function CategoryContainer(props) {
    return (
        <>
            <div className={"row"}>
                <div className="col">
                    <ItemCategory img={props.img} />
                </div>
                <div className="col">
                    <ItemCategory img={props.img} />
                </div>
                <div className="col">
                    <ItemCategory img={props.img} />
                </div>
                <div className="col">
                    <ItemCategory img={props.img} />
                </div>
            </div>
        </>
    );
}

export default CategoryContainer;
