const valider = document.getElementById('valider');
const btncopy = document.getElementById('btncopy');
const motdepass = document.getElementById('ajoutermotdepass');
// si on utulise querySelector 
// const btncopy=document.getElementById('btncopy');


const cles = {
    majuscule: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    miniscule: "abcdefghijklmnopqrstuvwxy",
    nombre: "O123456789",
    speciaux: "!@#$%^&*()_+~`|}{[]:;?><,./-="
}
const optenirLaCle = [
    function majuscule() {
        return cles.majuscule[Math.floor(Math.random() * cles.majuscule.length)];
    },
    function miniscule() {
        return cles.miniscule[Math.floor(Math.random() * cles.miniscule.length)];
    },
    function nombre() {
        return cles.nombre[Math.floor(Math.random() * cles.nombre.length)];
    },
    function speciaux() {
        return cles.speciaux[Math.floor(Math.random() * cles.speciaux.length)];
    },
];

function creationPassWord() {

    // si l'utilusateur n'a pas coché aucun champs

    const maj = document.getElementById('majuscule').checked;
    const min = document.getElementById('miniscule').checked;
    const nbre = document.getElementById('nombre').checked;
    const caracteres = document.getElementById('speciaux').checked;
    

    if (maj + min + nbre + caracteres === 0) {
        alert('veuillez faire une option');
        return;
    }
    
    // si l'utilisateur a cocher au moins un champs


    const ajoutermotdepass = document.getElementById("ajoutermotdepass");
    const longueurpassword = document.getElementById('longueurpassword');
    let password = "";
    while (longueurpassword.value > password.length) {
        let laClesPourAjouter = optenirLaCle[Math.floor(Math.random() * optenirLaCle.length)];
        let isChecked = document.getElementById(laClesPourAjouter.name).checked;
        if (isChecked) {
            password += laClesPourAjouter();
        };
    }
    ajoutermotdepass.innerHTML = password;
}

/* function CopieMotDePassword() {
const textarea=createElement('textarea');
const longueurpassword = document.getElementById('longueurpassword').innerHTML;
if (!longueurpassword){return;};
textarea.value=longueurpassword;


} */
function CopieMotDePassword() {
    navigator.clipboard.writeText(motdepass.value);
    /* Select the text field */
    // motdepass.select();
    // motdepass.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    
  }


// les events
valider.addEventListener('click', function () {
    creationPassWord();
});
btncopy.addEventListener('click', function () {
   CopieMotDePassword();

});


//creation des fonctions

//a-z : start 97 - END 122
//A-Z : START 65 - END 90
//0-9 : START 48 - END 57
//SPECIAUX : START 33 - END 47


// fonction qui permet de generer 
// function Generateur(debut,fin){
//  let tabGenerateur="";
//  for(let i= debut; i <= fin ;i++){
//      tabGenerateur+=String.fromCharCode(i);

//  };
//  return tabGenerateur.split('');
// };
// console.log(Generateur(32,198));









