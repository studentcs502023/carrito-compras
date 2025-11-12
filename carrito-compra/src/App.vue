<script setup>
import { ref, computed, onMounted } from 'vue'
import '@fortawesome/fontawesome-free/css/all.min.css'


</script>

<template>
  <div>
<div class="infocar">
<span><i class="fa-solid fa-cart-shopping"></i></span>
<h2>carrito de compra</h2>
</div>

<div class="infopro">
<h3>Productos Disponibles</h3>
<div class="p1">
<img src="" alt="imag">
<h4>laptop Dell <br>
<span>$8.99</span></h4>
<div class="b1">
  <!-- Botón principal del carrito -->
  <button class="btn-cart">
    <i class="fa-solid fa-cart-plus"></i>
  </button>
  <!-- Contenedor con los dos botones + y - -->
  <div class="mostrar">
    <button class="btn-mas">+</button>
    <button class="btn-menos">−</button>
  </div>
</div>

</div>

<div class="p1">
<img src="" alt="imag">
<h4>laptop Dell <br>
<span>$8.99</span></h4>
<div class="b1">
<button></button>
</div>

</div>

<div class="p1">
<img src="" alt="imag">
<h4>laptop Dell <br>
<span>$8.99</span></h4>
<div class="b1">
<button></button>
</div>

</div>

<div class="p1">
<img src="" alt="imag">
<h4>laptop Dell <br>
<span>$8.99</span></h4>
<div class="b1">
<button></button>
</div>

</div>

<div class="p1">
<img src="" alt="imag">
<h4>laptop Dell <br>
<span>$8.99</span></h4>
<div class="b1">
<button></button>
</div>

</div>


<div class="resumen">
<div class="info">

<span><i class="fa-solid fa-chart-simple"></i></span>
<h2>Resumen carrito</h2>
<p>vacio</p>
</div>
<div class="ventas">
  <table>
    <thead>
      <tr>
        <th>Productos</th>
        <th>Valores Items</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Total productos:</td>
        <td>vacio </td>
      </tr>

      <tr>
        <td>Subtotal:</td>
        <td>vacio</td>
      </tr>

      <tr>
        <td>Impuesto:</td>
        <td>vacio</td>
      </tr>

<tr>
        <td>Total a pagar:</td>
        <td>vacio</td>
      </tr>
    </tbody>
  </table>
</div>


</div>

</div>
  </div>
  
</template>

<style >
.size{
height: auto;
width: 10vw;
}
.p1{
display: flex;
flex-direction: row;
width: 100%;
gap: 20px;
justify-content: center;
align-items: center;
}
.b1{
display: flex;
justify-content: center;
align-items: center;
margin-left: 150px;

}

.b1 button{
background-color: bisque;
}

</style>
