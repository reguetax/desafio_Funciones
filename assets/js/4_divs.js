let box_one = document.querySelector("#box_one");
let box_two = document.querySelector("#box_two");
let box_three = document.querySelector("#box_three");
let box_four = document.querySelector("#box_four");
let color = "fuchsia";



document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "pink";
    } else if (event.key === 's') {
        color = "darkblue"
    } else if (event.key === 'd') {
        color = "darkred"
    }
});

const pintar = function(elemento){
    elemento.style.backgroundColor= color;
}


box_one.addEventListener("click", () => {
    pintar(box_one);
});

box_two.addEventListener("click", () => {
    pintar(box_two);
});

box_three.addEventListener("click", () => {
    pintar(box_three);
});

box_four.addEventListener("click", () => {
    pintar(box_four);
});
