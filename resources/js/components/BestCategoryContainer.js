import React from "react";
import ItemCategory from "./ItemCategory";
import Slider from "react-slick";

function BestCategoryContainer(props) {
    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className={"row"}>
                <div className="col">
                    <Slider {...settings}>
                        <ItemCategory category={props.categories[0]} />
                        <ItemCategory category={props.categories[1]} />
                        <ItemCategory category={props.categories[2]} />
                        <ItemCategory category={props.categories[3]} />
                        <ItemCategory category={props.categories[4]} />
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default BestCategoryContainer;
