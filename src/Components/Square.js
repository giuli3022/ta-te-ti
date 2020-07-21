import React from "react";
import "../Sass/square.scss";

const Square = ({ value, onClick }) => (
    <button className="square" onClick={onClick}>
        {value}
    </button>
);

export default Square;