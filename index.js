// JS File (Add functions later)
// Create other functionality 

function changetoPic() {
    let image1 = document.getElementById("image1");
    let imageBtn = document.getElementById("imageBtn");

    if (imageBtn.dblclick = true) {
        image1.style.display = "block";
    }

}

function bringBackPics() {
    const allPics = document.querySelectorAll(".pics");
    for (let i = 0; i < allPics.length; i++) {
        allPics[i].style.display = "block";
        allPics[i].style.border = "5px solid red";
    }
}

function removeAllPics() {
    const allPics = document.querySelectorAll(".pics");
    for (let i = 0; i < allPics.length; i++) {
        allPics[i].style.display = "none";
    }
}

function followMe() {
    setTimeout(follow, 2000);
    setTimeout(writeStuff, 3000);
    setTimeout(disappear, 4000);
}

function follow() {
    let modal = document.getElementById("modal");

    modal.style.display = "block";
    modal.classList
    modal.add("modal");
}

function disappear() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

function writeStuff() {
    let modal = document.getElementById("modal");
    modal.style.border = "3px solid blue";
    modal.style.backgroundColor ="green";
    modal.innerHTML = "Bye Bye! &#128513;";
}
