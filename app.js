import { 
    findMax, 
    findMin, 
    findMinMax, 
    sumArray, 
    countElements 
} from './numeros.js';

const iniciarApp = () => {
    console.log("=== DIVIDE AND CONQUER - BÚSQUEDA DEL MÁXIMO ===");
    console.log("");
    
    const numbers = [3, 8, 2, 10, 5, 7];
    
    console.log("=== EJEMPLO 1: Buscar el máximo ===");
    console.log(`Arreglo: [${numbers}]`);
    console.log("");
    const max = findMax(numbers);
    console.log("");
    console.log(`Resultado final: El número máximo es ${max}`);
    console.log("");
    console.log("---------------------------");
    console.log("");
    
    console.log("=== EJEMPLO 2: Buscar el minimo ===");
    console.log(`Arreglo: [${numbers}]`);
    const min = findMin(numbers);
    console.log(`El numero minimo es: ${min}`);
    console.log("");
    
    console.log("=== EJEMPLO 3: Buscar minimo y maximo ===");
    const result = findMinMax(numbers);
    console.log(`Minimo: ${result.min}`);
    console.log(`Maximo: ${result.max}`);
    console.log("");
    
    const numbers2 = [-5, 12, -3, 8, -10, 15];
    console.log("=== EJEMPLO 4: Arreglo con negativos ===");
    console.log(`Arreglo: [${numbers2}]`);
    const max2 = findMax(numbers2);
    console.log(`El numero maximo es: ${max2}`);
    console.log("");
    
    console.log("=== EJEMPLO 5: Sumar elementos ===");
    console.log(`Arreglo: [${numbers}]`);
    const suma = sumArray(numbers);
    console.log(`La suma total es: ${suma}`);
    console.log("");
    
    console.log("=== EJEMPLO 6: Contar elementos ===");
    console.log(`Arreglo: [${numbers}]`);
    const count = countElements(numbers);
    console.log(`Total de elementos: ${count}`);
    console.log("");
    
    const numbers3 = [15, 3, 9, 22, 7, 11, 18, 5];
    console.log("=== EJEMPLO 7: Arreglo más grande ===");
    console.log(`Arreglo: [${numbers3}]`);
    const max3 = findMax(numbers3);
    console.log(`El numero maximo es: ${max3}`);
    console.log("");
    
    console.log("=== FIN DEL PROCESO ===");
};

iniciarApp();