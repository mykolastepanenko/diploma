import React from "react";

export default function Footer() {
    let date = new Date();

    return (
        <>
            <footer
                className="w-100 bg-dark text-white d-flex justify-content-center align-items-center"
                style={{ height: "75px" }}
            >
                Все права защищены. {date.getFullYear()} &copy;
            </footer>
        </>
    );
}
