import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import "./Add.css";

function Add(props) {

    const [Data, setData] = useState("");
    const [vacio, setvacio] = useState(false)//Controlar que text area se quede vacio

    //Atrapa el value del text area
    function handleChange(e) {
        setData(e.target.value);
    }

    //controlar que el text area se quede vacio
    useEffect(() => {
        setData("");
        setvacio(false);
    }, [vacio])
    ///____________________________________

    useEffect(() => {//Sube el valor al text area
        setData(props.valorEditar.name);//Se pinta el valor seleccionado en textarea
    }, [props.valorEditar])


    return (
        <div>
            <h1 className="question">What needs to be done?</h1>
            <div className="formlist">
                <textarea className="commentbox" value={Data} name="textarea" onChange={handleChange} rows="10" cols="50"></textarea>
                <button className="add" onClick={() => props.change(Data, setvacio)} >Add</button>
            </div>

        </div>
    )
}

export default Add