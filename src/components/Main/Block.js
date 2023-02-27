import React from "react";
import line from "../../images/headerLine.svg";

function Block({ name, component: Component, ...props }) {
    return (
        <>
            <div className="block-header">{name}
                <img className="block-header__line" src={line} alt="Линия" />
            </div>
            <Component {...props} />
        </>
    )
}

export default Block;