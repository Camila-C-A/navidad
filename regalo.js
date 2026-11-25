let total = 0;

function agregarAlCarrito(nombre, precio) {
  total += precio;
  document.getElementById("total").value = "Bs. " + total;

  const li = document.createElement("li");
  li.textContent = nombre + " - Bs. " + precio;
  document.getElementById("lista-pedido").appendChild(li);
}

function reiniciarPedido() {
  total = 0;
  document.getElementById("total").value = "Bs. 0";
  document.getElementById("lista-pedido").innerHTML = "";
}