export function unirObjetos<T, U>(obj1: T, obj2: U): T & U {
  // return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = { nome: 'Paulo', sobrenome: 'Souza' };
const obj2 = { endereco: 'Av. Ali perto', bairro: 'Aquele depois do outro' };

console.log(unirObjetos(obj1, obj2));
