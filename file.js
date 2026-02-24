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
let currentStatus = "all";

function calculateCount() {
    totalCount.innerText = cardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}


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

    currentStatus = id;

    // add black background for current button ----
    selected.classList.add("bg-[#3B82F6]", "text-white");
    selected.classList.remove("text-[#64748B]", "bg-white");


    if (id == 'interview-btn') {
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }
    else if (id == 'btn-all'){
        allCards.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if (id == 'rejected-btn') {
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
        reanderRejected();
    }

}


mainContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('interview-button')) {
        const parentNode = event.target.parentNode;
        // console.log(parentNode);

        const jobName = document.querySelector(".job-name").innerText;
        // console.log(jobName);

        const jobTitle = document.querySelector(".job-title").innerText;
        const salary = document.querySelector(".salary").innerText;
        const condition = document.querySelector(".condition").innerText;
        const description = document.querySelector(".description").innerText;

        parentNode.querySelector(".condition").innerText = "Interview";

        const cardInfo = {
            jobName,
            jobTitle,
            salary,
            condition: "Interview",
            description
        }
        // console.log(cardInfo);

        const jobExist = interviewList.find(item => item.jobName == cardInfo.jobName);
        

        if (!jobExist) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName);

        calculateCount();

        if (currentStatus == "rejected-btn") {
            reanderRejected();
        }

    }


    else if (event.target.classList.contains('rejected-button')){
        const parentNode = event.target.parentNode;
        // console.log(parentNode);

        const jobName = document.querySelector(".job-name").innerText;
        // console.log(jobName);

        const jobTitle = document.querySelector(".job-title").innerText;
        const salary = document.querySelector(".salary").innerText;
        const condition = document.querySelector(".condition").innerText;
        const description = document.querySelector(".description").innerText;

        parentNode.querySelector(".condition").innerText = "Rejected";

        const cardInfo = {
            jobName,
            jobTitle,
            salary,
            condition: "Rejected",
            description
        }
        // console.log(cardInfo);

        const jobExist = rejectedList.find(item => item.jobName == cardInfo.jobName);


        if (!jobExist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName);

        calculateCount();

        if (currentStatus == "interview-btn") {
            reanderInterview();
        }

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
                    <h3 class="job-name text-[#002C5C] font-bold text-xl">${interview.jobName}</h3>
                    <p class="job-title text-[#64748B]">${interview.jobTitle}</p>
                    <p class="salary text-[#64748B]">${interview.salary}</p>
                    <p class="condition mt-4 border w-[150px] text-center py-2 rounded-md font-semibold">${interview.condition}</p>
                    <p class="description text-[#565a5f] pt-4">${interview.description}</p>
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

function reanderRejected() {
    filterSection.innerText = "";

    for (const rejected of rejectedList) {
        let div = document.createElement("div");
        div.className = 'relative bg-[#FFFFFF] p-5 rounded-xl mt-5 shadow';
        div.innerHTML = `
            <div class="">
                    <h3 class="job-name text-[#002C5C] font-bold text-xl">${rejected.jobName}</h3>
                    <p class="job-title text-[#64748B]">${rejected.jobTitle}</p>
                    <p class="salary text-[#64748B]">${rejected.salary}</p>
                    <p class="condition mt-4 border w-[150px] text-center py-2 rounded-md font-semibold">${rejected.condition}</p>
                    <p class="description text-[#565a5f] pt-4">${rejected.description}</p>
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



