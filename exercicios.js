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

