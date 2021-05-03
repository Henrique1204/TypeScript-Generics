// Define o tipo da chave e do valor.
export const objeto1: Record<string, string | number> = {
  nome: 'Paulo',
  sobrenome: 'Souza',
  idade: 30,
};

console.log(objeto1);

type Pessoa = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Transforma todos os campos em requeridos.
type PessoaRequired = Required<Pessoa>;
// Transforma todos os campos em opcional
type PessoaPartial = Partial<PessoaRequired>;
// Transforma tudo em readonly.
type PessoaReadonly = Readonly<PessoaPartial>;
// Filtra o tipo pelos valores que você quer.
type PessoaPick = Pick<Pessoa, 'nome' | 'sobrenome'>;

const objeto2: PessoaReadonly = {
  nome: 'Paulo',
  sobrenome: 'Souza',
  idade: 30,
};

console.log(objeto2);

// Extract e exclude.
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
// Exclui os valores que se repetem nos dois tipos.
type TipoExclude = Exclude<ABC, CDE>;
// Extrai os valores que estão nos dois tipos.
type TipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  nome: string;
  sobrenome: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: '0deidjej239-39e309e3i9',
  nome: 'Paulo',
  sobrenome: 'Souza',
  idade: 19,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { id: _id, ...accountData };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);
