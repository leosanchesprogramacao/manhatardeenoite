function carregar () {
    var mensagem = document.getElementById('mensagem')
    var imagem  = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
mensagem.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    // Bom dia
    imagem.src= 'fotomanha.png'
    document.body.style.background = '#a4511a'

} else if (hora>= 12 && hora <= 18) {
    //Boa Tarde
    imagem.src = 'fototarde.png'
    document.body.style.background = '#f9b13a'
} else {
    //Boa Noite
    imagem.src = 'fotonoite.png'
    document.body.style.background = '#182631'
}
}

