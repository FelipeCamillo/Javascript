function verificacao() {
    var data = new Date()
    var atual = data.getFullYear()
    var ano = document.getElementById('txtano')
    var msg = document.querySelector('p#msg')
    if(ano.value.length == 0 || Number(ano.value) > atual) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = atual - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked) {
            var genero = 'homem'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menino.png')
            } else if(idade > 10 && idade < 18) { 
                img.setAttribute('src', 'adolescentemasc.png')
            } else if(idade >= 18 && idade <30) {
                img.setAttribute('src', 'jovemadulto.png')
            } else if(idade >= 30 && idade < 60) {
                img.setAttribute('src', 'adultomasc.png')
            }else if(idade >= 60 && idade <=120) {
                img.setAttribute('src', 'idoso.png')
            }
        } else if(sexo[1].checked){
            var genero = 'mulher'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menina.png')
            } else if(idade > 10 && idade < 18) { 
                img.setAttribute('src', 'adolescentefem.png')
            } else if(idade >= 18 && idade <30) {
                img.setAttribute('src', 'jovemadulta.png')
            } else if(idade >= 30 && idade < 60) {
                img.setAttribute('src', 'adultofem.png')
            }else if(idade >= 60 && idade <=120) {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}