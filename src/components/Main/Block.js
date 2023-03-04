import React from "react";

function Block({ name, children, style }) {
    return (
        <div style={style}>
            <div className="block-header">{name}</div>
            {children}
        </div>
    )
}

export default Block;