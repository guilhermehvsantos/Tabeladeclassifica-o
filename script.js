//Numero da Tabela//
function calculaPartidas(jogadores) {
  var partidas = jogadores.vitorias + jogadores.empates + jogadores.derrotas;
  return partidas;
}

function calculaPontos(jogadores) {
  var pontos = jogadores.vitorias * 3 + jogadores.empates;
  return pontos;
}

function calculaAproveitamento(jogadores) {
  var aproveitamento =
    ((jogadores.vitorias + jogadores.empates / 3) / jogadores.partidas) * 100;
  return aproveitamento.toFixed(2);
}

var jogadores = [];

//Funções para exibição

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento += "<td>" + jogadores[i].partidas + "</td>";
    elemento += "<td>" + jogadores[i].aproveitamento + "</td>";
    elemento +=
      "<td><button class='v' onClick='adicionarVitoria(" +
      i +
      ")'>V</button></td>";
    elemento +=
      "<td><button class='e' onClick='adicionarEmpate(" +
      i +
      ")'>E</button></td>";
    elemento +=
      "<td><button class='d' onClick='adicionarDerrota(" +
      i +
      ")'>D</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

//Funções dos botões
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  jogador.partidas = calculaPartidas(jogador);
  jogador.aproveitamento = calculaAproveitamento(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  jogador.partidas = calculaPartidas(jogador);
  jogador.aproveitamento = calculaAproveitamento(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  jogador.partidas = calculaPartidas(jogador);
  jogador.aproveitamento = calculaAproveitamento(jogador);
  exibeJogadoresNaTela(jogadores);
}

//funcionalidades adicionais do Projeto
function adicionarJogador() {
  var nomeNovoJogador = document.getElementById("novo").value;
  var novoJogador = {
    nome: nomeNovoJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
    partidas: 0,
    aproveitamento: 0
  };

  jogadores.push(novoJogador);
  exibeJogadoresNaTela(jogadores);
  document.getElementById("novo").value = "";
}

function limpar() {
  jogadores = [];
  exibeJogadoresNaTela(jogadores);
}