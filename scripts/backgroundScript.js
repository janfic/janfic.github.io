/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function makeBackground() {
    var backgroundTilesHTML = "";
    var i;
    var headshot = document.getElementById("headshot");
    var w = 104;
    for (var j = -1; j < 5; j++) {
        for (i = 1; i < 3; i++) {
            if (j !== 0)
                backgroundTilesHTML += `<div class="hexagon background` + (Math.random() > 0.45 ? ` light` : ` `) + `" style="margin-top: ` + (183.5 * j - 1) + `px; margin-left: calc(50% - 52px);"></div>\n`;
            backgroundTilesHTML += `<div class="hexagon background` + (Math.random() > 0.45 ? ` light` : ` `) + `" style="margin-top: ` + (183.5 * j - 1) + `px; margin-left: calc(50% + ` + (w * i * 3) + `px - 52px);"></div>\n`;
            backgroundTilesHTML += `<div class="hexagon background` + (Math.random() > 0.45 ? ` light` : ` `) + `" style="margin-top: ` + (183.5 * j - 1) + `px; margin-left: calc(50% - ` + (w * i * 3) + `px - 52px);"></div>\n`;
        }
        for (var k = 0; k < 4; k++) {
            backgroundTilesHTML += `<div class="hexagon background` + (Math.random() > 0.45 ? ` light` : ` `) + `" style="margin-top: ` + (90 + 183.5 * j) + `px; margin-left: calc(50% + ` + (w * k * 3) + `px - 208px);"></div>\n`;
            backgroundTilesHTML += `<div class="hexagon background` + (Math.random() > 0.45 ? ` light` : ` `) + `" style="margin-top: ` + (90 + 183.5 * j) + `px; margin-left: calc(50% - ` + (w * k * 3) + `px - 208px);"></div>\n`;
        }
    }

    document.getElementById("background").innerHTML = backgroundTilesHTML;
}

function newPosition() {
    var w = document.w
}

function pulse(id) {
    var dot = document.getElementById(id);
    dot.style.animation = "dot 4s 1";
    dot.style.visibility = "visible"
    dot.addEventListener("animationend", function() {
        dot.style.animation = "";
        dot.style.visibility = "hidden";
    });
}

function smallpulse(id) {
    var dot = document.getElementById(id);
    dot.style.animation = "smalldot 3s ease-out 1";
    dot.style.visibility = "visible"
    dot.addEventListener("animationend", function() {
        dot.style.animation = "";
        dot.style.visibility = "hidden";
    });
}