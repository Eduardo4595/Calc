let expressao = '';

function atualizarDisplay(valor) {
    document.getElementById('display').textContent = valor;
}

function adicionar(valor) {
    if (expressao === '' && valor.match(/[\+\-\*\/]/)) return;
    expressao += valor;
    atualizarDisplay(expressao);
}

function limpar() {
    expressao = '';
    atualizarDisplay('0');
}

function calcular() {
    try {
        const resultado = eval(expressao);
        atualizarDisplay(resultado ?? '0');
        expressao = resultado !== undefined ? resultado.toString() : '';
    } catch {
        atualizarDisplay('Erro!');
        expressao = '';
    }
}

function voltar() {
    expressao = expressao.slice(0, -1);
    atualizarDisplay(expressao || '0');
}