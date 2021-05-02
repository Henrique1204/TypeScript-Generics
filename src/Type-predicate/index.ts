export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function somar<T>(...args: T[]): number {
  return args.reduce((soma, valor) => {
    if (isNumber(valor)) return soma + valor;

    return soma;
  }, 0);
}

console.log(somar(1, 2, 3, 4, 5));
console.log(somar<number | string>(1, 2, 3, 4, 5, '6'));
console.log(somar('1', '2', '3', '4', '5'));
