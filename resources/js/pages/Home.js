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
                <section>
                    <h2 className="text-capitalize">Товар</h2>
                    <div className="container">
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
                </section>
            </div>
        </>
    );
}

export default Home;
