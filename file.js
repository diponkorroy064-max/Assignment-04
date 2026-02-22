const noJobSection = document.getElementById('no-job-available');
// console.log(noJobSection);

const cardSection = document.getElementById('all-cards');
// console.log(cardSection);

// document.getElementById("interview-btn").addEventListener('click', function () {
//     // console.log('interview btn clicked');
//     noJobSection.removeAttribute('hidden');
//     cardSection.setAttribute('hidden', true);
// })

// document.getElementById("rejected-btn").addEventListener('click', function () {
//     // console.log('rejected btn clicked');
//     noJobSection.removeAttribute('hidden');
//     cardSection.setAttribute('hidden', true);
// })


const allCards = document.getElementById('all-cards');

// document.getElementById('btn-all').addEventListener('click', function () {
//     // console.log('all btn clicked');
//     allCards.removeAttribute('hidden');
//     noJobSection.setAttribute('hidden', true);
// })


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
    // remove blue bg for all button ---- 
    allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    // adding white bg for all button ----
    allBtn.classList.add('text-[#64748B]', 'bg-white');
    interviewBtn.classList.add('text-[#64748B]', 'bg-white');
    rejectedBtn.classList.add('text-[#64748B]', 'bg-white');

    let selected = document.getElementById(id);
    // console.log(selected);

    // add black background for current button ----
    selected.classList.add("bg-[#3B82F6]", "text-white");
    selected.classList.remove("text-[#64748B]", "bg-white");


    if (id == 'interview-btn') {
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }
    else if (id == 'btn-all') {
        allCards.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }

}


mainContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        // console.log(parentNode);
        const jobName = document.querySelector(".job-name").innerText;
        // console.log(jobName);

        const jobTitle = document.querySelector(".job-title").innerText;
        const salary = document.querySelector(".salary").innerText;
        const condition = document.querySelector(".condition").innerText;
        const description = document.querySelector(".description").innerText;

        const cardInfo = {
            jobName,
            jobTitle,
            salary,
            condition,
            description
        }
        // console.log(cardInfo);

        const jobExist = interviewList.find(item => item.jobName == cardInfo.jobName);
        parentNode.querySelector(".condition").innerText = "Interview";

        if (!jobExist) {
            interviewList.push(cardInfo);
        }

        reanderInterview();
    }
    
})


const filterSection = document.getElementById("filter-section");

function reanderInterview() {
    filterSection.innerText = "";

    for (const interview of interviewList) {
        let div = document.createElement("div");
        div.className = 'relative bg-[#FFFFFF] p-5 rounded-xl mt-5 shadow';
        div.innerHTML = `
            <div class="">
                    <h3 class="job-name text-[#002C5C] font-bold text-xl">Mobile First Corp</h3>
                    <p class="job-title text-[#64748B]">React Native Developer</p>
                    <p class="salary text-[#64748B]">Remote • Full-time • $130,000 - $175,000</p>
                    <p class="condition mt-4 border w-[150px] text-center py-2 rounded-md font-semibold">NOT APPLIED</p>
                    <p class="description text-[#565a5f] pt-4">Build cross-platform mobile applications using React Native. Work on
                        products used by millions of
                        users worldwide.
                    </p>
                    <br>
                    <button class="btn text-green-500 border-green-500">INTERVIEW</button>
                    <button class="btn ml-4 text-red-500 border-red-500">REJECTED</button>
                </div>
                <div class="absolute top-4 right-4 border p-2 rounded-full opacity-70">
                    <i class="fa-solid fa-trash-can"></i>
                </div>
        `;
        filterSection.appendChild(div);
    }
}





