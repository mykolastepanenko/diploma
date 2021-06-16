import React from "react";

export default function Cart(props) {
    const [state, setState] = React.useState(false);

    let summ = 0;
    props.cart.cart.forEach((item) => {
        summ += item.price;
    });

    return (
        <>
            <div
                className={"container"}
                style={{ paddingTop: "100px", minHeight: "calc(100vh - 70px)" }}
            >
                <h1>Корзина</h1>
                {props.cart.cart.length === 0 ? (
                    <div>Корзина пуста</div>
                ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        {props.cart.cart.map((item, index) => {
                            return (
                                <div key={index} className="mt-2">
                                    <span>{item.name}, </span>
                                    <span>{item.price} грн</span>
                                    <span
                                        className="ml-3"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            props.cart.delete(index);
                                            setState(!state);
                                        }}
                                    >
                                        &times;
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                )}
                {props.cart.cart.length !== 0 && <div className="text-center mt-2">Сума: {summ} грн</div>}
                {props.cart.cart.length > 0 && (
                    <div className="mt-2 d-flex justify-content-center">
                        <button type="button" className="btn btn-success">
                            Підтвердити замовлення
                        </button>
                        <button
                            type="button"
                            className="ml-3 btn btn-danger"
                            onClick={() => {
                                props.cart.clear();
                                setState(!state);
                            }}
                        >
                            Очистити корзину
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
