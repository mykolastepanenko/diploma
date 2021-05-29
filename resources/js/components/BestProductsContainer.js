import React from "react";
import ItemProduct from "./ItemProduct";
import Slider from "react-slick";
import ItemCategory from "./ItemCategory";

function BestProductsContainer(props) {
    const settings2 = {
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
                    <Slider {...settings2}>
                        <ItemProduct product={props.products[0]} img={props.img} />
                        <ItemProduct product={props.products[1]} img={props.img} />
                        <ItemProduct product={props.products[2]} img={props.img} />
                        <ItemProduct product={props.products[3]} img={props.img} />
                        <ItemProduct product={props.products[4]} img={props.img} />
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default BestProductsContainer;
