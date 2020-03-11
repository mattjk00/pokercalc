calculate();

function calculate() {
    
    let p = document.getElementById("p").value;
    let s = document.getElementById("s").value;
    let n = document.getElementById("n").value;

    // r = [(1 + 2*S/P) ^(1/n) - 1]/2
    let r = ((1 + 2 * s/p) ^ (1/n) - 1)/2;
    
    let ansEle = document.getElementById("ans");
    ansEle.innerHTML = "r = " + r;
    if (n == 2) {
        ansEle.innerHTML += formGeoBets([
            r * p,
            (2 * (r * p) + p) * r
        ]);
    } else if (n == 3) {
        ansEle.innerHTML += formGeoBets([
            r * p,
            (2 * (r * p) + p) * r,
            ((2 * (r * p) + p) * r) * r
        ]);
    }
    return r;
}

function formGeoBets(vals) {
    let str = "";
    for (let i = 0; i < vals.length; i++) {
        str += "<br/>" + (i + 1) + " geo bet = " + vals[i];
    }
    return str;
}