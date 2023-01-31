function ataqueForte() {
  if (Math.random() < 0.3) {
    return true;
  } else {
    return false;
  }
}

function ataqueFraco() {
  if (Math.random() < 0.5) {
    return true;
  } else {
    return false;
  }
}

function defesa() {
  if (Math.random() < 0.7) {
    return true;
  } else {
    return false;
  }
}

function tomarPocao() {
  return Math.floor(Math.random() * 11) + 5;
}

function dano() {
  return Math.floor(Math.random() * 6);
}

function danoCritico() {
  return Math.floor(Math.random() * 11) + 10;
}

function chanceCritico() {
  return Math.random() < 0.15;
}

var nomeJogador = prompt("Qual é o seu nome, gladiador?");
var vidaJogador = 20;
var pocaoJogador = 4;

console.log("Bem-vindo à arena, " + nomeJogador + ". Seu objetivo é sobreviver e sair vitorioso. Escolha suas ações com sabedoria.");

var gladiadores = Math.floor(Math.random() * 5) + 1;
var numeroGladiadores = 0;

while (gladiadores > 0) {
  numeroGladiadores++;
  console.clear();

  console.log("Gladiador " + numeroGladiadores + " se aproxima.");
  var vitalidade = Math.floor(Math.random() * 30) + 1;

  if (vitalidade < 10) {
    console.log("Ele parece fraco.");
  } else if (vitalidade < 20) {
    console.log("Ele parece forte.");
  } else {
    console.log("Ele parece monstruoso.");
  }

  var ganhou = false;

  while (!ganhou) {
    console.log("Saúde do oponente: " + vitalidade);
    console.log("======================================================");

    var escolhaGladiador = Math.floor(Math.random() * 3) + 1;
    if (escolhaGladiador === 1) {
      console.log("O gladiador se lança contra você com toda a sua força.");
    } else if (escolhaGladiador === 2) {
      console.log("O gladiador se lança contra você com um golpe rápido.");
    } else if (escolhaGladiador === 3) {
      console.log("O gladiador levanta o escudo para se defender.");
    }

    console.log("Sua saúde: " + vidaJogador);
    console.log("Poções disponíveis: " + pocaoJogador);
    console.log("1 - Ataque forte (30% de chance)\n2 - Ataque normal (50% de chance)\n3 - Defender (70% de chance)\n4 - Beber poção (recupera de 5 a 15 de saúde)");
    var escolhaJogador = Number(prompt("O que você vai fazer?"))
    if (escolhaJogador === 1) {
      if (ataqueForte()) {
        if (escolhaGladiador === 3) {
          var damage = dano();
          console.log("O oponente defende seu ataque, mas sofre " + damage / 2 + " de dano.");
          vitalidade -= damage / 2;
        } else {
          var damage = dano();
          if (chanceCritico()) {
            damage = danoCritico();
            console.log("Acerto crítico! Você causou " + damage + " de dano.");
          } else {
            console.log("Você acerta com força, causando " + damage * 2 + " de dano.");
            damage = damage * 2;
          }
          vitalidade -= damage;
        }
      } else {
        console.log("Você perdeu o seu ataque.");
      }
    } else if (escolhaJogador === 2) {
      if (ataqueFraco()) {
        var damage = dano();
        console.log("Você acerta, causando " + damage + " de dano.");
        vitalidade -= damage;
      } else {
        console.log("Você perdeu o seu ataque.");
      }
    } else if (escolhaJogador === 3) {
      if (defesa()) {
        console.log("Você defendeu com sucesso.");
      } else {
        var damage = dano();
        console.log("Você não conseguiu defender e sofreu " + damage + " de dano.");
        vidaJogador -= damage;
      }
    } else if (escolhaJogador === 4) {
      if (pocaoJogador > 0) {
        var healthGain = tomarPocao();
        console.log("Você recuperou " + healthGain + " de saúde.");
        vidaJogador += healthGain;
        pocaoJogador--;
      } else {
        console.log("Você não tem poções.");
      }
    }

    if (vidaJogador <= 0) {
      console.log("Você foi derrotado.");
      break;
    } else if (vitalidade <= 0) {
      console.log("Você venceu o gladiador.");
      ganhou = true;
      gladiadores--;
    }
  }
}
console.log("Parabéns, você sobreviveu e saiu vitorioso da arena!");