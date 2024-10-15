function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora(s)`
    if (hora >= 0 && hora < 12) {
        // Bom Dia
        img.scr = 'fotomanha.png'
        document.body.style.background = '#f1e2cb'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#f79b46'
    } else {
        //Boa Noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#001830'
    }
}