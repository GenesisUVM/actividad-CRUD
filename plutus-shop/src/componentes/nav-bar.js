import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
      <div className="nav-bar">
        <header>
          <img src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras-by-vexels.png" alt="logo" />
          <h2>Plutus Shop</h2>
          <menu>
            <NavLink to='/compras'>Compras</NavLink>
            <NavLink to='/ventas'>Ventas</NavLink>
          </menu>
        </header>
       
      </div>
    );
  }
  
  export default NavBar;
  