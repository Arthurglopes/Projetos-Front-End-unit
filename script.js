const nome = document.querySelector('#nome')
const botao = document.querySelector('#botao')

function ativarNome() {
  console.log(nome.value)

}

botao.addEventListener('click', ativarNome)
    