

function acerca_de(){
    alert("creador: haloni29    " +
    "      si deseas contactar conmigo, da click a contactanos, para ver las maneras de contactar")
}
function contactanos(){
    alert("correo: holaMundo@gmail.com     numero de telefono:356254541              nombre de usuario: haloni29")
}

function cambiar_usuario(){
    usuario_old = document.getElementById("nombre").innerHTML
    usuario = prompt("pon un nuevo nombre a tu usuario")
    if(usuario.length == 0){
        alert("ERROR: no pusiste nombre de usuario")
        document.getElementById("nombre").innerHTML = usuario_old
    }
    else{
        document.getElementById("nombre").innerHTML = usuario 
    }
}

function crear_reseña(){
    const h3 = document.createElement("h3")
    const p = document.createElement("p")
    titulo = prompt("escribe el titulo")
    parrafo = prompt("escribe el parrafo")
    h3.appendChild(titulo)
    p.appendChild(parrafo)
    var div = document.getElementById("foros")
    document.body.insertBefore(h3, div)
    document.body.insertBefore(p, div)
}
function cambiar_descripcion(){
    defaultt = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus iste qui nobis distinctio dolores, unde vitae facilis cumque neque ullam quaerat sequi! Consequuntur ab maiores error voluptatem nam numquam illo?"
    descrip = prompt("pon la nueva descripcion")
    if(descrip.length == 0){
        document.getElementById("desc").innerHTML = defaultt
    }
    else{
        document.getElementById("desc").innerHTML = descrip
    }
}
