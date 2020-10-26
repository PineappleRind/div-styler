        function showModal() {
            let overlay = document.getElementById("overlay");
            overlay.style.bottom = '0';
        }

        function hideModal() {
            let overlay = document.getElementById("overlay");
            overlay.style.bottom = '100%';
        }

        function divFunction() {
            let divHeight = document.getElementById("height");
            let divWidth = document.getElementById("width");
            let divBorderRadius = document.getElementById("borderRadius");
            let divBgColor = document.getElementById("color");
            let divRotate = document.getElementById("rotate");

            let divBorderThickness = document.getElementById("borderThickness");
            let divBorderColor = document.getElementById("borderColor");

            let div = document.getElementById("div");

            div.style.height = divHeight.value * 5 + "px";
            div.style.width = divWidth.value * 5 + "px";
            div.style.borderRadius = divBorderRadius.value * 2 + "px";
            div.style.borderWidth = divBorderThickness.value/4 + "px";
            div.style.backgroundColor = divBgColor.value;
            div.style.borderColor = divBorderColor.value;
            div.style.transform = 'rotateZ(' + Math.ceil(divRotate.value * 3.6) + "deg";

            if (divBorderRadius.value === 100) {
                div.style.borderRadius = '50%';
            } else {
                div.style.borderRadius = divBorderRadius.value * 2 + "px";
            }

            let divBorderSolid = document.getElementById('borderSolid');
            let divBorderDashed = document.getElementById('borderDashed');
            let divBorderDotted = document.getElementById('borderDotted');
            let divBorderDouble = document.getElementById('borderDouble');

            let divFontSize = document.getElementById('fontSize');
            div.style.fontSize = divFontSize.value/1.1 + 'px';

            let inputFont = document.getElementById('fontFamilyCustom').value;
            let inputFontError = document.getElementById('fontFamilyCustomError');

            if (inputFont === 'Noto Sans JP' || inputFont === 'noto sans' ) {
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
            } 

            if (inputFont != 'Noto Sans JP' || inputFont != 'noto sans' || inputFont != 'Zapfino' || inputFont != 'Verdana' || inputFont != 'Comic Sans MS' || inputFont != 'Times New Roman' || inputFont != 'Georgia' || inputFont != 'Courier' || inputFont != 'Helvetica' || inputFont != '') {
                inputFontError.style.display = 'block';
            } else {
                inputFontError.style.display = 'none';
            }

            if (inputFont === 'Noto Sans JP' || inputFont === 'noto sans' || inputFont === 'Zapfino' || inputFont === 'Verdana' || inputFont === 'Comic Sans MS' || inputFont === 'Times New Roman' || inputFont === 'Georgia' || inputFont === 'Courier' || inputFont === 'Helvetica' || inputFont === '') {
                inputFontError.style.display = 'none';
            }

            let divFontColor = document.getElementById("fontColor");
            div.style.color = divFontColor.value;


            let height = document.getElementById("heightCode");
            let width = document.getElementById("widthCode");
            let bg = document.getElementById("bgColorCode");
            let borderStyle = document.getElementById("borderStyleCode");
            let borderColor = document.getElementById("borderColorCode");
            let borderRadius = document.getElementById('borderRadiusCode');
            let borderThickness = document.getElementById('borderThicknessCode');
            let fontSize = document.getElementById('fontSizeCode');
            let rotate = document.getElementById('rotateCode');
            let fontFamily = document.getElementById('fontFamilyCode');

            bg.innerHTML = divBgColor.value;
            height.innerHTML = divHeight.value * 5 + "px";
            width.innerHTML = divWidth.value * 5 + "px";
            borderColor.innerHTML = divBorderColor.value;
            borderRadius.innerHTML = divBorderRadius.value * 2 + "px";
            borderThickness.innerHTML = Math.ceil(divBorderThickness.value/4) + "px";
            fontSize.innerHTML = Math.floor(divFontSize.value/1.1) + 'px';
            rotate.innerHTML = Math.ceil(divRotate.value * 3.6) + "deg";
            fontFamily.innerHTML = div.style.fontFamily;


            if (divBorderDashed.checked === true) {
                div.style.borderStyle = 'dashed';
                borderStyle.innerHTML = 'dashed';
            } else if (divBorderDotted.checked === true) {
                div.style.borderStyle = 'dotted';
                borderStyle.innerHTML = 'dotted';
            } else if (divBorderDouble.checked === true) {
                div.style.borderStyle = 'double';
                borderStyle.innerHTML = 'double';
            } else {
                div.style.borderStyle = 'solid';
                borderStyle.innerHTML = 'solid';
            }

            let divFontBold = document.getElementById("fontBold");
            let divFontItalic = document.getElementById("fontItalic");
            let divFontUnderline = document.getElementById("fontUnderline");

            if (divFontBold.checked === true) {
                div.style.fontWeight = '900';
            } else if (divFontItalic.checked === true) {
                div.style.fontStyle = 'italic';
            } else if (divFontUnderline.checked === true) {
                div.style.textDecoration = 'underline';
            } else if (divFontBold.checked === false) {
                div.style.fontWeight = '400';
            } else {
                div.style.fontWeight = '400';
                div.style.fontStyle = 'normal';
                div.style.textDecoration = 'none';
            }
        }

        function updateContent() {
            let div = document.getElementById("div");
            let input = document.getElementById("divContent");

            div.textContent = input.value;
        }

        setInterval(function(){
            divFunction();
        },1000);
