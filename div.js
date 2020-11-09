/* JavaScript by PineappleRind 2020*/
function divFunction() { let e = document.getElementById("height"),
        t = document.getElementById("width"),
        n = document.getElementById("borderRadius"),
        o = document.getElementById("color"),
        d = document.getElementById("rotate"),
        l = document.getElementById("skew"),
        a = document.getElementById("opacity"),
        i = document.getElementById("borderThickness"),
        r = document.getElementById("borderColor"),
        m = document.getElementById("div");
    m.style.height = 5 * e.value + "px", m.style.width = 5 * t.value + "px", m.style.borderRadius = 2 * n.value + "px", m.style.borderWidth = i.value / 4 + "px", m.style.backgroundColor = o.value, m.style.borderColor = r.value, m.style.transform = "rotateZ(" + Math.ceil(3.6 * d.value) + "deg) skewX(" + Math.floor(l.value / 5 - 10) + "deg", m.style.opacity = a.value / 100, 100 === n.value ? m.style.borderRadius = "50%" : m.style.borderRadius = 2 * n.value + "px"; let c = document.getElementById("fontSize");
    m.style.fontSize = c.value / 1.1 + "px"; let s = document.getElementById("fontShadowEnable"),
        u = document.getElementById("fontShadowX"),
        y = document.getElementById("fontShadowY"),
        g = document.getElementById("fontShadowColor"),
        f = document.getElementById("fontShadowBlur");!0 === s.checked ? m.style.textShadow = u.value / 10 - 5 + "px " + y.value / 10 + "px " + f.value / 5 + "px " + g.value : m.style.textShadow = ""; let C = document.getElementById("fontFamilyCustom").value,
        B = document.getElementById("fontFamilyCustomError"); "Noto Sans JP" === C || "noto sans" === C ? m.style.fontFamily = "Noto Sans JP, sans-serif" : "Zapfino" === C ? m.style.fontFamily = "Zapfino, cursive" : "Verdana" === C ? m.style.fontFamily = "Verdana, sans-serif" : "Comic Sans MS" === C ? m.style.fontFamily = "Comic Sans MS, cursive" : "Times New Roman" === C ? m.style.fontFamily = "Times New Roman, serif" : "Georgia" === C ? m.style.fontFamily = "Georgia, serif" : "Courier" === C ? m.style.fontFamily = "Courier, monospace" : "Helvetica" === C ? m.style.fontFamily = "Helvetica, sans-serif" : "Grandstander" === C && (m.style.fontFamily = "Grandstander, sans-serif"), B.style.display = "Noto Sans JP" != C || "noto sans" != C || "Zapfino" != C || "Verdana" != C || "Comic Sans MS" != C || "Times New Roman" != C || "Georgia" != C || "Courier" != C || "Helvetica" != C || "Grandstander" != C || "" != C ? "block" : "none", "Noto Sans JP" !== C && "noto sans" !== C && "Zapfino" !== C && "Verdana" !== C && "Comic Sans MS" !== C && "Times New Roman" !== C && "Georgia" !== C && "Courier" !== C && "Helvetica" !== C && "" !== C && "Grandstander" !== C || (B.style.display = "none"); let h = document.getElementById("fontColor");
    m.style.color = h.value; let v = document.getElementById("heightCode"),
        E = document.getElementById("widthCode"),
        p = document.getElementById("bgColorCode"),
        I = document.getElementById("borderColorCode"),
        b = document.getElementById("borderRadiusCode"),
        M = document.getElementById("borderThicknessCode"),
        S = document.getElementById("fontSizeCode"),
        T = document.getElementById("rotateCode"),
        w = document.getElementById("skewCode"),
        x = document.getElementById("fontFamilyCode"),
        k = document.getElementById("textShadowXCode"),
        L = document.getElementById("textShadowYCode"),
        H = document.getElementById("textShadowColorCode"),
        F = document.getElementById("textShadowBlurCode");
    p.innerHTML = o.value, v.innerHTML = 5 * e.value + "px", E.innerHTML = 5 * t.value + "px", I.innerHTML = r.value, b.innerHTML = 2 * n.value + "px", M.innerHTML = Math.ceil(i.value / 4) + "px", S.innerHTML = Math.floor(c.value / 1.1) + "px", T.innerHTML = Math.ceil(3.6 * d.value) + "deg", x.innerHTML = m.style.fontFamily, w.innerHTML = Math.ceil(l.value / 5) - 10 + "deg", k.innerHTML = Math.round(u.value / 10 - 5) + "px ", L.innerHTML = Math.round(y.value / 10 - 5) + "px ", H.innerHTML = g.value, F.innerHTML = f.value / 5 + "px " }
let inputColor = document.getElementById("bodyBgColor");

function changeBgColor() { document.getElementById("body").style.backgroundColor = inputColor.value }

function changeBorderStyle() { let e = document.getElementById("div"),
        t = document.getElementById("borderSolid"),
        n = document.getElementById("borderDashed"),
        o = document.getElementById("borderDotted"),
        d = document.getElementById("borderStyleCode"),
        l = document.getElementById("borderDouble");!0 === n.checked ? (e.style.borderStyle = "dashed", d.innerHTML = "dashed") : !0 === o.checked ? (e.style.borderStyle = "dotted", d.innerHTML = "dotted") : !0 === l.checked ? (e.style.borderStyle = "double", d.innerHTML = "double") : !0 === t.checked && (e.style.borderStyle = "solid", d.innerHTML = "solid") }

function reset() { window.location.href = "https://div-styler.netlify.app" }

function updateContent() { let e = document.getElementById("div"),
        t = document.getElementById("divContent");
    e.textContent = t.value }
let code = document.getElementById("cssCode");

function hideCSSCode() { let e = document.getElementById("closeCode"); "0" !== code.style.opacity ? (code.style.opacity = "0", setTimeout(function() { code.style.display = "none" }, 1e3)) : (code.style.height = "300px", e.innerHTML = "&times;") }

function minCSSCode() { let e = document.getElementById("minCode"); "60px" != code.style.height ? (code.style.height = "60px", e.style.transform = "rotateX(180deg)", e.style.transition = "0.5s") : (code.style.height = "300px", e.style.transform = "rotateX(0deg)", e.style.transition = "0.5s") }

function switchCSSCode() {}

function randomBgColor() { document.getElementById("body").style.backgroundColor = getRandomDarkColor() }

function getRandomColor() { for (var e = "#", t = 0; t < 6; t++) e += "0123456789ABCDEF" [Math.floor(16 * Math.random())]; return e }

function getRandomDarkColor() { for (var e = "#", t = 0; t < 6; t++) e += "0123456789" [Math.floor(9 * Math.random())]; return e }
let fontCode = document.getElementById("fontCode"),
    divCode = document.getElementById("divCode"),
    divButton = document.getElementById("divCodeButton"),
    fontButton = document.getElementById("fontCodeButton");

function switchToDiv() { divCode.style.display = "block", divButton.style.backgroundColor = "rgb(91, 106, 243)", fontButton.style.backgroundColor = "", fontCode.style.animationName = "switch-back-from-right", divCode.style.animationName = "switch-back-from-left", setTimeout(function() { fontCode.style.display = "none", fontCode.style.animationName = "", divCode.style.animationName = "" }, 500) }

function switchToFont() { fontCode.style.display = "block", divButton.style.backgroundColor = "", fontButton.style.backgroundColor = "rgb(91, 106, 243)", divCode.style.display = "block", divCode.style.animationName = "switch-from-left", fontCode.style.animationName = "switch", setTimeout(function() { divCode.style.display = "none", divCode.style.animationName = "", fontCode.style.animationName = "" }, 500) }
let openButton = document.getElementById("mobileOpenControls"),
    adjustContainer = document.getElementById("adjustContainer"),
    mql = window.matchMedia("(max-width: 700px)");

function mobileOpen() { "0px" === adjustContainer.style.left ? (adjustContainer.style.left = "100%", openButton.innerHTML = "Show controls") : (adjustContainer.style.left = "0px", openButton.innerHTML = "Hide controls") }
if (mql.matches) {
    function changeOpacity() { adjustContainer.style.opacity = .6, setTimeout(function() { adjustContainer.style.opacity = 1 }, 1e3) }
    openButton.addEventListener("click", function() { mobileOpen() }), body.addEventListener("input", function() { changeOpacity() }), document.getElementById("random").addEventListener("click", function() { changeOpacity() }) }

function contactMe() { let e = document.getElementById("flexOverlay"),
        t = document.getElementById("contactModal"); "1" !== e.style.opacity ? (e.style.display = "flex", e.style.opacity = "1", t.style.animationName = "float-in") : (e.style.opacity = "0", setTimeout(function() { e.style.display = "none" }, 1e3)) }
let modalTrig = document.getElementById("modalTrigger");
modalTrig.addEventListener("click", function() { contactMe() });
let resetBtn = document.getElementById("resetButton");
resetBtn.addEventListener("click", function() { reset() });
let randomBtn = document.getElementById("random");
randomBtn.addEventListener("click", function() { random() }), inputColor.addEventListener("input", function() { changeBgColor() }), body.addEventListener("input", function() { changeBorderStyle() }), setInterval(function() { divFunction() }, 10), randomBgColor();