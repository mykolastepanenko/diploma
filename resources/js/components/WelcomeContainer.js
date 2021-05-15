import React from "react";

function WelcomeContainer() {
    return (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center welcome">
            <span className={"text-center"}>
                <h1 className={"text-uppercase display-4"}>
                    green garden shop
                </h1>
                <span className={"h2"}>we glad to see you</span>
            </span>
        </div>
    );
}

export default WelcomeContainer;
