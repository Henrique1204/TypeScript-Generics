type ObterChaveFn = <O, K extends keyof O>(objetoc: O, chave: K) => O[K];

const ObterChave: ObterChaveFn = (objeto, chave) => {
  return objeto[chave];
};

const animal = {
  nome: 'Pipi',
  cor: 'marrom',
};

const nome = ObterChave(animal, 'nome');
console.log(nome);
