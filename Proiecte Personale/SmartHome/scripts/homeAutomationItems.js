item1IsActive = false;
item2IsActive = false;
item3IsActive = false;
item4IsActive = false;
item5IsActive = false;
item6IsActive = false;
item7IsActive = false;
item8IsActive = false;

function activeItem1() {
    if (!item1IsActive) {
        item1IsActive = true;
        document.getElementById("s3-img1").style = 'transform: scale(1.3); z-index: 11;';
        document.querySelector("div.s3-img-black-screen").classList.remove("hidden");
    }
    else if (item1IsActive) {
        item1IsActive = false;
        document.getElementById("s3-img1").style = 'transform: scale(1)';
        document.querySelector("div.s3-img-black-screen").classList.add("hidden");
    }
}

function activeItem2() {
    if (!item2IsActive) {
        item2IsActive = true;
        document.getElementById("s3-img2").style = 'transform: scale(1.3); z-index: 11;';
        document.querySelector("div.s3-img-black-screen").classList.remove("hidden");
    }
    else if (item2IsActive) {
        item2IsActive = false;
        document.getElementById("s3-img2").style = 'transform: scale(1)';
        document.querySelector("div.s3-img-black-screen").classList.add("hidden");
    }
}

function activeItem3() {
    if (!item3IsActive) {
        item3IsActive = true;
        document.getElementById("s3-img3").style = 'transform: scale(1.3);z-index: 11;';
        document.querySelector("div.s3-img-black-screen").classList.remove("hidden");
    }
    else if (item3IsActive) {
        item3IsActive = false;
        document.getElementById("s3-img3").style = 'transform: scale(1)';
        document.querySelector("div.s3-img-black-screen").classList.add("hidden");
    }
}

function activeItem4() {
    if (!item4IsActive) {
        item4IsActive = true;
        document.getElementById("s3-img4").style = 'transform: scale(1.3);z-index: 11;';
        document.querySelector("div.s3-img-black-screen").classList.remove("hidden");
    }
    else if (item4IsActive) {
        item4IsActive = false;
        document.getElementById("s3-img4").style = 'transform: scale(1)';
        document.querySelector("div.s3-img-black-screen").classList.add("hidden");
    }
}

function activeItem5() {
    if (!item5IsActive) {
        item5IsActive = true;
        document.getElementById("s3-img5").style = 'transform: scale(1.3);z-index:11;';
        document.querySelector("div.s3-img-black-screen").classList.remove("hidden");
    }
    else if (item5IsActive) {
        item5IsActive = false;
        document.getElementById("s3-img5").style = 'transform: scale(1)';
        document.querySelector("div.s3-img-black-screen").classList.add("hidden");
    }
}

function activeItem6() {
    if (!item6IsActive) {
        item6IsActive = true;
        document.getElementById("s3-img6").style = 'transform: scale(1.3);z-index:11;';
        document.querySelector("div.s3-img-black-screen").classList.remove("hidden");
    }
    else if (item6IsActive) {
        item6IsActive = false;
        document.getElementById("s3-img6").style = 'transform: scale(1)';
        document.querySelector("div.s3-img-black-screen").classList.add("hidden");
    }
}

function activeItem7() {
    if (!item7IsActive) {
        item7IsActive = true;
        document.getElementById("s3-img7").style = 'transform: scale(1.3);z-index:11;';
        document.querySelector("div.s3-img-black-screen").classList.remove("hidden");
    }
    else if (item7IsActive) {
        item7IsActive = false;
        document.getElementById("s3-img7").style = 'transform: scale(1)';
        document.querySelector("div.s3-img-black-screen").classList.add("hidden");
    }
}

function activeItem8() {
    if (!item8IsActive) {
        item8IsActive = true;
        document.getElementById("s3-img8").style = 'transform: scale(1.3);z-index:11;';
        document.querySelector("div.s3-img-black-screen").classList.remove("hidden");
    }
    else if (item8IsActive) {
        item8IsActive = false;
        document.getElementById("s3-img8").style = 'transform: scale(1)';
        document.querySelector("div.s3-img-black-screen").classList.add("hidden");
    }
}