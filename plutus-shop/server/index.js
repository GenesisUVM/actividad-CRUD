require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3306;
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const connectDB = require("./config/db");




//La primera ruta (/api/get) utiliza el método GET para obtener todos los datos de la tabla "productos" en la base de datos.
app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM productos";
  connectDB.query(sqlSelect, (err, result) => {
    res.json(result);
  });
});

//La segunda ruta (/api/insert) utiliza el método POST para insertar nuevos datos de productos necesitados en la base de datos.

app.post("/api/insert", (req, res) => {
  const Nombre = req.body.Nombre;
  const Descripción = req.body.Descripción;
  const Cantidad = req.body.Cantidad;
  const Precio = req.body.Precio;

  const sqlInser =
    "INSERT INTO productos (Nombre, Descripción, Cantidad, Precio) VALUES (?, ?, ?, ?)";
  connectDB.query(sqlInser, [Nombre, Descripción, Cantidad, Precio], (err, result) => {
    if(err) {
        console.log(err)
        } 
        console.log(result)
  });
});

//La tercera ruta (/api/delete/:id) utiliza el método DELETE para eliminar un producto específico de la base de datos según su ID.

app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;

  const sqlDelete = "DELETE FROM productos WHERE id = ?";
  connectDB.query(sqlDelete, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result)
  });
});

//La cuarta ruta (/api/update/:id) utiliza el método PUT para actualizar el producto ingresado ya en la base de datos según su ID.

app.put("/api/update/:id", (req, res) => {
  const id = req.params.id;
  const productos = req.body.productos;

  const sqlUpdate = "UPDATE productos SET productos = ? WHERE id = ?";

  connectDB.query(sqlUpdate, [productos, id], (err, result) => {
    if (err) {
        console.log(err);
      }
      console.log(result)
    });
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});

