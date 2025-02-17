let grade1 = document.querySelector(".g1 select");
let mark1 = document.querySelector(".ma1 select");
let grade2 = document.querySelector(".g2 select");
let mark2 = document.querySelector(".ma2 select");
let grade3 = document.querySelector(".g3 select");
let mark3 = document.querySelector(".ma3 select");
let grade4 = document.querySelector(".g4 select");
let mark4 = document.querySelector(".ma4 select");
let grade5 = document.querySelector(".g5 select");
let mark5 = document.querySelector(".ma5 select");
let grade6 = document.querySelector(".g6 select");
let mark6 = document.querySelector(".ma6 select");
let grade7 = document.querySelector(".g7 select");
let mark7 = document.querySelector(".ma7 select");
let grade8 = document.querySelector(".g8 select");
let mark8 = document.querySelector(".ma8 select");

let s1 = document.querySelector(".s1");
let s2 = document.querySelector(".s2");
let s3 = document.querySelector(".s3");
let s4 = document.querySelector(".s4");
let s5 = document.querySelector(".s5");
let s6 = document.querySelector(".s6");
let s7 = document.querySelector(".s7");
let s8 = document.querySelector(".s8");

let header = document.querySelector(".header");
let refresh = document.querySelector(".refresh");
let refresh2 = document.querySelector(".m2 button");
let result1 = document.querySelector(".result");
let result = document.querySelector(".m3 p");
let calculate = document.querySelector(".m4 button");
let ask = document.querySelector(".ask");
let mod1 = document.querySelector(".grade select");
let mod2 = document.querySelector(".mark select");
let ask1 = document.querySelector(".m5 input");


ask.classList.remove("hide");
header.classList.remove("m6");
refresh.classList.add("hide1");
s1.classList.add("hide");
s2.classList.add("hide");
s3.classList.add("hide");
s4.classList.add("hide");
s5.classList.add("hide");
s6.classList.add("hide");
s7.classList.add("hide");
s8.classList.add("hide");
calculate.classList.add("hide");
result1.classList.add("hide");


function hiding() {
    ask.classList.add("hide");
}

ask1.addEventListener("input", function () {
    let ask2 = parseInt(ask1.value) || 0;
    refresh.classList.remove("hide1");
    header.classList.add("m6");


    switch (ask2) {
        case 1:
            s1.classList.remove("hide");
            calculate.classList.remove("hide");
            result1.classList.remove("hide");
            break;

        case 2:
            s1.classList.remove("hide");
            s2.classList.remove("hide");
            calculate.classList.remove("hide");
            result1.classList.remove("hide");
            break;

        case 3:
            s1.classList.remove("hide");
            s2.classList.remove("hide");
            s3.classList.remove("hide");
            calculate.classList.remove("hide");
            result1.classList.remove("hide");
            break;

        case 4:
            s1.classList.remove("hide");
            s2.classList.remove("hide");
            s3.classList.remove("hide");
            s4.classList.remove("hide");
            calculate.classList.remove("hide");
            result1.classList.remove("hide");
            break;

        case 5:
            s1.classList.remove("hide");
            s2.classList.remove("hide");
            s3.classList.remove("hide");
            s4.classList.remove("hide");
            s5.classList.remove("hide");
            calculate.classList.remove("hide");
            result1.classList.remove("hide");
            break;

        case 6:
            s1.classList.remove("hide");
            s2.classList.remove("hide");
            s3.classList.remove("hide");
            s4.classList.remove("hide");
            s5.classList.remove("hide");
            s6.classList.remove("hide");
            calculate.classList.remove("hide");
            result1.classList.remove("hide");
            break;

        case 7:
            s1.classList.remove("hide");
            s2.classList.remove("hide");
            s3.classList.remove("hide");
            s4.classList.remove("hide");
            s5.classList.remove("hide");
            s6.classList.remove("hide");
            s7.classList.remove("hide");
            calculate.classList.remove("hide");
            result1.classList.remove("hide");
            break;

        case 8:
            s1.classList.remove("hide");
            s2.classList.remove("hide");
            s3.classList.remove("hide");
            s4.classList.remove("hide");
            s5.classList.remove("hide");
            s6.classList.remove("hide");
            s7.classList.remove("hide");
            s8.classList.remove("hide");
            calculate.classList.remove("hide");
            result1.classList.remove("hide");
            break;
            
            default :
            result1.classList.remove("hide");
            result.innerHTML = `Please Enter Valid numbers (1-8)`;


    }
});

mod1.addEventListener('click', hiding);
mod2.addEventListener('click', hiding);

function displayresult() {
    let g11 = parseFloat(grade1.value) || 0;
    let m11 = parseFloat(mark1.value) || 0;
    let g22 = parseFloat(grade2.value) || 0;
    let m22 = parseFloat(mark2.value) || 0;
    let g33 = parseFloat(grade3.value) || 0;
    let m33 = parseFloat(mark3.value) || 0;
    let g44 = parseFloat(grade4.value) || 0;
    let m44 = parseFloat(mark4.value) || 0;
    let g55 = parseFloat(grade5.value) || 0;
    let m55 = parseFloat(mark5.value) || 0;
    let g66 = parseFloat(grade6.value) || 0;
    let m66 = parseFloat(mark6.value) || 0;
    let g77 = parseFloat(grade7.value) || 0;
    let m77 = parseFloat(mark7.value) || 0;
    let g88 = parseFloat(grade8.value) || 0;
    let m88 = parseFloat(mark8.value) || 0;

    let final = (g11 * m11) + (g22 * m22) + (g33 * m33) + (g44 * m44) + (g55 * m55) + (g66 * m66) + (g77 * m77) + (g88 * m88);

    if (final == 0) {
        result.innerHTML = `Select the grades and marks`;
        return;
    }

    final = final / (g11 + g22 + g33 + g44 + g55 + g66 + g77 + g88);
    result.innerHTML = `Your CGPA is ${final}`;
}

calculate.addEventListener('click', displayresult);


function refresh1() {
    location.reload();
}

refresh2.addEventListener('click', refresh1);
