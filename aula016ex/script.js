let valores = []

function adicionar() {
    let numero = document.getElementById('num')
    if(numero.value.length == 0 || numero.value < 1 || numero.value > 100) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        let num = Number(numero.value)
        let tab = document.getElementById('lista')
        if(valores.length > 0){
            res.innerHTML = ''
        }
        if(valores.length == 0)
            tab.innerHTML = ''
        if(valores.indexOf(num) == -1){
            valores.push(num)
            let item = document.createElement('option')
            item.text = `Valor ${num} adicionado.`
            item.value = `val${num}`
            tab.appendChild(item)
        } else {
            alert('Valor inválido ou já encontrado na lista.')
        }
    }
}

function finalizar() {
    let res = document.getElementById('res')
    const maiorValor = Math.max(...valores)
    const menorValor = Math.min(...valores)
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        res.innerHTML += `Ao todo temos ${valores.length} números cadastrados. <br>`
        res.innerHTML += `O maior valor informado foi ${maiorValor}. <br>`
        res.innerHTML += `O menor valor informado foi ${menorValor}. <br>`
        let soma = 0
        for(let c = valores.length - 1; c >= 0; c--) {
            soma += valores[c]
        }
        res.innerHTML += `Somando todos os valores, temos ${soma}. <br>`
        res.innerHTML += `A média dos valores digitados é ${soma/valores.length}.`   
    }
}