const arr = [
    "1° Nivel",
    ["2° Nivel","24",45],
    [
        ["3° Nivel","24",45],
        ["3° Nivel","84",90],
    ]
]

console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[2][1])
console.log(arr[2][1][2])


const matriz = [
    [1,3,4,6,8,9],
    [3,1,6,9,4,1],
    [4,1,5,7,1,5],
]

for (let i=0 ; i<matriz.length; i++)
{ 
    for (let j=0; j<matriz[i].length; j++)
    {
        const element = matriz[i][j]
        console.log("Posição: " + "L" + i + " C" + j + " = " +element )
    }   
}


