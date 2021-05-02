interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo = {
  nome: 'Paulo',
  sobrenome: 'Souza',
  idade: 19,
};

console.log(aluno);
