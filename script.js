let btn = document.getElementsByTagName("button")[0];
let h = document.getElementsByTagName("h1")[0];
let res = '98';
function roll() {
    let i = 1;
    setInterval(() => {
        if (i <= 11) {
            let r = Math.ceil((Math.random() * 6) * 1);
            let ans = res + (r + 55);
            h.innerHTML = "&#" + ans;
            i++;
        }
    }, 100);
}