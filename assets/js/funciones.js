var arreglo = [];
arreglo=localStorage.getItem("productos")!=null?JSON.parse(localStorage.getItem("productos")):[];
var user = localStorage.getItem("login");
document.getElementById('total').innerHTML = '$' + localStorage.getItem("total") !=null?localStorage.getItem("total"):0;
document.getElementById('user').innerHTML = user;
document.getElementById('totalD').innerHTML = '$' + localStorage.getItem("total")!=null?localStorage.getItem("total"):0;
function login() {
  var user = document.getElementById("username_input").value;
  var password = document.getElementById("password_input").value;
  localStorage.setItem("login", JSON.stringify(user));
};

function agregarP(nombre, precio,img) {
  console.log(precio);
  arreglo.push({ nombre: nombre, precio: precio,img:img });
  localStorage.setItem("productos", JSON.stringify(arreglo));
  let total = 0
  for (let i = 0; i < arreglo.length; i++) {
    total = total + Number(arreglo[i].precio);
  }
  console.log(total);
  localStorage.setItem("total", total);
  document.getElementById('total').innerHTML = '$' + localStorage.getItem("total");
};
function detalle() {
  var a='';
  var totalD=0;
  for (let i = 0; i < arreglo.length; i++) {
    a += "<li><div class='item_image'><img src='assets/images/"+ arreglo[i].img+
    "' alt='image_not_found'></div><div class='item_content'><h4 class='item_title'>"+arreglo[i].nombre+
    "</h4><span class='item_price'>"+arreglo[i].precio+"</span></div><button type='button' class='remove_btn' onclick='eliminarD("+arreglo[i].precio+")'><i class='fal fa-trash-alt'></i></button></li>"
    totalD = totalD + Number(arreglo[i].precio);
  }
  document.getElementById("container").innerHTML = a;
  document.getElementById('totalD').innerHTML = '$' + totalD;
  localStorage.setItem("total", totalD);
  document.getElementById('total').innerHTML = '$' + localStorage.getItem("total");
}

function eliminarD(id){
  const nuevoArreglo = arreglo.filter((item) => item.precio != id);
  arreglo=nuevoArreglo;
  localStorage.setItem("productos", JSON.stringify(arreglo));
  detalle();
  console.log(arreglo);
}
function pagar(){
  arreglo=[];
  localStorage.removeItem("productos");
  localStorage.removeItem("total");
  detalle();
  alert("Se pago los productos exitosamente!!!!");
}
function salir(){
  localStorage.clear();

}



