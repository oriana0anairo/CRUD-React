import { useEffect, useState } from 'react';
import './App.css';
import Add from "./componentes/Add"
import Item from "./componentes/Item"
import Filtros from "./componentes/Filtros";

function App() {

  const [tareas, setTarea] = useState([]);//Treas oroginales 
  const [bam, setbam] = useState(false);
  const [tareasAux, setTareasAux] = useState([]);//Auxiliar para manejar los estados 

  //UseFfec para controlar los filtros check  
  useEffect(() => {
    if (status === 0) {
      all();
    }
    if (status === 1) {
      active();
    }
    if (status === 2) {
      completed();
    }
  }, [tareas])
  //---------------------------------

  //...... Funcion para controlar el boton enviar 
  function change(data, setvacio) {
    if (bam === true) {//Cuando es true edita la tarea
      const random = Math.random() * (9999 - 1) + 1;
      const tareaEdit = {
        name: data,
        state: false,
        id: random
      }
      const help = tareas.map((ta) => {
        if (ta.id === key) {
          ta = tareaEdit;
        }
        return ta
      })
      setTarea(help)
      setTareasAux(help)
      setbam(false)
    } else {//....Cuando es false cambia la tarea
      const random = Math.random() * (9999 - 1) + 1;
      const tarea = {
        name: data,
        state: false,
        id: random
      }
      const newData = tareas;
      newData.push(tarea);
      setTarea([...newData]);
      setTareasAux(tareas);
    }
    setvacio(true);//controlar que el text area se quede vacio
  }

  //-----------------------------------------------------------
  const [key, setkey] = useState();//Estado donde guardo el valor del ID
  const [valorEditar, setValorEditar] = useState([]);
  function subirElemento(num) {// Con esta funcion subo el elemento al TexArea 
    setkey(tareas[num].id);//Guardo el ID del elemento seleccionado
    setbam(true);//Cambio la bandera para que entre en el if de editar cuando se oprima enviar 
    setValorEditar(tareas[num]);
  }
  //---------------------------------------------------------

  //Funcion para borrar los elementos 
  function deleteitem(num) {
    const aux = tareas.filter(ta => {
      return ta.id !== num;
    })
    setTareasAux(aux);
    setTarea(aux);
  }
  //---------------------------------

  //Funciones de filtros All Active Completed
  const [status, setstatus] = useState(0);
  function all() {
    setTareasAux(tareas);
    setstatus(0);
  }
  function active() {
    const activeTareas = tareas.filter(act => {
      return act.state === false;
    })
    setTareasAux(activeTareas);
    setstatus(1);
  }
  function completed() {
    const completeTareas = tareas.filter(com => {
      return com.state === true;
    })
    setTareasAux(completeTareas);
    setstatus(2);
  }
  //---------------------------------------

  //----------Funcion para cambiar el estatus de la tarea
  function cambiarStatus(num) {
    const latarea = tareas.find(ta => ta.id === num);
    if (latarea.state === false) {
      latarea.state = true;
    } else {
      latarea.state = false;
    }
    const newArray = tareas.map((ta, key) => {
      if (ta.id === latarea.id) {
        return latarea
      }
      return ta
    })
    setTarea(newArray);
    setTareasAux(newArray);
  }
  //--------------------------------------------


  return (
    <div className="App">
      <Add
        change={change}
        valorEditar={valorEditar}
      />

      <Filtros
        all={all}
        active={active}
        completed={completed}
      />

      <h2>{tareasAux.length} tasks remaining</h2>

      <Item
        tareasAux={tareasAux}
        deleteitem={deleteitem}
        subirElemento={subirElemento}
        cambiarStatus={cambiarStatus}
      />

    </div>
  );
}

export default App;
