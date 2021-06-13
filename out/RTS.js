'use strict';
function arraystuff(arr, value) {
    let below = 0;
    let above = 0;
    let equal = 0;
    for (let item of arr) {
        if (item < value) {
            below++;
        }
        else if (item > value) {
            above++;
        }
        else {
            equal++;
        }
    }
    console.log("above = ", above);
    console.log("below = ", below);
    console.log("equal = ", equal);
}
function stringstuff(s, n) {
    // bounds check
    if (n < 0 || n > s.length) {
        console.log("rotated string: error");
        return;
    }
    let r = s.substr(s.length - n);
    let f = r + s.substr(0, s.length - n);
    console.log("rotated string: ", f);
}
let arr = [0, 3, 5, 11, 45, 84, 384, 7, 7, 0, 2];
arraystuff(arr, 6);
stringstuff("CoolString", 4);
//# sourceMappingURL=RTS.js.map