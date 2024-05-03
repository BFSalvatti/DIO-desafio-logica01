

// Variáveis contendo os nomes dos heróis e suas respectivas experiências 
let heroes = ["Chapolin", "Chun-Li", "Terry Bogard", "Mega Man", "Piccolo", "Goku", "Wolverine", "Saitama"];
let expHeroes = [233, 1899, 3950, 5030, 7456, 8509, 9415, 996544999];



// Função para calcular a base de experiência dos heróis
function calculateExp(xp) {
  
  // Objeto que define o nível com base na experiência
  const levels = {
    Ferro: { min: 0, max: 1000 },
    Bronze: { min: 1001, max: 2000 },
    Prata: { min: 2001, max: 5000 },
    Ouro: { min: 5001, max: 7000 },
    Platina: { min: 7001, max: 8000 },
    Ascendente: { min: 8001, max: 9000 },
    Imortal: { min: 9001, max: 10000 },
    Radiante: { min: 10001, max: Infinity },
  };


  // Itera sobre os níveis e verifica em qual intervalo de experiência o valor se encaixa
  // Operadores, estrutura de decisão e laço de repetição(Loop)
  for (let lvl in levels) {
    if (xp >= levels[lvl].min && xp <= levels[lvl].max) {
      return lvl; 
    }
  }
}

for (let i = 0; i < heroes.length; i++) {
  let nome = heroes[i];
  let xp = expHeroes[i];
  let nivel = calculateExp(xp);


  // Imprime o resultado no console
  console.log(`O Herói de nome ${nome} está no nível ${nivel}`);
}