import React from "react";
import WelcomeContainer from "../components/WelcomeContainer";
import BestProductsContainer from "../components/BestProductsContainer";
import BestCategoryContainer from "../components/BestCategoryContainer";
import Catalog from "../components/Catalog";

function Home(props) {
    const categories = JSON.parse(
        document.getElementById("app").getAttribute("data-categories")
    );
    const products = JSON.parse(
        document.getElementById("app").getAttribute("data-products")
    );
    const seeds = JSON.parse(
        document.getElementById("app").getAttribute("data-seeds")
    );
    const planes = JSON.parse(
        document.getElementById("app").getAttribute("data-planes")
    );
    const fertilizers = JSON.parse(
        document.getElementById("app").getAttribute("data-fertilizers")
    );
    const inventory = JSON.parse(
        document.getElementById("app").getAttribute("data-inventory")
    );
    const food = JSON.parse(
        document.getElementById("app").getAttribute("data-food")
    );

    console.log(products);
    console.log(categories);
    // for (let key in categories) {
    //     console.log(categories[key]);
    // }
    // for (let category of categories) {
    //     console.log(category);
    //     for (let key in category) {
    //         console.log(`${key}: ${category[key]}`);
    //     }
    // }
    return (
        <>
            <WelcomeContainer />
            <div className="container">
                <section>
                    <div className="row">
                        <div className="col">
                            <h2 className={"text-capitalize"}>
                                Найкращі продукти
                            </h2>
                        </div>
                    </div>
                    <BestProductsContainer
                        products={products}
                        img={
                            "https://cdn2.flowwow.com/data/blog/1562599250_29351868.jpg"
                        }
                    />
                </section>
                <section>
                    <div className="row">
                        <div className="col">
                            <h2 className={"text-capitalize"}>категорії</h2>
                        </div>
                    </div>
                    <BestCategoryContainer categories={categories} />
                </section>
            </div>

            <section className="bg-white">
                <div className="container">
                    <h2 className="text-capitalize py-5">Товар</h2>
                    <div className="container">
                        {/* <div className="catalog d-flex flex-wrap justify-content-between">
                            <Catalog item={seeds[0]} />
                            <Catalog item={seeds[1]} />
                            <Catalog item={seeds[2]} />
                            <Catalog item={seeds[3]} />
                            <Catalog item={seeds[4]} />
                            <Catalog item={seeds[0]} />
                            <Catalog item={seeds[1]} />
                            <Catalog item={seeds[2]} />
                            <Catalog item={seeds[3]} />
                            <Catalog item={seeds[4]} />
                            <Catalog item={seeds[0]} />
                            <Catalog item={seeds[1]} />
                            <Catalog item={seeds[2]} />
                            <Catalog item={seeds[3]} />
                            <Catalog item={seeds[4]} />
                            <Catalog item={seeds[0]} />
                            <Catalog item={seeds[1]} />
                            <Catalog item={seeds[2]} />
                            <Catalog item={seeds[3]} />
                            <Catalog item={seeds[4]} />
                        </div> */}

                        <div
                            id="carouselExampleFade"
                            className="carousel slide carousel-fade"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="catalog d-flex flex-wrap justify-content-between">
                                        <Catalog item={seeds[0]} />
                                        <Catalog item={seeds[1]} />
                                        <Catalog item={seeds[2]} />
                                        <Catalog item={seeds[3]} />
                                        <Catalog item={seeds[4]} />
                                        <Catalog item={seeds[0]} />
                                        <Catalog item={seeds[1]} />
                                        <Catalog item={seeds[2]} />
                                        <Catalog item={seeds[3]} />
                                        <Catalog item={seeds[4]} />
                                        <Catalog item={seeds[0]} />
                                        <Catalog item={seeds[1]} />
                                        <Catalog item={seeds[2]} />
                                        <Catalog item={seeds[3]} />
                                        <Catalog item={seeds[4]} />
                                        <Catalog item={seeds[0]} />
                                        <Catalog item={seeds[1]} />
                                        <Catalog item={seeds[2]} />
                                        <Catalog item={seeds[3]} />
                                        <Catalog item={seeds[4]} />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="catalog d-flex flex-wrap justify-content-between">
                                        <Catalog item={planes[0]} />
                                        <Catalog item={planes[1]} />
                                        <Catalog item={planes[2]} />
                                        <Catalog item={planes[3]} />
                                        <Catalog item={planes[4]} />
                                        <Catalog item={planes[0]} />
                                        <Catalog item={planes[1]} />
                                        <Catalog item={planes[2]} />
                                        <Catalog item={planes[3]} />
                                        <Catalog item={planes[4]} />
                                        <Catalog item={planes[0]} />
                                        <Catalog item={planes[1]} />
                                        <Catalog item={planes[2]} />
                                        <Catalog item={planes[3]} />
                                        <Catalog item={planes[4]} />
                                        <Catalog item={planes[0]} />
                                        <Catalog item={planes[1]} />
                                        <Catalog item={planes[2]} />
                                        <Catalog item={planes[3]} />
                                        <Catalog item={planes[4]} />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="catalog d-flex flex-wrap justify-content-between">
                                        <Catalog item={fertilizers[0]} />
                                        <Catalog item={fertilizers[1]} />
                                        <Catalog item={fertilizers[2]} />
                                        <Catalog item={fertilizers[3]} />
                                        <Catalog item={fertilizers[4]} />
                                        <Catalog item={fertilizers[0]} />
                                        <Catalog item={fertilizers[1]} />
                                        <Catalog item={fertilizers[2]} />
                                        <Catalog item={fertilizers[3]} />
                                        <Catalog item={fertilizers[4]} />
                                        <Catalog item={fertilizers[0]} />
                                        <Catalog item={fertilizers[1]} />
                                        <Catalog item={fertilizers[2]} />
                                        <Catalog item={fertilizers[3]} />
                                        <Catalog item={fertilizers[4]} />
                                        <Catalog item={fertilizers[0]} />
                                        <Catalog item={fertilizers[1]} />
                                        <Catalog item={fertilizers[2]} />
                                        <Catalog item={fertilizers[3]} />
                                        <Catalog item={fertilizers[4]} />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="catalog d-flex flex-wrap justify-content-between">
                                        <Catalog item={inventory[0]} />
                                        <Catalog item={inventory[1]} />
                                        <Catalog item={inventory[2]} />
                                        <Catalog item={inventory[3]} />
                                        <Catalog item={inventory[4]} />
                                        <Catalog item={inventory[0]} />
                                        <Catalog item={inventory[1]} />
                                        <Catalog item={inventory[2]} />
                                        <Catalog item={inventory[3]} />
                                        <Catalog item={inventory[4]} />
                                        <Catalog item={inventory[0]} />
                                        <Catalog item={inventory[1]} />
                                        <Catalog item={inventory[2]} />
                                        <Catalog item={inventory[3]} />
                                        <Catalog item={inventory[4]} />
                                        <Catalog item={inventory[0]} />
                                        <Catalog item={inventory[1]} />
                                        <Catalog item={inventory[2]} />
                                        <Catalog item={inventory[3]} />
                                        <Catalog item={inventory[4]} />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="catalog d-flex flex-wrap justify-content-between">
                                        <Catalog item={food[0]} />
                                        <Catalog item={food[1]} />
                                        <Catalog item={food[2]} />
                                        <Catalog item={food[3]} />
                                        <Catalog item={food[4]} />
                                        <Catalog item={food[0]} />
                                        <Catalog item={food[1]} />
                                        <Catalog item={food[2]} />
                                        <Catalog item={food[3]} />
                                        <Catalog item={food[4]} />
                                        <Catalog item={food[0]} />
                                        <Catalog item={food[1]} />
                                        <Catalog item={food[2]} />
                                        <Catalog item={food[3]} />
                                        <Catalog item={food[4]} />
                                        <Catalog item={food[0]} />
                                        <Catalog item={food[1]} />
                                        <Catalog item={food[2]} />
                                        <Catalog item={food[3]} />
                                        <Catalog item={food[4]} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <nav
                            aria-label="Page navigation example"
                            className="w-100 d-block mx-auto"
                        >
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="#carouselExampleFade"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <li
                                        data-target="#carouselExampleFade"
                                        data-slide-to="0"
                                        className="page-link"
                                    >
                                        1
                                    </li>
                                </li>
                                <li className="page-item">
                                    <li
                                        data-target="#carouselExampleFade"
                                        data-slide-to="1"
                                        className="page-link"
                                    >
                                        2
                                    </li>
                                </li>
                                <li className="page-item">
                                    <li
                                        data-target="#carouselExampleFade"
                                        data-slide-to="2"
                                        className="page-link"
                                    >
                                        3
                                    </li>
                                </li>
                                <li className="page-item">
                                    <li
                                        data-target="#carouselExampleFade"
                                        data-slide-to="3"
                                        className="page-link"
                                    >
                                        4
                                    </li>
                                </li>
                                <li className="page-item">
                                    <li
                                        data-target="#carouselExampleFade"
                                        data-slide-to="4"
                                        className="page-link"
                                    >
                                        5
                                    </li>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="#carouselExampleFade"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
