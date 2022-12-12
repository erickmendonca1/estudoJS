/*function dividir(numero){
    console.log(numero)
    if (numero % 2 === 0){
        dividir(numero/2)
    }
    else{
        return numero
    }
}

dividir(1024)*/

/*
function fatorial(num){
  
    console.log(num)
    
    if (num>1){
        return num * fatorial(num-1)
    }
    else{
        return num
    }
}

console.log(fatorial(5))
*/

function fatorial1(num1){
    console.log("Numero: " + num1)
    if (num1===0){ //caso base
        return 1
    } else if (num1===1){
        return 1
    } else {
        console.log(num1 + "* !" + (num1-1))
        return num1 * fatorial1(num1 -1)
    }
}

console.log(fatorial1(5))