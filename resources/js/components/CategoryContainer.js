import React from "react";
import ItemCategory from "./ItemCategory";

function CategoryContainer(props) {
    return (
        <>
            <div className={"row"}>
                <div className="col">
                    <ItemCategory category={props.categories[0]} img={props.img} />
                </div>
                <div className="col">
                    <ItemCategory category={props.categories[1]} img={props.img} />
                </div>
                <div className="col">
                    <ItemCategory category={props.categories[2]} img={props.img} />
                </div>
                <div className="col">
                    <ItemCategory category={props.categories[3]} img={props.img} />
                </div>
            </div>
        </>
    );
}

export default CategoryContainer;
