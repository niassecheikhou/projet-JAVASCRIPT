const i1 =document.querySelector('#icone1');
const i2 =document.querySelector('#icone2');
const left = document.getElementById('left');
const right =document.getElementById('right');

//<<<<<<<<<<creation de fonction>>>>>>>>
        // creation de tableau 
const CreateTab = ['Mon Premier','Mon Deuxieme','Mon Troixiéme','Mon Quatriéme'];

/// les fonctions  sur
/// boucle pour generer les elements du tableau

for (let i = 0; i < CreateTab.length; i++) {
    const p = document.createElement('p');
    left.appendChild(p);
    p.innerHTML=CreateTab[i];
    //  p.style.backgroundColor='blue';
 }

// CreateTab.forEach(indice => {
//     const p = document.createElement('p');
//     p.innerHTML=`<p>${indice}</p>`;
//     left.appendChild(p);

    
// });

// pour selectioner chaque element du tableau en couleur bleu
const para=document.querySelectorAll('p');

for (let i = 0; i < para.length; i++) {
    para[i].addEventListener('click', function(){
        para[i].classList.toggle('active');
    });
} 

// si on click sur l'icone droite

    // i2.addEventListener('click', function(){
    //     // alert('bonjour');
    //    const partgauche=left.querySelectorAll('p');
    //    for (let i = 0;  i< partgauche.length ; i++){
    //     if (i.className=='active');
    //     right.appendChild('i');
    //    }
    // });

    i2.addEventListener('click', function(){
        const partgauche=left.querySelectorAll('p');
        partgauche.forEach(ind=> {
            if (ind.className=='active'){
            right.appendChild(ind);
            // ind.style.backgroundColor="transparent";
            // ind.style.
            }
        });
    });

    i1.addEventListener('click', function(){
        const partdroite=right.querySelectorAll('p');
        partdroite.forEach(ind=> {
            if (ind.className=='active'){
            left.appendChild(ind);
            // ind.style.backgroundColor="transparent";
            }
        });
    });










///// les events

// p.addEventListener('click',function(){
//     p.style.background.blue;
// });

