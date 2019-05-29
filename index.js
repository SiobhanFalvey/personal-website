function showTextOne() {
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
            document.getElementById("section-one").style.display = "block";
        } else {
            document.getElementById("section-one").style.display = "none";
        }
}

function showTextTwo() {
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 100) {
            document.getElementById("section-two").style.display = "block";
        } else {
            document.getElementById("section-two").style.display = "none";
        }
}

function showTextThree() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 100) {
        document.getElementById("section-three").style.display = "block";
    } else {
        document.getElementById("section-three").style.display = "none";
    }
}

function showTextFour() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("section-four").style.display = "block";
    } else {
        document.getElementById("section-four").style.display = "none";
    }
}

function showTextFive() {
    if (document.body.scrollTop < 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("section-five").style.display = "block";
    } else {
        document.getElementById("section-five").style.display = "none";
    }
}