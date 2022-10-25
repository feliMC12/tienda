let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function() {
    let bs = document.getElementById("bs").value;
    let dol = document.getElementById("dol");
    dol.value = bs / 6.98;
});
btn2.addEventListener("click", function() {
    let bs = document.getElementById("bs");
    let dol = document.getElementById("dol").value;
    bs.value = dol / 0.14;
});
function mostrar() {
    var user = document.getElementById("user").value;
    var resultado = (user);
    document.getElementById('lbResultado').innerHTML = resultado;
    document.getElementById("user").value='';
}