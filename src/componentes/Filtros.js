import React from "react";
import "./Filtros.css";

function Filtros(props) {
    return (
        <div className="filtercontainer">
            <button className="filter" onClick={() => props.all()} >ALL</button>
            <button className="filter" onClick={() => props.active()}>ACTIVE</button>
            <button className="filter" onClick={() => props.completed()}>COMPLETE</button>

        </div>
    )
}

export default Filtros 