/* JavaScript by PineappleRind 2020*/
function divFunction() {
    let divHeight = document.getElementById("height");
    let divWidth = document.getElementById("width");
    let divBorderRadius = document.getElementById("borderRadius");
    let divBgColor = document.getElementById("color");
    let divRotate = document.getElementById("rotate");
    let divSkew = document.getElementById('skew');
    let divOpacity = document.getElementById('opacity');

    let divShadowX = document.getElementById("boxShadowX");
    let divShadowY = document.getElementById("boxShadowY");
    let divShadowBlur = document.getElementById("boxShadowBlur");
    let divShadowColor = document.getElementById("boxShadowColor");

    let px = 'px ';

    let yy = divShadowY.value - 50 + px;
    let xx = divShadowX.value - 50 + px;
    let bb = divShadowBlur.value/1.5 + px;
    let cc = divShadowColor.value;

    let divBorderThickness = document.getElementById("borderThickness");
    let divBorderColor = document.getElementById("borderColor");

    let div = document.getElementById("div");

    div.style.height = divHeight.value * 5 + px;
    div.style.width = divWidth.value * 5 + px;
    div.style.borderRadius = divBorderRadius.value * 2 + px;
    div.style.borderWidth = divBorderThickness.value / 4 + px;
    div.style.backgroundColor = divBgColor.value;
    div.style.borderColor = divBorderColor.value;
    div.style.transform = 'rotateZ(' + Math.ceil(divRotate.value * 3.6) + "deg) " + 'skewX(' + Math.floor((divSkew.value / 5) - 10) + 'deg';
    div.style.opacity = divOpacity.value / 100;

    div.style.boxShadow = xx + yy + bb + cc;

    if (divBorderRadius.value === 100) {
        div.style.borderRadius = '50%';
    } else {
        div.style.borderRadius = divBorderRadius.value * 2 + "px";
    }



    let divFontSize = document.getElementById('fontSize');
    div.style.fontSize = divFontSize.value / 1.1 + 'px';

    let divFontShadowEnable = document.getElementById('fontShadowEnable');
    let divFontShadowX = document.getElementById('fontShadowX');
    let divFontShadowY = document.getElementById('fontShadowY');
    let divFontShadowColor = document.getElementById('fontShadowColor');
    let divFontShadowBlur = document.getElementById('fontShadowBlur')
    if (divFontShadowEnable.checked === true) {
        div.style.textShadow = divFontShadowX.value / 10 - 5 + 'px ' + divFontShadowY.value / 10 + 'px ' + divFontShadowBlur.value / 5 + 'px ' + divFontShadowColor.value;
    } else {
        div.style.textShadow = '';
    }
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
    let fontShadowX = document.getElementById('textShadowXCode');
    let fontShadowY = document.getElementById('textShadowYCode');
    let fontShadowColor = document.getElementById('textShadowColorCode');
    let fontShadowBlur = document.getElementById('textShadowBlurCode');

    bg.innerHTML = divBgColor.value;
    height.innerHTML = divHeight.value * 5 + "px";
    width.innerHTML = divWidth.value * 5 + "px";
    borderColor.innerHTML = divBorderColor.value;
    borderRadius.innerHTML = divBorderRadius.value * 2 + "px";
    borderThickness.innerHTML = Math.ceil(divBorderThickness.value / 4) + "px";
    fontSize.innerHTML = Math.floor(divFontSize.value / 1.1) + 'px';
    rotate.innerHTML = Math.ceil(divRotate.value * 3.6) + "deg";
    fontFamily.innerHTML = div.style.fontFamily;
    skew.innerHTML = Math.ceil(divSkew.value / 5) - 10 + "deg";
    fontShadowX.innerHTML = Math.round(divFontShadowX.value / 10 - 5) + 'px ';
    fontShadowY.innerHTML = Math.round(divFontShadowY.value / 10 - 5) + 'px ';
    fontShadowColor.innerHTML = divFontShadowColor.value;
    fontShadowBlur.innerHTML = divFontShadowBlur.value / 5 + 'px ';
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
        code.style.height = '300px';
        icon.innerHTML = '&times;'
    }
}

function minCSSCode() {
    let minIcon = document.getElementById('minCode')
    if (code.style.height != '60px') {
        code.style.height = '60px';
        minIcon.style.transform = 'rotateX(180deg)';
        minIcon.style.transition = '0.5s'
    } else {
        code.style.height = '300px';
        minIcon.style.transform = 'rotateX(0deg)';
        minIcon.style.transition = '0.5s'
    }
}

function switchCSSCode() {
    let divButton;
    let fontButton;
}

function randomBgColor() {
    let body = document.getElementById('body');
    body.style.backgroundColor = getRandomDarkColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomDarkColor() {
    var letters = '0123456789';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 9)];
    }
    return color;
}

let fontCode = document.getElementById('fontCode');
let divCode = document.getElementById('divCode');
let divButton = document.getElementById('divCodeButton');
let fontButton = document.getElementById('fontCodeButton');

function switchToDiv() {
    divCode.style.display = 'block';
    divButton.style.backgroundColor = 'rgb(91, 106, 243)';
    fontButton.style.backgroundColor = '';
    fontCode.style.animationName = 'switch-back-from-right';
    divCode.style.animationName = 'switch-back-from-left';
    setTimeout(function() {
        fontCode.style.display = 'none';
        fontCode.style.animationName = '';
        divCode.style.animationName = '';
    }, 500);
}

function switchToFont() {
    fontCode.style.display = 'block';
    divButton.style.backgroundColor = '';
    fontButton.style.backgroundColor = 'rgb(91, 106, 243)';
    divCode.style.display = 'block';

    divCode.style.animationName = 'switch-from-left';
    fontCode.style.animationName = 'switch';
    setTimeout(function() {
        divCode.style.display = 'none';
        divCode.style.animationName = '';
        fontCode.style.animationName = '';
    }, 500);
}

function main() {
    
    let yy = y.value - 50 + px;
    let xx = x.value - 50 + px;
    let bb = b.value/1.5 + px;
    let cc = c.value;

    r.style.boxShadow = xx + yy + bb + cc;
}

function showCode() {
    let o = document.getElementById('overlay');
    o.style.display = 'flex';
    o.style.opacity = '1';
    o.style.width = '100%';
}

function hideCode() {
    let o = document.getElementById('overlay');
    o.style.opacity = '0';
    o.style.width = '0%';
}

function updateCode() {
    let y = document.getElementById('yCoords');
    let x = document.getElementById('xCoords');
    let b = document.getElementById('blur');
    let c = document.getElementById('color');

    let yC = document.getElementById('ycode');
    let xC = document.getElementById('xcode');
    let bC = document.getElementById('blurcode');
    let cC = document.getElementById('colorcode');

    let px = 'px ';

    yC.innerHTML = Math.ceil(y.value - 50) + px;
    xC.innerHTML = Math.ceil(x.value - 50) + px;
    bC.innerHTML = Math.ceil(b.value/1.5) + px;
    cC.innerHTML = c.value;
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

    function changeOpacity() {
        adjustContainer.style.opacity = 0.6;
        setTimeout(function() {
            adjustContainer.style.opacity = 1;
        }, 1000);
    }

    body.addEventListener("input", function() {
        changeOpacity();
    });
    let randomBtn = document.getElementById("random");
    randomBtn.addEventListener("click", function() {
        changeOpacity();
    });
}

function contactMe() {
    let overlay = document.getElementById('flexOverlay');
    let modal = document.getElementById('contactModal');
    if (overlay.style.opacity !== '1') {
        overlay.style.display = 'flex';
        overlay.style.opacity = '1';
        modal.style.animationName = 'float-in';
    } else {
        overlay.style.opacity = '0';
        setTimeout(function() {
            overlay.style.display = 'none';
        }, 1000);
    }
}

let modalTrig = document.getElementById('modalTrigger');
modalTrig.addEventListener("click", function() {
    contactMe();
});

let resetBtn = document.getElementById("resetButton");
resetBtn.addEventListener("click", function() {
    reset();
});

let randomBtn = document.getElementById("random");
randomBtn.addEventListener("click", function() {
    random();
});

inputColor.addEventListener("input", function() {
    changeBgColor();
});

oninput = e => {
    changeBorderStyle();
}

setInterval(function() {
    divFunction();
}, 10)

randomBgColor();