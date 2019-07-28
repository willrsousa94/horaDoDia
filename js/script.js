function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12){
        // BOM DIA
        img.src = 'img/fotomanha.PNG'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE!
        img.src = 'img/fototarde.PNG'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'img/fotonoite.PNG'
        document.body.style.background = '#515154'
    }
}
