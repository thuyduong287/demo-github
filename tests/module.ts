function sumThreeNumber(a: number, b: number, c: number): number{
    return a+b+c;
}

function multiplyNumber(a: number, b: number): number{
    return a * b;
}

//Tính tổng các số chẵn trong mảng
function sumEven(numbers: number[]): number{
    let sum: number = 0;
    for (let number of numbers) {
        if (number % 2 === 0) {
            sum += number
        }
    }
    return sum
}

export{
    sumThreeNumber,
    multiplyNumber,
    sumEven
}