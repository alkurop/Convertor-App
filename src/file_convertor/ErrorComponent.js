import React from "react";

const ErrorComponent = ({ item }) => {
    return(
        <div className="ErrorComponent">
            Error: {item.error.message}, {item.error.status}
        </div>
    )
};

export default ErrorComponent;
