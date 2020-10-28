function divFunction() {
    let divHeight = document.getElementById("height");
    let divWidth = document.getElementById("width");
    let divBorderRadius = document.getElementById("borderRadius");
    let divBgColor = document.getElementById("color");
    let divRotate = document.getElementById("rotate");
    let divSkew = document.getElementById('skew');

    let divBorderThickness = document.getElementById("borderThickness");
    let divBorderColor = document.getElementById("borderColor");

    let div = document.getElementById("div");

    div.style.height = divHeight.value * 5 + "px";
    div.style.width = divWidth.value * 5 + "px";
    div.style.borderRadius = divBorderRadius.value * 2 + "px";
    div.style.borderWidth = divBorderThickness.value / 4 + "px";
    div.style.backgroundColor = divBgColor.value;
    div.style.borderColor = divBorderColor.value;
    div.style.transform = 'rotateZ(' + Math.ceil(divRotate.value * 3.6) + "deg) " + 'skewX(' + Math.floor((divSkew.value / 5) - 10) + 'deg';

    if (divBorderRadius.value === 100) {
        div.style.borderRadius = '50%';
    } else {
        div.style.borderRadius = divBorderRadius.value * 2 + "px";
    }



    let divFontSize = document.getElementById('fontSize');
    div.style.fontSize = divFontSize.value / 1.1 + 'px';

    let inputFont = document.getElementById('fontFamilyCustom').value;
    let inputFontError = document.getElementById('fontFamilyCustomError');

    if (inputFont === 'Noto Sans JP' || inputFont === 'noto sans') {
        div.style.fontFamily = 'Noto Sans JP, sans-serif'
    } else if (inputFont === 'Zapfino') {
        div.style.fontFamily = 'Zapfino, cursive'
    } else if (inputFont === 'Verdana') {
        div.style.fontFamily = 'Verdana, sans-serif'
    } else if (inputFont === 'Comic Sans MS') {
        div.style.fontFamily = 'Comic Sans MS, cursive'
    } else if (inputFont === 'Times New Roman') {
        div.style.fontFamily = 'Times New Roman, serif'
    } else if (inputFont === 'Georgia') {
        div.style.fontFamily = 'Georgia, serif'
    } else if (inputFont === 'Courier') {
        div.style.fontFamily = 'Courier, monospace'
    } else if (inputFont === 'Helvetica') {
        div.style.fontFamily = 'Helvetica, sans-serif'
    } else if (inputFont === 'Grandstander') {
        div.style.fontFamily = 'Grandstander, sans-serif'
    }

    if (inputFont != 'Noto Sans JP' || inputFont != 'noto sans' || inputFont != 'Zapfino' || inputFont != 'Verdana' || inputFont != 'Comic Sans MS' || inputFont != 'Times New Roman' || inputFont != 'Georgia' || inputFont != 'Courier' || inputFont != 'Helvetica' || inputFont != 'Grandstander' || inputFont != '') {
        inputFontError.style.display = 'block';
    } else {
        inputFontError.style.display = 'none';
    }

    if (inputFont === 'Noto Sans JP' || inputFont === 'noto sans' || inputFont === 'Zapfino' || inputFont === 'Verdana' || inputFont === 'Comic Sans MS' || inputFont === 'Times New Roman' || inputFont === 'Georgia' || inputFont === 'Courier' || inputFont === 'Helvetica' || inputFont === '' || inputFont === 'Grandstander') {
        inputFontError.style.display = 'none';
    }

    let divFontColor = document.getElementById("fontColor");
    div.style.color = divFontColor.value;


    let height = document.getElementById("heightCode");
    let width = document.getElementById("widthCode");
    let bg = document.getElementById("bgColorCode");
    let borderColor = document.getElementById("borderColorCode");
    let borderRadius = document.getElementById('borderRadiusCode');
    let borderThickness = document.getElementById('borderThicknessCode');
    let fontSize = document.getElementById('fontSizeCode');
    let rotate = document.getElementById('rotateCode');
    let skew = document.getElementById('skewCode');
    let fontFamily = document.getElementById('fontFamilyCode');

    bg.innerHTML = divBgColor.value;
    height.innerHTML = divHeight.value * 5 + "px";
    width.innerHTML = divWidth.value * 5 + "px";
    borderColor.innerHTML = divBorderColor.value;
    borderRadius.innerHTML = divBorderRadius.value * 2 + "px";
    borderThickness.innerHTML = Math.ceil(divBorderThickness.value / 4) + "px";
    fontSize.innerHTML = Math.floor(divFontSize.value / 1.1) + 'px';
    rotate.innerHTML = Math.ceil(divRotate.value * 3.6) + "deg";
    fontFamily.innerHTML = div.style.fontFamily;
    skew.innerHtml = (divSkew.value / 5) - 10;
}

function changeOpacity() {
    adjustContainer.style.opacity = 0.6;
    setTimeout(function() {
        adjustContainer.style.opacity = 1;
    }, 1000);
}

let inputColor = document.getElementById('bodyBgColor');

function changeBgColor() {
    let body = document.getElementById('body');
    body.style.backgroundColor = inputColor.value;
}

function changeBorderStyle() {
    let div = document.getElementById("div");

    let divBorderSolid = document.getElementById('borderSolid');
    let divBorderDashed = document.getElementById('borderDashed');
    let divBorderDotted = document.getElementById('borderDotted');
    let borderStyle = document.getElementById("borderStyleCode");
    let divBorderDouble = document.getElementById('borderDouble');

    if (divBorderDashed.checked === true) {
        div.style.borderStyle = 'dashed';
        borderStyle.innerHTML = 'dashed';
    } else if (divBorderDotted.checked === true) {
        div.style.borderStyle = 'dotted';
        borderStyle.innerHTML = 'dotted';
    } else if (divBorderDouble.checked === true) {
        div.style.borderStyle = 'double';
        borderStyle.innerHTML = 'double';
    } else if (divBorderSolid.checked === true) {
        div.style.borderStyle = 'solid';
        borderStyle.innerHTML = 'solid';
    }
}

function reset() {
    window.location.href = "https://div-styler.netlify.app";
}

function updateContent() {
    let div = document.getElementById("div");
    let input = document.getElementById("divContent");

    div.textContent = input.value;
}

let code = document.getElementById('cssCode');

function hideCSSCode() {
    let icon = document.getElementById('closeCode');

    if (code.style.opacity !== '0') {
        code.style.opacity = '0';
        setTimeout(function() {
            code.style.display = 'none';
        }, 1000)
    } else {
        code.style.height = '250px';
        icon.innerHTML = '&times;'
    }
}

function minCSSCode() {
    let minIcon = document.getElementById('minCode')
    if (code.style.height != '60px') {
        code.style.height = '60px';
        minIcon.innerHTML = '&uarr;';
    } else {
        code.style.height = '250px';
        minIcon.innerHTML = '&darr;';
    }
}

let openButton = document.getElementById("mobileOpenControls");
let adjustContainer = document.getElementById('adjustContainer');
let mql = window.matchMedia('(max-width: 700px)');

function mobileOpen() {
    if (adjustContainer.style.left === '0px') { // if it's invisible
        adjustContainer.style.left = '100%'; // make it visible
        openButton.innerHTML = 'Show controls';
    } else {
        adjustContainer.style.left = '0px';
        openButton.innerHTML = 'Hide controls';
    }
}

if (mql.matches) {
    openButton.addEventListener("click", function() {
        mobileOpen();
    })
}

let resetBtn = document.getElementById("resetButton");
resetBtn.addEventListener("click", function() {
    reset();
});

let randomBtn = document.getElementById("random");
randomBtn.addEventListener("click", function() {
    random();
    changeOpacity();
});

inputColor.addEventListener("input", function() {
    changeBgColor();
});

body.addEventListener("input", function() {
    changeBorderStyle();
    changeOpacity();
})

setInterval(function() {
    divFunction();
}, 10)