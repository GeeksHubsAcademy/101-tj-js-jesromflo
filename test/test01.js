function clasificaElementos(index) {
    var arrayElementosConSigno = [0, 0, 0];//array que indica el numero de elementos, segun su signo, primera posicion positivos, segunda posicion negativos y tercera posicion iguales a 0
    index.forEach(elemento => {
        if (elemento > 0) {
            arrayElementosConSigno[0]++;
        } else if (elemento < 0) {
            arrayElementosConSigno[1]++;
        } else if (elemento == 0) {//añadimos este caso, para que no se cuente otro caso como array de letras
            arrayElementosConSigno[2]++;
        }
    });
    arrayElementosConSigno.forEach((elementos, pos) => {
        arrayElementosConSigno[pos] = parseFloat(elementos / index.length).toFixed(4);

    });
    return arrayElementosConSigno;
}
module.exports = clasificaElementos;
