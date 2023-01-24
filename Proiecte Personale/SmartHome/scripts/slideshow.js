const images = document.getElementById("images");
let isImg1 = true;
let isImg2 = false;
let isImg3 = false;


function left() {
    if (isImg1) {
        document.getElementById("images").style = 'background: url("../images/home-automation/s2-img3.png") center/contain no-repeat';
        isImg3 = true;
        isImg1 = false;
    }
    else if (isImg2) {
        document.getElementById("images").style = 'background: url("../images/home-automation/s2-img1.png") center/contain no-repeat';
        isImg1 = true;
        isImg2 = false;
    }
    else if (isImg3) {
        document.getElementById("images").style = 'background: url("../images/home-automation/s2-img2.png") center/contain no-repeat';
        isImg3 = false;
        isImg2 = true;
    }
}

function right() {
    if (isImg1) {
        document.getElementById("images").style = 'background: url("../images/home-automation/s2-img2.png") center/contain no-repeat';
        isImg2 = true;
        isImg1 = false;
    }
    else if (isImg2) {
        document.getElementById("images").style = 'background: url("../images/home-automation/s2-img3.png") center/contain no-repeat';
        isImg3 = true;
        isImg2 = false;
    }
    else if (isImg3) {
        document.getElementById("images").style = 'background: url("../images/home-automation/s2-img1.png") center/contain no-repeat';
        isImg3 = false;
        isImg1 = true;
    }
}