function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   // hora =10
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora < 12){
        // BOM DIA
        msg.innerHTML +=`<br>Bom dia`
        img.src = 'fotomanha.png'
        document.body.style.background = '#c7beba'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#cb858c'
    }else{
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#03545e'
    }
}
