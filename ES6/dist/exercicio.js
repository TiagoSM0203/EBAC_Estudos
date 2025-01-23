"use strict";

var notasAlunos = [{
  nome: 'Tiago',
  nota: 5.3
}, {
  nome: 'Duran',
  nota: 5.8
}, {
  nome: 'Gabriel',
  nota: 8.8
}, {
  nome: 'Estracero',
  nota: 10
}];
function filtrarAprovados(notasAlunos) {
  return notasAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = filtrarAprovados(notasAlunos);
console.log(aprovados);