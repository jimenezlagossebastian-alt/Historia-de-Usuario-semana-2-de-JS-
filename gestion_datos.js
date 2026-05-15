/* TASK 1 */ 

const productos = [
    {
        id: 1,
        nombre: "Mouse",
        precio: 50000
    },
    {
        id: 2,
        nombre: "Teclado",
        precio: 80000
    },
    {
        id: 3,
        nombre: "Monitor",
        precio: 700000
    }
];


/* TASK 2 */

const numeros = new Set([1, 2, 2, 3, 4, 4, 5]);

console.log(numeros);

numeros.add(6);

console.log(numeros);

console.log(numeros.has(3));

numeros.delete(2);

console.log(numeros);

for (const numero of numeros) {
    console.log(numero);
}


/* TASK 3 */

const categorias = new Map();

categorias.set("Periférico", "Mouse");
categorias.set("Accesorio", "Teclado");
categorias.set("Pantalla", "Monitor");


/* TASK 4 */

for (const index in productos) {
    console.log(productos[index]);
}

console.log(Object.keys(productos[0]));

console.log(Object.values(productos[0]));

console.log(Object.entries(productos[0]));

for (const numero of numeros) {
    console.log(numero);
}

categorias.forEach((valor, clave) => {
    console.log(`Categoría: ${clave} -> Producto: ${valor}`);
});


/* TASK 5 */

productos.forEach(producto => {

    if (!producto.id) {
        console.log("ID inválido");
    }

    if (!producto.nombre) {
        console.log("Nombre inválido");
    }

    if (producto.precio <= 0) {
        console.log("Precio inválido");
    }

});

console.log(productos);

console.log(numeros);

console.log(categorias);
