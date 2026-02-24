const noJobSection = document.getElementById('no-job-available');

const allCards = document.getElementById('all-cards');

const totalCount = document.getElementById('totalCount');
const interviewCount = document.getElementById('interviewCount');
const rejectedCount = document.getElementById('rejectedCount');

const jobCount = document.getElementById('jobCount');

const mainContainer = document.querySelector('main');

const allBtn = document.getElementById('btn-all');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');

const filterSection = document.getElementById("filter-section");


let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

// console.log(rejectedList);

function calculateCount() {
    totalCount.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    jobCount.innerText = allCards.children.length + " jobs";
}
calculateCount();


// step-4: showing file---
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
        if (interviewList.length == 0) {
            noJobSection.classList.remove('hidden');
            allCards.classList.add('hidden');
            filterSection.classList.add('hidden');
            jobCount.innerText = interviewList.length + " jobs";
            jobCount.style.color = '#64748B'; 
        }
        else if (interviewList.length > 0) {
            noJobSection.classList.add('hidden');
            allCards.classList.add('hidden');
            filterSection.classList.remove('hidden');
            reanderInterview();
            jobCount.innerText = interviewList.length + " jobs";
            jobCount.style.color = "#00D100";
        }
    }

    else if (id == 'btn-all') {
        allCards.classList.remove('hidden');
        filterSection.classList.add('hidden');
        noJobSection.classList.add('hidden');
        jobCount.innerText = allCards.children.length + " jobs";
        jobCount.style.color = '#64748B'; 
    }
        
    else if (id == 'rejected-btn') {
        if (rejectedList.length == 0) {
            noJobSection.classList.remove('hidden');
            allCards.classList.add('hidden');
            filterSection.classList.add('hidden');
            jobCount.innerText = rejectedList.length + " jobs";
            jobCount.style.color = '#64748B';
        }
        else if (rejectedList.length > 0) {
            noJobSection.classList.add('hidden');
            allCards.classList.add('hidden');
            filterSection.classList.remove('hidden');
            reanderRejected();
            jobCount.innerText = rejectedList.length + " jobs";
            jobCount.style.color = "red";
        }
    }
}

// event delegation of main container----
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-button')) {
        const parentNode = event.target.parentNode.parentNode;
        // console.log(parentNode);

        const jobName = parentNode.querySelector(".job-name").innerText;

        const jobTitle = parentNode.querySelector(".job-title").innerText;

        const salary = parentNode.querySelector(".salary").innerText;

        const condition = parentNode.querySelector(".condition").innerText;
        const description = parentNode.querySelector(".description").innerText;

        parentNode.querySelector(".condition").innerText = "Interview";

        const cardInfo = {
            jobName,
            jobTitle,
            salary,
            condition: "Interview",
            description
        };
        // console.log(cardInfo);

        const jobExist = interviewList.find(item => item.jobName == cardInfo.jobName);


        if (!jobExist) {
            interviewList.push(cardInfo);
        }
        // console.log(interviewList);

        // removing the jobname from rejectedList----
        rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName);


        // console.log(rejectedList);


        if (currentStatus == "rejected-btn") {
            reanderRejected();
        }

        calculateCount();
    }

    else if (event.target.classList.contains('rejected-button')) {
        const parentNode = event.target.parentNode.parentNode;
        // console.log(parentNode);

        const jobName = parentNode.querySelector(".job-name").innerText;
        // console.log(jobName);

        const jobTitle = parentNode.querySelector(".job-title").innerText;
        const salary = parentNode.querySelector(".salary").innerText;
        const condition = parentNode.querySelector(".condition").innerText;
        const description = parentNode.querySelector(".description").innerText;

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
        // console.log(jobExist);


        if (!jobExist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName);


        if (currentStatus == "interview-btn") {
            reanderInterview();
        }

        calculateCount();
    }

    else if (event.target.classList.contains('delate')) {
        const parentNode = event.target.closest('.card');
        // console.log(parentNode);
        parentNode.remove();
        
        totalCount.innerText = allCards.children.length;
        jobCount.innerText = allCards.children.length + " jobs";

        if (currentStatus == "interview-btn") {
            interviewCount.innerText = filterSection.children.length;
            jobCount.innerText = filterSection.children.length + " jobs";
        }
        else if (currentStatus == "rejected-btn") {
            rejectedCount.innerText = filterSection.children.length;
            jobCount.innerText = filterSection.children.length + " jobs";
        }

    }
})

//step-3: html file create----
function reanderInterview() {
    filterSection.innerText = "";

    for (const interview of interviewList) {
        let div = document.createElement("div");
        div.className = 'card relative bg-[#FFFFFF] p-5 rounded-xl mt-5 shadow';
        div.innerHTML = `
            <div class="">
                    <h3 class="job-name text-[#002C5C] font-bold text-xl">${interview.jobName}</h3>
                    <p class="job-title text-[#64748B]">${interview.jobTitle}</p>
                    <p class="salary text-[#64748B]">${interview.salary}</p>
                    <p class="condition mt-4 border w-[150px] text-center py-2 rounded-md font-semibold">${interview.condition}</p>
                    <p class="description text-[#565a5f] pt-4">${interview.description}</p>
                    <div class="mt-4">
                        <button class="interview-button btn text-green-500 border-green-500">INTERVIEW</button>
                        <button class="rejected-button btn ml-4 text-red-500 border-red-500">REJECTED</button>
                    </div>
                </div>
                <div class="absolute top-4 right-4">
                    <button class="btn border px-2.5 py-2 rounded-full opacity-70"><i
                            class="delate fa-solid fa-trash-can"></i></button>
                </div>
        `;
        filterSection.appendChild(div);
    }
}

//step-3: html file create----
function reanderRejected() {
    filterSection.innerText = "";

    for (const rejected of rejectedList) {
        let div = document.createElement("div");
        div.className = 'card relative bg-[#FFFFFF] p-5 rounded-xl mt-5 shadow';
        div.innerHTML = `
            <div class="">
                    <h3 class="job-name text-[#002C5C] font-bold text-xl">${rejected.jobName}</h3>
                    <p class="job-title text-[#64748B]">${rejected.jobTitle}</p>
                    <p class="salary text-[#64748B]">${rejected.salary}</p>
                    <p class="condition mt-4 border w-[150px] text-center py-2 rounded-md font-semibold">${rejected.condition}</p>
                    <p class="description text-[#565a5f] pt-4">${rejected.description}</p>
                    <div class="mt-4">
                        <button class="interview-button btn text-green-500 border-green-500">INTERVIEW</button>
                        <button class="rejected-button btn ml-4 text-red-500 border-red-500">REJECTED</button>
                    </div>
                </div>
                <div class="absolute top-4 right-4">
                   <button class="btn border px-2.5 py-2 rounded-full opacity-70"><i
                            class="delate fa-solid fa-trash-can"></i></button>
                </div>
        `;
        filterSection.appendChild(div);
    }
}



