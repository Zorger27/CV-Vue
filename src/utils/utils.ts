export function shuffle(array: any[]): any[] {
// Это пользовательская функция, которая принимает массив элементов и возвращает тот же массив, но со случайным порядком элементов.
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
// Здесь используется алгоритм Фишера-Йетса для перемешивания элементов массива.
  return array;
}