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


const totalCount = document.getElementById('totalCount');
const interviewCount = document.getElementById('interviewCount');
const rejectedCount = document.getElementById('rejectedCount');

let interviewList = [];
let rejectedList = [];

function calculateCount() {
    totalCount.innerText = cardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();

const mainContainer = document.querySelector('main');
// console.log(mainContainer);


const allBtn = document.getElementById('btn-all');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');


function toggleStyle(id) {
    allBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    allBtn.classList.add('text-[#64748B]', 'bg-white');
    interviewBtn.classList.add('text-[#64748B]', 'bg-white');
    rejectedBtn.classList.add('text-[#64748B]', 'bg-white');

    let selected = document.getElementById(id);
    // console.log(selected);

    selected.classList.add("bg-[#3B82F6]", "text-white");
    selected.classList.remove("text-[#64748B]", "bg-white");

}



