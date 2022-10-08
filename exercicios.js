Exercico 1:

var comp1 = Number(prompt("Computador 1 está ligado? 1 - sim 0 - nao"))
var comp2 = Number(prompt("Computador 2 está ligado? 1 - sim 0 - nao"))
var comp3 = Number(prompt("Computador 3 está ligado? 1 - sim 0 - nao"))
var ligado = 0
var desligado = 0

if (comp1 == 1) {ligado = ligado + 1}
else (desligado = desligado + 1)

if (comp2 == 1) {ligado = ligado + 1}
else (desligado = desligado + 1)

if (comp3 == 1) {ligado = ligado + 1}
else (desligado = desligado + 1)

console.log(`${ligado} computadores estão ligados e ${desligado} computadores estão desligados`)


Exercicio 2: 

let comp1 = Number(prompt("computador 1 está ligado? 1 - sim 0 - nao"))
let comp2 = Number(prompt("computador 2 está ligado? 1 - sim 0 - nao"))
let comp3 = Number(prompt("computador 3 está ligado? 1 - sim 0 - nao"))
let salaA = 0
let salaB = 0


if (comp1 == 1){salaA++}
if (comp2 == 1) {salaA++}
if (comp3 == 1) {salaB++}

console.log(`Computadores ligados na sala A: ${salaA}. Computadores ligados na sala B: ${salaB}`)



