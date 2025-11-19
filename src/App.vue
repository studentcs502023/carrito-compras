<script setup>
import { ref, watch } from 'vue'
import { computed } from 'vue'
const mostrar = ref(false)
import { onMounted } from 'vue'



const productos = ref([
  {
    id: 1,
    nombre: "Laptop Dell",
    precio: 899,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4aCZn0CFEQ_RhFyois7kdXlqnzyetD5JT4Q&s",
    mostrar: false,
    cantidad:0,
    total:0,
    subtotal:0,
  },
  {
    id: 2,
    nombre: "Mouse Logitech",
    precio: 25,
    imagen: "https://www.alkosto.com/medias/097855183453-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w4MzY0fGltYWdlL3dlYnB8YUdZd0wyaGxPQzh4TkRRM05ERTJNRGs1TmpNNE1pOHdPVGM0TlRVeE9ETTBOVE5mTURBeFh6YzFNRmQ0TnpVd1NBfDA0MTcyMjc3MDFjYTNhMTg0ZmYxZDMwMDVhOWI2ZGMwZjMzYjM1OTE4ZGM4NTRlOWU4ZjRiNGFiMGI3NTQ5NGY",
    mostrar: false,
    cantidad:0,
    total:0,
    subtotal:0,
  },
  {
    id: 3,
    nombre: "Teclado mecánico",
    precio: 89,
    imagen: "https://media.falabella.com/falabellaCO/128921005_01/w=1500,h=1500,fit=pad",
    mostrar: false,
    cantidad:0,
    total:0,
    subtotal:0,
  },
  {
    id: 4,
    nombre: "Webcan HD",
    precio: 59,
    imagen: "https://media.falabella.com/falabellaCO/119228400_01/w=800,h=800,fit=pad",
    mostrar: false,
    cantidad:0,
    total:0,
    subtotal:0,
  
  }
])

function activarProducto(producto) {
  // activar v-show
  producto.mostrar = !producto.mostrar

  // si se activó, agregar 1 unidad
  if (producto.mostrar) {
    producto.cantidad = 1
    producto.total = producto.precio
  } else {
    // si se oculta, volver a cero
    producto.cantidad = 0
    producto.total = 0
  }
}


function agregarAlCarrito(producto) {
  producto.cantidad++
  producto.total = producto.cantidad * producto.precio
}

function quitarAlCarrito(producto) {
  if (producto.cantidad > 0) {
    producto.cantidad--
    producto.total = producto.cantidad * producto.precio
  }
}
const totalProductos = computed(() =>
  productos.value.reduce((acumulador, p) => acumulador + p.cantidad, 0)
)
const subtotal = computed(()=>

productos.value.reduce((acumulador, p)=> acumulador + p.total, 0))




const valor = computed(() => subtotal.value * 0.16)

const totalapgar = computed(() => valor.value + subtotal.value)

watch(subtotal, (nuevo) => {
  localStorage.setItem("subtotal", nuevo)
})

// Guardar VALOR cuando cambie
watch(valor, (nuevo) => {
  localStorage.setItem("valor", nuevo)
})

onMounted(() => {
  const guardado = localStorage.getItem("productos")
  if (guardado) {
    productos.value = JSON.parse(guardado)
  }
})


watch(productos, (nuevo) => {
  localStorage.setItem("productos", JSON.stringify(nuevo))
}, { deep: true })

const letrero = ref()

watch(totalapgar, (nuevo) => {
  if (nuevo > 1000) {
    localStorage.setItem("totalapgar", nuevo)
    console.log("Total apgar supera 1000")
    letrero.value = "has superado los 1000usd, has obtenido un envío gratis"
  }else{
    letrero.value= ""
  }
})

</script>

<template>
  <div>
  <div>
  
    <div class="infocar">
      
      <h2><q-btn square color="blue" icon="shopping_cart" />carrito de compra</h2>
    </div>
<div class="contenedorpro">
  <div class="destacado">
    <q-chip v-if="totalapgar>1000" outline color="teal" text-color="white" icon="bookmark">
      {{ letrero }}
    </q-chip>
  </div>
  <div class="infopro">
    <h3>Productos Disponibles</h3>

    <!-- SOLO UN v-for -->
    <div
      class="p1"
      v-for="p in productos"
      :key="p.id"
    >
      <img class="size" :src="p.imagen" alt="imagen" style="width: 9vw; margin: 10px;" >

      <h4 style="font-weight: bold;">
        {{ p.nombre }}
        <br>
        <span style="color: greenyellow;">${{ p.precio }}</span>
      </h4>

      <div class="b1">

        <!-- ESTE BOTÓN ACTIVA Y AGREGA 1 UNIDAD -->
        <q-btn 
          color="secondary"
          text-color="black"
          style="border-radius: 20px;"
          label="Agregar al carrito"
          @click="activarProducto(p)"
         v-if="!p.mostrar"
        />

        <!-- BOTONES + y - -->
        <div class="divapa" v-show="p.mostrar">
          <q-btn
            square
            color="black"
            icon="add"
            @click="agregarAlCarrito(p)"
          />

          <q-btn
            square
            color="black"
            icon="remove"
            @click="quitarAlCarrito(p)"
          />
        </div>

        <!-- Mostrar cantidades -->
        <p >Cantidad: {{ p.cantidad }}</p>
        <p >Total: ${{ p.total }}</p>

      </div>
    </div>

  </div>
</div>

  </div>

<div class="resumen">
<div class="info">


<h2><i class="fa-solid fa-chart-simple"></i>Resumen carrito</h2>
<p>vacio</p>
</div>
<div class="contenedor-ventas">
  <table>
    <thead class="ventas">
      <tr>
        <th>Productos</th>
        <th>Valores Items</th>
      </tr>
    </thead>

    <tbody class="ventas1">
      <tr>
       <td>Total productos: </td>
       <td>{{ totalProductos }}</td>
      </tr>

      <tr>
        <td>Subtotal:</td>
        <td>{{ subtotal }}</td>
      </tr>

      <tr>
        <td>Impuesto:</td>
        <td>16%</td>
      </tr>

<tr>
        <td>Total a pagar:</td>
        <td>{{ totalapgar }}</td>
      </tr>
    </tbody>
  </table>
</div>


</div>

</div>

  
</template>

<style >

body{
background-color:greenyellow ;
}

.info{
  display: flex;
  flex-direction: column;
}

.infocar h2{
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase
}
.infopro h3{
  font-family: Arial, Helvetica, sans-serif;
}

.contenedorpro{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:goldenrod ;

}

.p1{
display: flex;
flex-direction: row;
width: 80%;
gap: 20px;
justify-content: center;
align-items: center;

}

.size{
  width: 30vw;
  height: auto;
}



.b1{
display: flex;
justify-content: center;
align-items: center;
margin-left: 150px;

}
.divapa{
  gap: 10px;
}
.b1 button{
background-color: bisque;
}

.p1 img{
  width: 30px;
  height: auto;
}

.ventas1 :nth-child(4) {
  text-decoration: underline  red;
  text-decoration-thickness: 6px;
}

</style>
