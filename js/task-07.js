const sizeControl = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

sizeControl.addEventListener("input", (event) => {
    textOutput.style.fontSize = sizeControl.value + 'px';
    console.log(sizeControl);
});
