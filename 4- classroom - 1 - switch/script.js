let salesMonth = Math.floor((Math.random() * 12) + 1);
console.log(salesMonth);
let totalSales = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
console.log(totalSales);
let semestre;
let vendas;
switch (true) {
    case(salesMonth >= 10): semestre =  'quarto trimestre';
        // Bloco de código para valor1
        break;
    case(salesMonth >= 7): semestre =  'terceiro trimestre';
        // Bloco de código para valor1
        break;
    case(salesMonth >= 4): semestre =  'segundo trimestre';
        // Bloco de código para valor1
        break;
    case(salesMonth >= 1): semestre =  'primeiro trimestre';
        // Bloco de código para valor1
        break;
    // ...
    default:
        // Bloco de código caso nenhum valor seja correspondido
}
switch (true) {
    case(totalSales >= 7501): vendas =  'ruins';
        // Bloco de código para valor1
        break;
    case(totalSales >= 5001): vendas =  'mediocres';
        // Bloco de código para valor1
        break;
    case(totalSales >= 2501): vendas =  'altas';
        // Bloco de código para valor1
        break;
    case(totalSales >= 1000): vendas =  'arrasou viado';
        // Bloco de código para valor1
        break;
    default:
        // Bloco de código caso nenhum valor seja correspondido
}
console.log(`As vendas no ${semestre} foram ${vendas}`);

