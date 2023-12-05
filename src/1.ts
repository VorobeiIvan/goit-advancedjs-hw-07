/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/
interface InterfaceStudent {
  name: string;
  age: number;
  grade: string;
}

class Student<T extends InterfaceStudent> {
  constructor(public data: T) {}
}

export {};