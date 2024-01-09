function countingSort(arr) {
    // Encontrar o valor máximo no array
    // const max = Math.max(...arr); ---> pode ser usada a função Math.max ou um loop for
    let max = arr[0]
    for(i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }

    // Inicializar um array de contagem com base no valor máximo
    const countArray = new Array(max + 1).fill(0);

    // Contar a ocorrência de cada elemento no array
    arr.forEach((num) => {
        countArray[num]++;
    });

    // Reconstruir o array ordenado
    let sortedIndex = 0;
    countArray.forEach((count, num) => {
        while (count > 0) {
            arr[sortedIndex] = num;
            sortedIndex++;
            count--;
        }
    });

    return arr;
}

const array = [32, 12, 80, 3, 65, 1, 56];
const sortedArray = countingSort(array);

console.log(sortedArray);