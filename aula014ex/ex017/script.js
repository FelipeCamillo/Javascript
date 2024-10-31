function tabuada() {
    var numero = document.getElementById('numero')
    var tab = document.getElementById('res')
    if(numero.value.length == 0) {
        alert('ERRO! Informe um número para iniciar...')
    } else {
        var num = Number(numero.value)
        res.innerHTML = ''
        for(c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}