interface Veiculo {
  modelo: string;
  anoFabricação: number;
  quantidadePortas: number;
  marca: string;
}

interface Carro extends Veiculo {
  quantidadePortas: 2 | 3 | 4;
}

interface Moto extends Veiculo {
  rodas: 2;
}
