let texto = document.querySelector("#rectangle");

function pintar(color = "green"){
    rectangle.style.backgroundColor = color;
}

pintar();

rectangle.addEventListener("click", () => {
    if(rectangle.style.backgroundColor == "green") {
        pintar("yellow");
    }
    else {
        pintar("green");
    }
});
