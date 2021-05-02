export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  public estaVazia(): boolean {
    return this.contador === 0;
  }

  public push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  public pop(): T | void {
    if (this.estaVazia()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];

    return elemento;
  }

  public tamanho(): number {
    return this.contador;
  }

  public mostrarPilha(): void {
    for (const elemento in this.elementos) {
      console.log(this.elementos[elemento]);
    }
  }
}

const pilha = new Pilha<number>();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);

const elementoRemovido = pilha.pop();
console.log(elementoRemovido);

pilha.mostrarPilha();
