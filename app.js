const root=
{
    CantCard:null,
    Pantalla:'m-pantalla',
    PClase:'m-p-',
    Pclose:'m-p-close'
}
window.onload=()=>
{
 let cards= document.getElementsByClassName('card');
 root.CantCard=cards.length;

 for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('click', function(){
     Ocultar_Mostrar(card.getAttribute('value'))
    });
 }

 document.getElementById(root.Pclose).addEventListener('click',function(){
    let pan= document.getElementById(root.Pantalla);
    pan.style.display="none";
 });
}

function Ocultar_Mostrar(e)
{
 for (let i = 0; i < root.CantCard; i++) {
    let nodo = document.getElementById(root.PClase+(i+1));
    nodo.style.display="none";
 }

 let nodo= document.getElementById(root.PClase+(e));
 nodo.style.display="flex";

 let pan= document.getElementById(root.Pantalla);
 pan.style.display="flex";
}