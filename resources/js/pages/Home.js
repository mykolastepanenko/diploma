import React from "react";
import WelcomeContainer from "../components/WelcomeContainer";
import BestProductsContainer from "../components/BestProductsContainer";
import BestCategoryContainer from "../components/BestCategoryContainer";

function Home(props) {
    const categories = JSON.parse(
        document.getElementById("app").getAttribute("data-categories")
    );
    console.log(categories);
    for (let key in categories) {
        console.log(categories[key]);
    }
    for (let category of categories) {
        console.log(category);
        for (let key in category) {
            console.log(`${key}: ${category[key]}`);
        }
    }
    return (
        <>
            <WelcomeContainer />
            <div className="container">
                <section>
                    <div className="row">
                        <div className="col">
                            <h2 className={"text-capitalize"}>Найкращі продукти</h2>
                        </div>
                    </div>
                    <BestProductsContainer
                        categories={categories}
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
        </>
    );
}

export default Home;
