const noJobSection = document.getElementById('no-job-available');
// console.log(noJobSection);

const cardSection = document.getElementById('all-cards');
// console.log(cardSection);

document.getElementById("interview-btn").addEventListener('click', function() {
    // console.log('interview btn clicked');
    noJobSection.removeAttribute('hidden');
    cardSection.setAttribute('hidden', true);
})

document.getElementById("rejected-btn").addEventListener('click', function() {
    // console.log('rejected btn clicked');
    noJobSection.removeAttribute('hidden');
    cardSection.setAttribute('hidden', true);
})


const allCards = document.getElementById('all-cards');

document.getElementById('btn-all').addEventListener('click',   function() {
    // console.log('all btn clicked');
    allCards.removeAttribute('hidden');
    noJobSection.setAttribute('hidden', true);
})




