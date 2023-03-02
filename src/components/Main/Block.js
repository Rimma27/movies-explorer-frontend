import React from "react";
import line from "../../images/headerLine.svg";

function Block({ name, children, style }) {
    return (
        <div style={style}>
            <h2 className="block-header">{name}</h2>
            <img className="block-line" src={line} alt="Линия" />
            {children}
        </div>
    )
}

export default Block;