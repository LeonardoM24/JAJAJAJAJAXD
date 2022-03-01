//funciones de javascript para mi pagina web :)

function validarForma(){
    let ben = new Audio('sonidos/ben.m4a');
    let no = new Audio('sonidos/no.m4a');
    let hohoho = new Audio('sonidos/hohoho.m4a');
    let yes = new Audio('sonidos/yes.m4a');

    let x = document.forms["formaXD"]["nombre1"].value;
    let y = document.forms["formaXD"]["comentario1"].value

    if(x == ""){
        alert("tienes que llenar tu nombre");
        no.play();
        return false;
    }
    else if(x == "ben"){
        ben.play();
        return false;
    }
    else if(y == "hohoho"){
        hohoho.play();
        return false;
    }
    else{
        yes.play();
        return false;
    }

}

function ugh(){
    let audio = new Audio('sonidos/ugh.m4a');
    audio.play();
}

function donDimaDom(){
    let audio = new Audio('sonidos/domDimaDom.m4a');
    audio.play();
}




