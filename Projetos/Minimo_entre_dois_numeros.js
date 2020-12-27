// Este mini-projeto é a criação de uma função que usa dois números e retorna o menor.

let valorMenor = minimo(15,18);
console.log(valorMenor);

function minimo(numero1, numero2) {
    if(numero1 < numero2)
        return numero1;
    else return numero2;    
    
}