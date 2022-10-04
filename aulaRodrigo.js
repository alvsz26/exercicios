// Programa para gerar uma tabela de pontos em campeonatos de um esporte qualquer.
// será permitido a entrada de N times e o usuario deverá entrar com todos os resultados das partidas ida e volta
// ao final , usuario podera solicitar a tabela de pontos para uma rodada especifica

//ENTRADAS
//(teste de mesa)


let times = ['Figueirense', 'Avai', 'Chpecoense', 'Criciuma']
//para entendimento de indice e tamanho do vetor;
//impressão do valor da posição 4 (indice 3) : (indice é um indicador da posição)
//console.log(times[3])
//imprimindo o ultimo valor do vetor:
//console.log(times[times.length -1])


// número de times:
let nTimes = 4 //times.length

//Se o número de times é ímpar deve-se considerar 1 time
if(nTimes % 2 === 1) nTimes++

let nRodadas = (nTimes * 2) - 2


// calculo de partidas por rodada
let nPartidasPorRodada = nRodadas / 2

//Enum para possiveis resultados:
// 0: time da casa perde
// 1: empate
// 3: time da casa ganhou

// vetor para definir as partidas das N rodadas
// para cada rodada havera um sub-vetor:

let partidas = []

for (let iRodada = 0; iRodada < nRodadas; iRodada++) { 
  partidas.push([])
for (let iPartida = 0; iPartida < nPartidasPorRodada; iPartida++) { 
  partidas[iRodada] [iPartida] = 1 
}
//iRodada, iPartida, partidas[] []
//0, 0, 1
//0, 1, 1
//1, 0, 1
//1, 1, 1
//2, 0, 1
//2, 1, 1
//3, 0, 1
//3, 1, 1
//4, 0, 1
//4, 1, 1
//5, 0, 1
//5, 1, 1
}

//imprimir posições do ponteiro do relógio pequeno (horas) e grande (minutos)
let horarios = []
for (let iHoras = 0; iHoras < 12; iHoras++) {
  horarios.push([])
  for (let iMinutos = 0; iMinutos < 12; iMinutos++) {
horarios[iHoras].push(iMinutos)
  }
}

  console.log(horarios)


