let prodructos =[];
let subtotal = 0;
let totalIva = 0;
let total = 0;
function calculariva (precio) {
let ivaProducto = precio * 0.19;
totalIva = totalIva + IvaProducto
return ivaProducto;
}
function agregarProdructo (nombre, precio, descuentotipo){
    let precioDescuento;
    let descuento;
    let ivaProducto;
    if(descuentoTipo){
        switch (descuento){
            case 1 : 
            precioDescuento = precio - (precio * 0.10)
            break;
            case 2: 
            precioDEscuento = precio - (precio * 0.05)
             break;
            default:
                precioDescuento = precio - (precio * 0.3) 
                break
        }
    }
}
if (precioDescuento) {
    ivaProducto = calcularIva (precioDescuento);
    subtotal = subtotal + (precioDescuento - ivaProducto);
    total = total + preciodescuento;
} else {
  ivaProducto = calcularIva (precio)
  subtotal = total + precio;
}
const producto ={
    nombre: nombre,
    precio,
    precioFinal : precioDescuento ? precioDescuento : undefined, 
    valorIva: ivaProducto
};

let sumatotal;
let sumaIva;
sumaPrecioFinal;

for(let i = 0 ; i < prodructos; i++) {
    sumaTotal =productos [i]
}

