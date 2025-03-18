// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
let amigoSort=[];

function mostrarAmigos(elemento,amigo){
        let elemetoHTML=document.querySelector(elemento);
        elemetoHTML.innerHTML=elemetoHTML.innerHTML+amigo; 
}

function agregarAmigo(){
    let amigoR=document.getElementById('amigo').value;
    if (amigoR==""){
        alert("Por favor inserte un nombre :)");
    }else{
        amigos.push(amigoR);
       // console.log(amigoR);
        //console.log(amigos.length);    
    }
    mostrarAmigos('#listaAmigos',`<li> ${amigoR}</li>`);
    limpiarCaja();
}
function sortearAmigo(){
    if (amigos.length!=0){
        let numA= Math.floor(Math.random()*amigos.length)+0;
        console.log(numA);
        let amigoSelec=amigos[numA];
        mostrarAmigos('#resultado',`<li> El amigo secreto es : ${amigoSelec}</li>`);
    }else{
        alert("Por favor inserte un nombre :)");
    }
}

function limpiarCaja(){
    let valorCaja=document.querySelector('#amigo');
    valorCaja.value=" ";
}

