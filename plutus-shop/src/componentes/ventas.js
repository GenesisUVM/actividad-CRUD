
const modal1 = document.querySelector("#modal1");
const btnAbrirModal1 = document.querySelector("#btn-abrir-modal1");
const btnCerrarModal1 = document.querySelector("#btn-cerrar-modal1");

const modal2 = document.querySelector("#modal2");
const btnAbrirModal2 = document.querySelector("#btn-abrir-modal2");
const btnCerrarModal2 = document.querySelector("#btn-cerrar-modal2");

const formAgregar = document.querySelector("#form-agregar");
const formActualizar = document.querySelector("#form-actualizar");

/* Abrir y cerrar el modal de formulario */
btnAbrirModal1.addEventListener("click", () => {
  modal1.showModal();
});
btnAbrirModal2.addEventListener("click", () => {
  modal2.showModal();
});

btnCerrarModal1.addEventListener("click", () => {
  modal1.close();
});
btnCerrarModal2.addEventListener("click", () => {
  modal2.close();
});

/* Guardar el formulario */
formAgregar.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos;
  const nombre = document.querySelector("#nombre").value;
  const precio = document.querySelector("#precio").value;
  const cantidad = document.querySelector("#cantidad").value;
  const descripcion = document.querySelector("#descripcion").value;
  datos = {nombre, precio, cantidad, descripcion};
  console.log(datos);
});

/*Actualizar el formulario*/
formActualizar.addEventListener("submit", (e) => {
  e.preventDefault();
  let datos;
  const nombre = document.querySelector("#nombre-act").value;
  const precio = document.querySelector("#precio-act").value;
  const cantidad = document.querySelector("#cantidad-act").value;
  const descripcion = document.querySelector("#descripcion-act").value;
  datos = {nombre, descripcion,cantidad, precio};
  console.log(datos);
});
function Ventas() {
  
  return (
    <div className="container">
      <section className="ventas">
        <h3>Ventas</h3>
        <div className="ventas-container">
          <img className="img-producto" alt="Imagen del producto" />
          <h4>Nombre</h4>
          <p>Descripcion</p>
          <p>Cantidad</p>
          <p>Precio</p>
          <button id="btn-abrir-modal2" >Editar</button>
          <button>Eliminar</button>
        </div>
        <button  id="btn-abrir-modal1">Agregar Producto</button>
     
      </section>
      <section className="modals">
        <dialog id="modal1">
          <form className="form" method="dialog" id="form-agregar">
            <label >Nombre<input type='text' id='name' name='name' required /></label>
            <label >Descripcion<input type='text' id='descripcio' name='descripcion' required /></label>
            <label >Cantidad<input type='number' id='cantidad' name='cantidad' required /></label>
            <label >Precio<input type='number' id='precio' name='precio' required /></label>
            <button id="btn-cerrar-modal1" class="boton3">Cerrar</button>
          </form>
        </dialog>
        <dialog id="modal2">
          <form className="form" method="dialog" id="form-actualizar">
            <label >Nombre<input type='text' id='name' name='name' required /></label>
            <label >Descripcion<input type='text' id='descripcio' name='descripcion' required /></label>
            <label >Cantidad<input type='number' id='cantidad' name='cantidad' required /></label>
            <label >Precio<input type='number' id='precio' name='precio' required /></label>
            <button id="btn-cerrar-modal2" class="boton3">Cerrar</button>
          </form>
        </dialog>
      </section>
    </div>
  );


}


export default Ventas;