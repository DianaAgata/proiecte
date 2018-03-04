var index = 0;
changeImg();

function changeImg() {

    var i;
    var x = document.getElementsByClassName("pictures");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    index++;
    if (index > x.length) {
        index = 1;
    }
    x[index - 1].style.display = "block";
    setTimeout(changeImg, 2000);
}

function showMessage() {
    var name = document.getElementById("userName").value;
    if (name != "") {
        alert("Salut , " + name + " !" +
            " Ne bucuram ca iti doresti sa vizitezi una dintre aceste cetati. In fiecare dimineata ne intalnim in Piata Sfatului la ora 9:00 pentru a forma grupe separate in functie de cetatea aleasa. Te asteptam!"
        );
    }
}