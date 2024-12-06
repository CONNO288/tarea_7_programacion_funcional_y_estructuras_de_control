const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
  ];

  console.log(products)

  //Gestor de Inventario de una Tienda

  // 1. Filtrar Productos con Descuento: Usa filter para obtener un nuevo array con los productos que tienen un descuento aplicado (es decir, discount > 0).
  let productosConDescuento = products.filter(element => element.discount > 0);
  console.log(productosConDescuento)

  // 2. Calcular el Precio Final con Descuento: Usa map para calcular el precio final de los productos que tienen descuento y crea un nuevo array que incluya el priceAfterDiscount.
  let productosConPrecioFinalDcto= productosConDescuento.map(element => {
    let priceAfterDiscount = element.price -(element.price * element.discount/100);
    return { ...element, priceAfterDiscount};
    });
    console.log(productosConPrecioFinalDcto)

  // 3. Identificar Productos con Stock Bajo: Usa un bucle para identificar los productos con menos de 5 unidades en inventario y guárdalos en un array nuevo.
  //Opción con for:

  let productosConBajoStock_1 = [];
  for (let i = 0; i < products.length; i++) {
    if(products[i].stock < 5){
        productosConBajoStock_1.push(products[i])
    }      
  }
  console.log(productosConBajoStock_1)

  // Opción con while
  let productosConBajoStock_2 = [];
  i=0;

  while (i < products.length) {
    if (products[i].stock < 5) {
        productosConBajoStock_2.push(products[i]);
    }
    i=i+1;
  }
  console.log(productosConBajoStock_2)
 




    



