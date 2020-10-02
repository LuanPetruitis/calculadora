// o que foi mostrado na tela antes de escolher a operacao
var valorAntigoTela = "";
// o que está sendo mostrado na tela no momento 
var valorTela = "";
// a açao escolhida
var acaoEscolhida = "";

function botaoDigitoClick(event) {
    var digito = event.target.value;
    atualizaTela(`${valorTela}${digito}`);
}

function botaoAcaoClick(evento) {
    var acao = evento.target.value;
    rodarAcao(acao);
}


function atualizaTela(valor) {
    var tela = document.querySelector('#tela');
    valorTela = valor;
    tela.innerHTML = valorTela;
}

function rodarAcao(acao) {
    if (acao === "=") {
        var resultado;
        if (acaoEscolhida === "+") {

            resultado = parseFloat(valorAntigoTela) + parseFloat(valorTela);

        }
        if (acaoEscolhida === "-") {

            resultado = parseFloat(valorAntigoTela) - parseFloat(valorTela);

        }
        if (acaoEscolhida === "/") {
            resultado = parseFloat(valorAntigoTela) / parseFloat(valorTela);

        }
        if (acaoEscolhida === "x") {
            resultado = parseFloat(valorAntigoTela) * parseFloat(valorTela);
        }
        atualizaTela(resultado)
    } else if (acao === "%") {
        if (acaoEscolhida === "x") {
            resultado = parseFloat(valorAntigoTela) * (parseFloat(valorTela) / 100);
        }
        atualizaTela(resultado)
    } else {
        if (acao === "c") {
            location.reload();
        }
        valorAntigoTela = valorTela;
        var telaAntiga = document.getElementById('antigotela');
        telaAntiga.innerHTML = valorAntigoTela;
        atualizaTela("");
        acaoEscolhida = acao;

    }
}