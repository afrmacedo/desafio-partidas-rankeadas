let winBalance = matchStats(101, 0)
let level

function matchStats(win, loss) {
  result = win - loss
  return result
}

if (winBalance <= 10) {
  level = "Ferro"
} else if (winBalance > 10 && winBalance <= 20) {
  level = "Bronze"
} else if (winBalance > 20 && winBalance <= 50) {
  level = "Prata"
} else if (winBalance > 50 && winBalance <= 80) {
  level = "Ouro"
} else if (winBalance > 80 && winBalance <= 90) {
  level = "Diamante"
} else if (winBalance > 90 && winBalance <= 100) {
  level = "Lendário"
} else if (winBalance > 100) {
  level = "Imortal"
}

console.log(`O herói tem o saldo de ${winBalance} e está no nível ${level}`)