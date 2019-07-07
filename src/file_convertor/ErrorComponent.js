import React from "react";

const ErrorComponent = ({ item }) => {
    return(
        <div className="ErrorComponent">
            Error: {item.error}
        </div>
    )
};

export default ErrorComponent;
