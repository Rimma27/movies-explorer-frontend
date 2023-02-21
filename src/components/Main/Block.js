import React from "react";

function Block({name, component: Component, ...props}) {
return(
    <>
    <header className="block-header">{name}</header>
    <body className="block-body">
    <Component {...props} />
    </body>
    </>
)
}

export default Block;