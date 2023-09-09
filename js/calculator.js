const baseLevelSelect = document.getElementById('base-level');
const jobClassSelect = document.getElementById('classe-select');
const characterImage = document.querySelector('.calculator > .calculator-character > .character > img');
const genderRadios = document.querySelectorAll('.gender input[name=gender-name]');
const statsButtonAdd = document.getElementById('strength_button-add');
const statsButtonDel = document.getElementById('strength_button-del');
const statsButtonNumber = document.getElementById('strength_stats-point');
let currentBaseLevel = '1';
let currentGender = 'male';
let currentJobClass = 'novice';
let currentStats = parseInt(statsButtonNumber.innerText);

baseLevelSelect.addEventListener('change', function (e) {
    currentBaseLevel = e.target.value++;
    console.log(e);
})

const JOB_GENDER_EXCEPTIONS = {
    female: {
        bard: 'dancer',
        kagerou: 'oboro',
        clown: 'gypsy',
    },
    male: {
        dancer: 'bard',
        oboro: 'kagerou',
        gypsy: 'clown',
    },
};

function setJobException(exceptions, job, gender) {
    if (exceptions[gender][job]) {
        currentJobClass = exceptions[gender][job];
    }
}

function refreshSelect(exceptions, gender) {
    Object.entries(exceptions[gender]).forEach(function (row) {
        console.log(`modifier ${row[0]} par ${row[1]}`);
    })
}


genderRadios.forEach(input => {
    input.addEventListener('change', function (e) {
        currentGender = e.target.value;
        setJobException(JOB_GENDER_EXCEPTIONS, currentJobClass, currentGender);
        refreshSelect(JOB_GENDER_EXCEPTIONS, currentGender);
        characterImage.setAttribute('src', `../../img/sprites/${currentJobClass}-${currentGender}-removebg.png`);
    });
});

jobClassSelect.addEventListener('change', function (e) {
    currentJobClass = e.target.value;
    setJobException(JOB_GENDER_EXCEPTIONS, currentJobClass, currentGender);
    characterImage.setAttribute('src', `../../img/sprites/${currentJobClass}-${currentGender}-removebg.png`);
});

statsButtonAdd.addEventListener('click', function (e) {
    if (currentStats<=98) {
        currentStats = currentStats+1;
        statsButtonNumber.innerHTML = currentStats;
    }
});

statsButtonDel.addEventListener('click', function (e) {
    if (currentStats>=-1) {
        currentStats = currentStats-1;
        statsButtonNumber.innerHTML = currentStats;
    }
});