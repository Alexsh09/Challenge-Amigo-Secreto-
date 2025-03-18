// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
let amigoSort=[];

function mostrarAmigos(elemento,amigo){
        let elemetoHTML=document.querySelector(elemento);
        elemetoHTML.innerHTML=elemetoHTML.innerHTML+amigo; 
}
function numA(tam){
    return Math.floor(Math.random()*tam)+1;
}

function sortearAmigo(){
    numA();
    amigoSort.push(num)
    


}

function agregarAmigo(){
    let amigoR=document.getElementById('amigo').value;
    if (amigoR==""){
        alert("Por favor inserte nombre :)");
    }else{
        amigos.push(amigoR);
        console.log(amigoR);
        console.log(amigos.length);    
    }
    mostrarAmigos('#listaAmigos',`<li> ${amigoR}</li>`);
    limpiarCaja();
    

}

function limpiarCaja(){
    let valorCaja=document.querySelector('#amigo');
    valorCaja.value=" ";
}