
const myBtn1 = document.querySelector(".btn1")
const myBtn2 = document.querySelector(".btn2")
let result = document.createElement("button")
myBtn1.insertAdjacentElement("afterend", result);




let count = 0;
myBtn1.addEventListener("click", function (event) {
    count += 1;
    result.innerHTML = count;
})

myBtn2.addEventListener("click", function (event) {
    count -= 1;
    result.innerHTML = count;


})

