import React from "react";
import "./Item.css";


function Item(props) {




    return (
        
        props.tareasAux.map((tarea, key) => {
            return (
                <div className="itemcontainer" key={key}>
                    <label>
                        <input type="checkbox" checked={tarea.state} onChange={() => props.cambiarStatus(tarea.id)} />
                        {tarea.name}
                    </label>
                    <div className="contbutton">
                        <button className="edit" onClick={() => props.subirElemento(key)}>Editar</button>
                        <button className="delete" onClick={() => props.deleteitem(tarea.id)}>Delate</button>
                    </div>
                    


                </div>

            )

        })

    );
}

export default Item