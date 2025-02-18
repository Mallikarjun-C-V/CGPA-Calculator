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

let ss1 = document.querySelector(".ss1");
let ss2 = document.querySelector(".ss2");
let ss3 = document.querySelector(".ss3");
let ss4 = document.querySelector(".ss4");
let ss5 = document.querySelector(".ss5");
let ss6 = document.querySelector(".ss6");
let ss7 = document.querySelector(".ss7");
let ss8 = document.querySelector(".ss8");

let header = document.querySelector(".header");
let refresh = document.querySelector(".refresh");
let refresh2 = document.querySelector(".m2 button");
let result1 = document.querySelector(".result");
let result = document.querySelector(".m3 p");
let c1 = document.querySelector(".m10 button");
let c2 = document.querySelector(".m11 button");
let ask = document.querySelector(".ask");
let mod1 = document.querySelector(".grade select");
let mod2 = document.querySelector(".mark select");
let ask1 = document.querySelector(".m5 input");

let maa1 = document.querySelector(".maa1 select");
let maa2 = document.querySelector(".maa2 select");
let maa3 = document.querySelector(".maa3 select");
let maa4 = document.querySelector(".maa4 select");
let maa5 = document.querySelector(".maa5 select");
let maa6 = document.querySelector(".maa6 select");
let maa7 = document.querySelector(".maa7 select");
let maa8 = document.querySelector(".maa8 select");


let sem = document.querySelector(".sem button");
let others = document.querySelector(".others button");
let choice = document.querySelector(".choice");


ask.classList.add("hide");
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
c1.classList.add("hide");
c2.classList.add("hide");
result1.classList.add("hide");


// sem marks allotment

ss1.classList.add("hide");
ss2.classList.add("hide");
ss3.classList.add("hide");
ss4.classList.add("hide");
ss5.classList.add("hide");
ss6.classList.add("hide");
ss7.classList.add("hide");
ss8.classList.add("hide");
choice.classList.remove("hide");


function sem1() {
    choice.classList.add("hide");

    refresh.classList.remove("hide1");

    ss1.classList.remove("hide");
    ss2.classList.remove("hide");
    ss3.classList.remove("hide");
    ss4.classList.remove("hide");
    ss5.classList.remove("hide");
    ss6.classList.remove("hide");
    ss7.classList.remove("hide");
    ss8.classList.remove("hide");

    c2.classList.remove("hide");
    // result1.classList.remove("hide");

}
sem.addEventListener('click', sem1);


function displayresult1() {
    mm1 = parseFloat(maa1.value) || 0;
    mm2 = parseFloat(maa2.value) || 0;
    mm3 = parseFloat(maa3.value) || 0;
    mm4 = parseFloat(maa4.value) || 0;
    mm5 = parseFloat(maa5.value) || 0;
    mm6 = parseFloat(maa6.value) || 0;
    mm7 = parseFloat(maa7.value) || 0;
    mm8 = parseFloat(maa8.value) || 0;

    if (mm1 && mm2 && mm3 && mm4 && mm5 && mm6 && mm7 && mm8) {
        mmm1 = (mm1 * 4) + (mm2 * 3) + (mm3 * 4) + (mm4 * 3) + (mm5 * 3) + (mm6 * 1) + (mm7 * 1) + (mm8 * 1);

        mmm2 = mmm1 / 20;

        result1.classList.remove("hide");

        result.innerHTML = `Your CGPA is ${mmm2}`;

    }

    else {
        result1.classList.remove("hide");

        result.innerHTML = `Please Enter All the marks`;
    }
}
c2.addEventListener('click', displayresult1);

// sem marks allotment completed



// others marks allotment

function input10() {
    let ask2 = parseInt(ask1.value) || 0;
    refresh.classList.remove("hide1");
    header.classList.add("m6");

    switch (ask2) {
        case 1:
            s1.classList.remove("hide");
            c1.classList.remove("hide");
            break;

        case 2:
            s1.classList.remove("hide");
            s2.classList.remove("hide");
            c1.classList.remove("hide");
            break;

        case 3:
            s1.classList.remove("hide");
            s2.classList.remove("hide");
            s3.classList.remove("hide");
            c1.classList.remove("hide");
            break;

        case 4:
            s1.classList.remove("hide");
            s2.classList.remove("hide");
            s3.classList.remove("hide");
            s4.classList.remove("hide");
            c1.classList.remove("hide");
            break;

        case 5:
            s1.classList.remove("hide");
            s2.classList.remove("hide");
            s3.classList.remove("hide");
            s4.classList.remove("hide");
            s5.classList.remove("hide");
            c1.classList.remove("hide");
            break;

        case 6:
            s1.classList.remove("hide");
            s2.classList.remove("hide");
            s3.classList.remove("hide");
            s4.classList.remove("hide");
            s5.classList.remove("hide");
            s6.classList.remove("hide");
            c1.classList.remove("hide");
            break;

        case 7:
            s1.classList.remove("hide");
            s2.classList.remove("hide");
            s3.classList.remove("hide");
            s4.classList.remove("hide");
            s5.classList.remove("hide");
            s6.classList.remove("hide");
            s7.classList.remove("hide");
            c1.classList.remove("hide");
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
            c1.classList.remove("hide");
            break;

        default:
            result1.classList.remove("hide");
            result.innerHTML = `Please Enter Valid numbers (1-8)`;

    }
};
ask1.addEventListener("input", input10);


function new1() {
    choice.classList.add("hide");
    ask.classList.remove("hide");
}
others.addEventListener('click', new1);


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
        result1.classList.remove("hide");

        result.innerHTML = `Select the grades and marks`;
        return;
    }

    final = final / (g11 + g22 + g33 + g44 + g55 + g66 + g77 + g88);
    result1.classList.remove("hide");

    result.innerHTML = `Your CGPA is ${final}`;

}
c1.addEventListener('click', displayresult);

// others marks allotment is over

function hiding() {
    ask.classList.add("hide");
}

mod1.addEventListener('click', hiding);
mod2.addEventListener('click', hiding);



function refresh1() {
    location.reload();
}
refresh2.addEventListener('click', refresh1);
