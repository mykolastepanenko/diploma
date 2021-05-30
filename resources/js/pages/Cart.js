import React from "react";

export default function Cart(props) {
    console.log(state);
    const [state, setState] = React.useState(false);
    console.log("\n\n\n\n");
    console.log(props);
    console.log(props.cart.cart);
    return (
        <>
            <div className={"container"} style={{ paddingTop: "100px", minHeight: 'calc(100vh - 70px)' }}>
                <h1>Корзина</h1>
                {props.cart.cart.length === 0 ? (
                    <div>Корзина пуста</div>
                ) : (
                    <ul>
                        {props.cart.cart.map((item, index) => {
                            return (
                                <li key={index}>
                                    {item.name}
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
                                </li>
                            );
                        })}
                    </ul>
                )}
                {props.cart.cart.length > 0 && (
                    <>
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
                    </>
                )}
            </div>
        </>
    );
}
