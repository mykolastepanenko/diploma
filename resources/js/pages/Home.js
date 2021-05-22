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
                <section style={{ marginTop: "50px" }}>
                    <div className="row">
                        <div className="col">
                            <h2 className={"text-capitalize"}>best products</h2>
                        </div>
                    </div>
                    <BestProductsContainer
                        img={
                            "https://cdn2.flowwow.com/data/blog/1562599250_29351868.jpg"
                        }
                    />
                </section>
                <section>
                    <div className="row">
                        <div className="col">
                            <h2 className={"text-capitalize"}>categories</h2>
                        </div>
                    </div>
                    <BestCategoryContainer
                        categories={categories}
                        img={
                            "https://fruit-boutique.com.ua/content/images/16/600x600l80nn0/semena-lna-14836989027242.jpg"
                        }
                    />
                </section>
            </div>
        </>
    );
}

export default Home;
