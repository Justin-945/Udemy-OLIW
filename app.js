let ageInput = document.querySelector("#ageInput");
let calcBtn = document.querySelector("#calcBtn");
let result = document.querySelector("#result");
let displayResult = document.querySelector("#displayResult");
let resetBtn = document.querySelector("#resetBtn");
let refresh = document.querySelector(".refresh");
let answer = document.querySelector(".answer");

let mytimer;
let age;


function numberWithCommas(weeks) {
    return weeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

calcBtn.addEventListener('click', function() {
    age = ageInput.value.trim();
    // alert1.classList.remove('active');
    // alert2.classList.remove('active');

    if (age == "") {
        
        clearInterval(mytimer);
        let alert1 = document.querySelector(".alert1");
        alert1.classList.add('active');
        calcBtn.disabled = true;
        
        mytimer = setInterval(function() {
            alert1.classList.remove('active');
            calcBtn.disabled = false;
        }, 3000)

    } else if (isNaN(age) == true) {
        
        clearInterval(mytimer);
        let alert2 = document.querySelector(".alert2");
        alert2.classList.add('active');
        calcBtn.disabled = true;

        mytimer = setInterval(function() {
            alert2.classList.remove('active');
            calcBtn.disabled = false;
        }, 3000)

    } else if (age >= 90) {
        answer.classList.remove('active');
        clearInterval(mytimer);
        let alert3 = document.querySelector(".alert3");
        alert3.classList.add('active');
        calcBtn.disabled = true;

        mytimer = setInterval(function() {
            alert3.classList.remove('active');
            calcBtn.disabled = false;
        }, 3000)

    } else {
        
        answer.classList.add('active');

        let remaining_years = 90 - age;
        let remaining_weeks = remaining_years * 52;

        result.innerHTML = numberWithCommas(remaining_weeks);
    }
})

resetBtn.addEventListener('click', function() {
    refresh.click();
})
