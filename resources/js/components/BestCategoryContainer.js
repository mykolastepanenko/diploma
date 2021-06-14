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
                        {props.categories.map((item, index) => (
                            <ItemCategory category={props.categories[index]} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default BestCategoryContainer;
