var imgs = ["banda.jpg", "banda2.jpg", "banda3.jpg"];

var juevesCanciones = ["Mario Neta", "Punta Cana", "Anónimo", "Hombre Con Alas", "Tiburones en el Bosque", "Que Empiece el Juego", "Llegó Papá",
"Contrapunto para Humano y Computadora", "Fallaste Nostradamus"];
var apozombieCanciones = ["Apocalipsis Zombie", "Invisible", "El Innombrable", "Calma Vladimir", "Gaucho Power", "Mirada de Nylon", "Hola Karma", "La Bestia", "Nombres",
"El Rey y el As"];
var hablatuespejoCanciones = ["Cómo Pasa el Tiempo", "El Aprendiz", "No Lllora", "De Hielo", "Roberto", "21 de Septiembre", "Whisky en Uruguay", "Habla Tu Espejo",
"Caminamos", "Un Problema Menos"];
var porfiadoCanciones = ["Algo Mejor Que Hacer", "Cuando Sea Grande", "Solo Estoy Sobreviviendo", "Buen Día Benito", "El Lado Soleado de la Calle", "Lo Malo de Ser Bueno",
"Enamorado Tuyo", "El Balcón de Paul", "Vida Ingrata", "No te Invité a Mi Cumpleaños", "Insaciable", "Todos Pasan por Mi Rancho"];
var bipolarCanciones = ["Bipolar", "Miguel Gritar", "El Hijo de Hernández", "Malherido", "Nada Me da Satisfacción", "Mi Lista Negra", "Doble Identidad", "Mírenme", "Primavera",
"Razones", "Me Amo", "Breve Descripción de Mi Persona"];
var raroCanciones = ["Nada es Gratis en la Vida", "Hoy Estoy Raro", "Así Soy Yo", "Yendo a la Casa de Damián", "Pobre Papá", "Ya No Sé Que Hacer Conmigo", "Natural",
"Invierno del 92", "El Karaoke de Mi Noviecita", "Me Hace Bien, Me Hace Mal", "Pueblo Podrido", "Autos Nuevos"];
var elcuartetodenosCanciones = ["Hay Que Comer", "Sólo un Rumor", "Al Cielo No", "Bo Cartero", "No Quiero Ser Normal", "Nuevamente", "El Putón del Barrio", "Ya Te Vas a Mejorar",
"Vino en Mi Jeringa", "Corazón Maricón", "Canción de Amor", "Fui Yo", "Manfreddi", "Eres Una Chica Muy Bonita", "Soy Un Capón", "El Día Que Artigas Se Emborrachó",
"Siempre Que Escucho Al Cuarteto", "Me Agarré el Pitito Con El Cierre"];
var cortamamboCanciones = ["No Somos Latinos", "Necesito Una Mujer", "La Guerra de Gardel", "Pegame y Decime Shirley", "Intentaron Separarnos", "El Aparamiento de la Morsa",
"Maten las Ballenas", "La Mina del Jefe", "Me Borro", "Me Amo", "La Pequeña Leti", "Despertate Paparulo", "Cristo te Odia", "Mamá, El Bajista Me Está Pegando"];
var canciones = [juevesCanciones, apozombieCanciones, hablatuespejoCanciones, porfiadoCanciones, bipolarCanciones, raroCanciones, elcuartetodenosCanciones, cortamamboCanciones];

$(document).ready(start);

function start(){
    headerImgRandom();
    setInterval(headerImgRandom, 1000);

    $("#section1-modal span").click(section1ModalCerrar);
    $("#section1 #jueves").click(section1ModalJueves);
    $("#section1 #apozombie").click(section1ModalApozombie);
    $("#section1 #hablatuespejo").click(section1ModalHablatuespejo);
    $("#section1 #porfiado").click(section1ModalPorfiado);
    $("#section1 #bipolar").click(section1ModalBipolar);
    $("#section1 #raro").click(section1ModalRaro);
    $("#section1 #elcuartetodenos").click(section1ModalElcuartetodenos);
    $("#section1 #cortamambo").click(section1ModalCortamambo);
    $("#section1-modal input").keyup(section1ModalFiltro);

    $("#section2-modal span").click(section2ModalCerrar);
    $("#section2-modal #nombre, #apellido").keyup(section2ModalUpperCase);
    $("#section2-modal #nombre").focusout(section2ModalValVacioNombre);
    $("#section2-modal #apellido").focusout(section2ModalValVacioApellido);
    $("#section2-modal #cantidad").focusout(section2ModalValVacioCantidad);
    $("#section2-modal #fecha").focusout(section2ModalValVacioFecha);
    $("#section2-modal #entradas").focusout(section2ModalValVacioEntradas);
    /*switch select*/
    $("#section2 #viveLatino2020").click(section2ModalViveLatino2020);
    $("#section2 #elCuartetoDeNosTourBarcelona").click(section2ModalElCuartetoDeNosTourBarcelona);
    $("#section2 #asuncionico2019").click(section2ModalAsuncionico2019);
    /*tick form ingresado con fade in*/
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

function headerImgRandom(){
    let posImg = Math.round((Math.random()) * (imgs.length -1));
    $("#header-bk").html(`<style> header{background: url(img/${imgs[posImg]}); background-position: center; background-size: cover;} </style>`);
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

function section1ModalCerrar(){
    $("#section1-modal").css("display", "none");
    $("#section1-modal input").val("");
}

function section1ModalJueves(){
    $("#section1-modal ol").empty();
    $("#section1-modal").css("display", "block");
    $("#section1-modal img").attr("src", "img/jueves.jpg");
    $("#section1-modal a").attr("href", "https://open.spotify.com/album/6CLlWqMKd95lyqfHKBzSM4");
    $("#section1-modal h4:nth-of-type(1)").text("Nombre: Jueves");
    $("#section1-modal h4:nth-of-type(2)").text("Año: 2019");
    $("#section1-modal h4:nth-of-type(3)").text("Sello: Sony Music");
    for(i = 0; i <= juevesCanciones.length -1; i++){
        $("#section1-modal ol").append(`<li>${juevesCanciones[i]}</li>`);
    }
}

function section1ModalApozombie(){
    $("#section1-modal ol").empty();
    $("#section1-modal").css("display", "block");
    $("#section1-modal img").attr("src", "img/apozombie.jpg");
    $("#section1-modal a").attr("href", "https://open.spotify.com/album/6Jp05umHWHkUhR6V6TnonS");
    $("#section1-modal h4:nth-of-type(1)").text("Nombre: Apocalipsis Zombie");
    $("#section1-modal h4:nth-of-type(2)").text("Año: 2017");
    $("#section1-modal h4:nth-of-type(3)").text("Sello: Sony Music");
    for(i = 0; i <= apozombieCanciones.length -1; i++){
        $("#section1-modal ol").append(`<li>${apozombieCanciones[i]}</li>`);
    }
}

function section1ModalHablatuespejo(){
    $("#section1-modal ol").empty();
    $("#section1-modal").css("display", "block");
    $("#section1-modal img").attr("src", "img/hablatuespejo.jpg");
    $("#section1-modal a").attr("href", "https://open.spotify.com/album/1ffZ5xExmmOr15QQzYrXyf");
    $("#section1-modal h4:nth-of-type(1)").text("Nombre: Habla Tu Espejo");
    $("#section1-modal h4:nth-of-type(2)").text("Año: 2014");
    $("#section1-modal h4:nth-of-type(3)").text("Sello: Warner Music");
    for(i = 0; i <= hablatuespejoCanciones.length -1; i++){
        $("#section1-modal ol").append(`<li>${hablatuespejoCanciones[i]}</li>`);
    }
}

function section1ModalPorfiado(){
    $("#section1-modal ol").empty();
    $("#section1-modal").css("display", "block");
    $("#section1-modal img").attr("src", "img/porfiado.jpg");
    $("#section1-modal a").attr("href", "https://open.spotify.com/album/4X6PQwYWxtGGtKjAfX6wa6");
    $("#section1-modal h4:nth-of-type(1)").text("Nombre: Porfiado");
    $("#section1-modal h4:nth-of-type(2)").text("Año: 2012");
    $("#section1-modal h4:nth-of-type(3)").text("Sello: Warner Music");
    for(i = 0; i <= porfiadoCanciones.length -1; i++){
        $("#section1-modal ol").append(`<li>${porfiadoCanciones[i]}</li>`);
    }
}

function section1ModalBipolar(){
    $("#section1-modal ol").empty();
    $("#section1-modal").css("display", "block");
    $("#section1-modal img").attr("src", "img/bipolar.jpg");
    $("#section1-modal a").attr("href", "https://open.spotify.com/album/4Ay02WMMtEKaySj1mtPTga");
    $("#section1-modal h4:nth-of-type(1)").text("Nombre: Bipolar");
    $("#section1-modal h4:nth-of-type(2)").text("Año: 2009");
    $("#section1-modal h4:nth-of-type(3)").text("Sello: Warner Music");
    for(i = 0; i <= bipolarCanciones.length -1; i++){
        $("#section1-modal ol").append(`<li>${bipolarCanciones[i]}</li>`);
    }
}

function section1ModalRaro(){
    $("#section1-modal ol").empty();
    $("#section1-modal").css("display", "block");
    $("#section1-modal img").attr("src", "img/raro.jpg");
    $("#section1-modal a").attr("href", "https://open.spotify.com/album/6ZLNLqqFwnoyqrzRxtHEzt");
    $("#section1-modal h4:nth-of-type(1)").text("Nombre: Raro");
    $("#section1-modal h4:nth-of-type(2)").text("Año: 2006");
    $("#section1-modal h4:nth-of-type(3)").text("Sello: Bizarro Records");
    for(i = 0; i <= raroCanciones.length -1; i++){
        $("#section1-modal ol").append(`<li>${raroCanciones[i]}</li>`);
    }
}

function section1ModalElcuartetodenos(){
    $("#section1-modal ol").empty();
    $("#section1-modal").css("display", "block");
    $("#section1-modal > div").css("overflow", "auto");
    $("#section1-modal img").attr("src", "img/elcuartetodenos.jpg");
    $("#section1-modal a").attr("href", "https://open.spotify.com/album/2CsAu4ISKqLEpQpTIx8FIV");
    $("#section1-modal h4:nth-of-type(1)").text("Nombre: El Cuarteto de Nos");
    $("#section1-modal h4:nth-of-type(2)").text("Año: 2004");
    $("#section1-modal h4:nth-of-type(3)").text("Sello: Bizarro Records");
    for(i = 0; i <= elcuartetodenosCanciones.length -1; i++){
        $("#section1-modal ol").append(`<li>${elcuartetodenosCanciones[i]}</li>`);
    }
}

function section1ModalCortamambo(){
    $("#section1-modal ol").empty();
    $("#section1-modal").css("display", "block");
    $("#section1-modal > div").css("overflow", "auto");
    $("#section1-modal img").attr("src", "img/cortamambo.jpg");
    $("#section1-modal a").attr("href", "https://open.spotify.com/album/4fNaCXMkt7UWlUf7W8ncFz");
    $("#section1-modal h4:nth-of-type(1)").text("Nombre: Cortamambo");
    $("#section1-modal h4:nth-of-type(2)").text("Año: 2000");
    $("#section1-modal h4:nth-of-type(3)").text("Sello: Koala Records");
    for(i = 0; i <= cortamamboCanciones.length -1; i++){
        $("#section1-modal ol").append(`<li>${cortamamboCanciones[i]}</li>`);
    }
}

function section1ModalFiltro(){
    let cancion = $("#section1-modal input").val();
    $("#section1-modal li").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(cancion) > -1);
    });
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

function section2ModalCerrar(){
    $("#section2-modal").css("display", "none");
    $("#section2-modal input").val("");
}

function section2ModalUpperCase(){
    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val(); 
	nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    apellido = apellido.charAt(0).toUpperCase() + apellido.slice(1);
    $("#nombre").val(nombre);
    $("#apellido").val(apellido);
}

function section2ModalValVacioNombre(){
    let nombreVal = $("#section2-modal #nombre").val();
    if(nombreVal === ""){
        $("#section2-modal #nombre").css("border", "0.2em solid red");
        $("#section2-modal #nombre + p").css("display", "block");
    }
    else{
        $("#section2-modal #nombre").css("border", "0.2em solid green");
        $("#section2-modal #nombre + p").css("display", "none");
    }
}

function section2ModalValVacioApellido(){
    let nombreVal = $("#section2-modal #nombre").val();
    let apellidoVal = $("#section2-modal #apellido").val();
    if(nombreVal === ""){
        $("#section2-modal #nombre").css("border", "0.2em solid red");
        $("#section2-modal #nombre + p").css("display", "block");
    }
    else{
        $("#section2-modal #nombre").css("border", "0.2em solid green");
    }
    if(apellidoVal === ""){
        $("#section2-modal #apellido").css("border", "0.2em solid red");
        $("#section2-modal #apellido + p").css("display", "block");
    }
    else{
        $("#section2-modal #apellido").css("border", "0.2em solid green");
        $("#section2-modal #apellido + p").css("display", "none");
    }
}

function section2ModalValVacioEntradas(){
    let nombreVal = $("#section2-modal #nombre").val();
    let apellidoVal = $("#section2-modal #apellido").val();
    let entradasVal = $("#section2-modal #entradas option:selected").val();
    if(nombreVal === ""){
        $("#section2-modal #nombre").css("border", "0.2em solid red");
        $("#section2-modal #nombre + p").css("display", "block");
    }
    else{
        $("#section2-modal #nombre").css("border", "0.2em solid green");
    }
    if(apellidoVal === ""){
        $("#section2-modal #apellido").css("border", "0.2em solid red");
        $("#section2-modal #apellido + p").css("display", "block");
    }
    else{
        $("#section2-modal #apellido").css("border", "0.2em solid green");
        $("#section2-modal #apellido + p").css("display", "none");
    }
    if(entradasVal === "Entradas"){
        $("#section2-modal #entradas").css("border", "0.2em solid red");
        $("#section2-modal #entradas + p").css("display", "block");
    }
    else{
        $("#section2-modal #entradas").css("border", "0.2em solid green");
        $("#section2-modal #entradas + p").css("display", "none");
    }
}

function section2ModalValVacioCantidad(){
    let nombreVal = $("#section2-modal #nombre").val();
    let apellidoVal = $("#section2-modal #apellido").val();
    let entradasVal = $("#section2-modal #entradas option:selected").val();
    let cantidadVal = $("#section2-modal #cantidad").val();
    if(nombreVal === ""){
        $("#section2-modal #nombre").css("border", "0.2em solid red");
        $("#section2-modal #nombre + p").css("display", "block");
    }
    else{
        $("#section2-modal #nombre").css("border", "0.2em solid green");
    }
    if(apellidoVal === ""){
        $("#section2-modal #apellido").css("border", "0.2em solid red");
        $("#section2-modal #apellido + p").css("display", "block");
    }
    else{
        $("#section2-modal #apellido").css("border", "0.2em solid green");
        $("#section2-modal #apellido + p").css("display", "none");
    }
    if(entradasVal === "Entradas"){
        $("#section2-modal #entradas").css("border", "0.2em solid red");
        $("#section2-modal #entradas + p").css("display", "block");
    }
    else{
        $("#section2-modal #entradas").css("border", "0.2em solid green");
        $("#section2-modal #entradas + p").css("display", "none");
    }
    if(cantidadVal === ""){
        $("#section2-modal #cantidad").css("border", "0.2em solid red");
        $("#section2-modal #cantidad + p").css("display", "block");
    }
    else{
        $("#section2-modal #cantidad").css("border", "0.2em solid green");
        $("#section2-modal #cantidad + p").css("display", "none");
    }
}

function section2ModalValVacioFecha(){
    let nombreVal = $("#section2-modal #nombre").val();
    let apellidoVal = $("#section2-modal #apellido").val();
    let entradasVal = $("#section2-modal #entradas option:selected").val();
    let cantidadVal = $("#section2-modal #cantidad").val();
    let fechaVal = $("#section2-modal #fecha").val();
    if(nombreVal === ""){
        $("#section2-modal #nombre").css("border", "0.2em solid red");
        $("#section2-modal #nombre + p").css("display", "block");
    }
    else{
        $("#section2-modal #nombre").css("border", "0.2em solid green");
    }
    if(apellidoVal === ""){
        $("#section2-modal #apellido").css("border", "0.2em solid red");
        $("#section2-modal #apellido + p").css("display", "block");
    }
    else{
        $("#section2-modal #apellido").css("border", "0.2em solid green");
        $("#section2-modal #apellido + p").css("display", "none");
    }
    if(entradasVal === "Entradas"){
        $("#section2-modal #entradas").css("border", "0.2em solid red");
        $("#section2-modal #entradas + p").css("display", "block");
    }
    else{
        $("#section2-modal #entradas").css("border", "0.2em solid green");
        $("#section2-modal #entradas + p").css("display", "none");
    }
    if(cantidadVal === ""){
        $("#section2-modal #cantidad").css("border", "0.2em solid red");
        $("#section2-modal #cantidad + p").css("display", "block");
    }
    else{
        $("#section2-modal #cantidad").css("border", "0.2em solid green");
        $("#section2-modal #cantidad + p").css("display", "none");
    }
    if(fechaVal === ""){
        $("#section2-modal #fecha").css("border", "0.2em solid red");
        $("#section2-modal #fecha + p").css("display", "block");
    }
    else{
        $("#section2-modal #fecha").css("border", "0.2em solid green");
        $("#section2-modal #fecha + p").css("display", "none");
    }
}

function section2ModalViveLatino2020(){
    $("#section2-modal").css("display", "block");
    $("#section2-modal #show").val("Vive Latino 2020");
    $("#section2-modal #entradas").append(`<optgroup label = "Abono General"><option>Fase Fans - $80</option><option>Fase 1 - $100</option>
    <option>Fase 2 - $130</option><option>Fase 3 - $140</option></optgroup><optgroup label = "Abono Platino"><option>Fase 1 - $150</option>
    <option>Fase 2 - $180</option><option>Fase 3 - $200</option></optgroup>`);
    $("#section2-modal #fecha").attr({"min": "2020-03-14", "max": "2020-03-15"});
}

function section2ModalElCuartetoDeNosTourBarcelona(){
    $("#section2-modal").css("display", "block");
    $("#section2-modal #show").val("El Cuarteto de Nos Tour Barcelona");
    
    $("#section2-modal #fecha").attr({"min": "2019-06-10", "max": "2019-06-10"});
}

function section2ModalAsuncionico2019(){
    $("#section2-modal").css("display", "block");
    $("#section2-modal #show").val("Asuncionico 2019");
    $("#section2-modal #fecha").attr({"min": "2019-03-28", "max": "2019-04-02"});
}







