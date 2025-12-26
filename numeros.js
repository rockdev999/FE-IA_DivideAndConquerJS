const findMax = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    console.log(`Dividiendo: [${arr}]`);
    console.log(`  Izquierda: [${left}]`);
    console.log(`  Derecha: [${right}]`);
    
    const leftMax = findMax(left);
    const rightMax = findMax(right);
    
    console.log(`Comparando: ${leftMax} vs ${rightMax}`);
    
    const max = leftMax > rightMax ? leftMax : rightMax;
    console.log(`Maximo encontrado: ${max}`);
    
    return max;
};

const findMin = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    const leftMin = findMin(left);
    const rightMin = findMin(right);
    
    return leftMin < rightMin ? leftMin : rightMin;
};

const findMinMax = (arr) => {
    if (arr.length === 1) {
        return { min: arr[0], max: arr[0] };
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    const leftResult = findMinMax(left);
    const rightResult = findMinMax(right);
    
    const min = leftResult.min < rightResult.min ? leftResult.min : rightResult.min;
    const max = leftResult.max > rightResult.max ? leftResult.max : rightResult.max;
    
    return { min, max };
};

const sumArray = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    return sumArray(left) + sumArray(right);
};

const countElements = (arr) => {
    if (arr.length === 1) {
        return 1;
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    return countElements(left) + countElements(right);
};

export { 
    findMax, 
    findMin, 
    findMinMax, 
    sumArray, 
    countElements 
};