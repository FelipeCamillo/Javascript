let num = document.querySelector('input#num');
let lista = document.querySelector('select#lista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    };
};

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    };
};

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        item.value = `n${num.value}`;
        lista.appendChild(item);
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.');
    };
    num.value = '';
    num.focus();
};

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar.');
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos];
            };
            if (valores[pos] < menor) {
                menor = valores[pos];
            };
        };
        media = soma / tot;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    };
};

// Minha solução - funcionando

/*let valores = [];

function adicionar() {
    let numero = document.getElementById('num');
    if(numero.value.length == 0 || numero.value < 1 || numero.value > 100) {
        alert('Valor inválido ou já encontrado na lista.');
    } else {
        let num = Number(numero.value);
        let tab = document.getElementById('lista');
        res.innerHTML = '';
        if(valores.length == 0){
            tab.innerHTML = '';
        };
        if(valores.indexOf(num) == -1){
            valores.push(num);
            let item = document.createElement('option');
            item.text = `Valor ${num} adicionado.`;
            item.value = `val${num}`;
            tab.appendChild(item);
        } else {
            alert('Valor inválido ou já encontrado na lista.');
        };
    };
};

function finalizar() {
    let res = document.getElementById('res');
    const maiorValor = Math.max(...valores);
    const menorValor = Math.min(...valores);
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar.');
    } else {
        res.innerHTML += `Ao todo temos ${valores.length} números cadastrados. <br>`;
        res.innerHTML += `O maior valor informado foi ${maiorValor}. <br>`;
        res.innerHTML += `O menor valor informado foi ${menorValor}. <br>`;
        let soma = 0;
        for(let c = valores.length - 1; c >= 0; c--) {
            soma += valores[c];
        };
        res.innerHTML += `Somando todos os valores, temos ${soma}. <br>`;
        res.innerHTML += `A média dos valores digitados é ${soma/valores.length}.`;   
    };
};
*/