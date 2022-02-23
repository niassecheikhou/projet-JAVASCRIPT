const conteneur = document.querySelector(".container");
const bnt = document.querySelector(".bouton");

//pour les Fonctions

function blocElementsLesIcones(){

    //creation et récuperation de l'icone delete
   const i1=document.createElement('i');
   i1.setAttribute('class','fa-solid fa-pen-to-square');

//creation et récuperation de l'icone editor
   const i2=document.createElement('i');
   i2.setAttribute('class','fa-solid fa-trash-can');

   //creation de l'icone et récuperation  de ses element fils
   const icone=document.createElement('div');
   icone.setAttribute('class','icone');
   icone.appendChild(i1);
   icone.appendChild(i2);

   const text = document.createElement('textarea');
   text.setAttribute('rows','20');
   text.setAttribute('cols','30');
        //creation et récuperation
   const parents=document.createElement('div');
   parents.setAttribute('class','lesicones');
   parents.appendChild(icone);
   parents.appendChild(text);

   conteneur.appendChild(parents);

   i2.addEventListener('click', function(){
       parents.parentNode.removeChild(parents);
   });
   i1.addEventListener('click', function(){
       text.toggleAttribute('disabled');
       text.focus();
   });
   

}

// /// les events
  bnt.addEventListener('click', function(){
    blocElementsLesIcones();
  });
  window.onload=blocElementsLesIcones();

