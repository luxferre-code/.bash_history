const items = document.querySelectorAll('.slide');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
let count = 0;


function slideSuivante(){
    const histoire1 = ["Vous venez d\'acheter un ordinateur portable d\'occasion peu chère pour la rentrée prochaine en première année de BUT Informatique à l\'IUT de Lille."];
    var txt2 = 'Mais vous vous rendez compte que l\'ancien propriétaire n\'a pas formaté l\'ordinateur. Un peu curieux de nature, vous décidez d\'y jeter un coup d\'oeil sur les fichiers...';
    var txt3 = 'Mais en démarrant l\'ordinateur, vous découvrez que vous n\'avez pas accès à l\'interface graphique (juste le terminal) et pas d\'internet.';
    var txt4 = 'C\'est l\'occasion idéale d\'apprendre le bash ! Le langage du terminal...';
    const speed = 100; /* The speed/duration of the effect in milliseconds */
    let textPosition = 0;



    items[count].classList.remove('active');     

    if (count == nbSlide -2) {
        count++;
        document.querySelector('.btn-nav').style.display = 'none';    
    } else if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante) // ajouter TypeWriter


function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)
