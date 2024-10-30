function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var ini = Number(inicio.value)
        var f = Number(fim.value)
        var pas = Number(passo.value)
        if(pas <= 0) {
            alert('Passo inválido! Considerando passo 1')
            pas = 1
        }
        if(ini < f){
            // Contagem progressiva
            for(var c = ini; c <= f; c += pas) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // Contegem regressiva
            for(var c = ini; c >= f; c -= pas) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}