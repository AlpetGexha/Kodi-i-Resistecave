// Create arrays listing all the multiplier values and tolerance values
const multiplier = [
    0, 1, 2, 3, 4, 5, 6, -1, -2
];

const tolerance = [
    "+/-5%", "+/-10%", "+/-20%"
];

const PATH = 'assets/img/';

// Format large values into kilo and mega ohms
function formatOhmage(ohmage) {
    if (ohmage >= 1e6) {
        ohmage /= 1e6;
        return `${ohmage} Mohms`;
    } else if (ohmage >= 1e3) {
        ohmage /= 1e3;
        return `${ohmage} Kohms`;
    } else {
        return `${ohmage} ohms`;
    }
}

// Calculate resistance and tolerance values
function calcOhms() {
    const form = document.forms[0];
    const d1 = form.tensSelect.selectedIndex;
    const d2 = form.onesSelect.selectedIndex;
    const m = form.multiplierSelect.selectedIndex;
    const t = form.toleranceSelect.selectedIndex;
    let ohmage = (d1 * 10) + d2;
    ohmage = eval(`${ohmage}e${multiplier[m]}`);
    ohmage = formatOhmage(ohmage);
    const tol = tolerance[t];
    document.forms[1].result.value = `${ohmage}, ${tol}`;
}

// Pre-load all color images into image cache
const colorList = "Zi,Kaltert,Kafe,Ari,Gri,Jeshil,Pa Ngjyre,Portokall,Kuq,Argjendi,Vjollce,Bardhe,Verdhe";
const colorArray = colorList.split(",");
const imageDB = {};
for (let i = 0; i < colorArray.length; i++) {
    const color = colorArray[i];
    imageDB[color] = new Image(21, 182);
    imageDB[color].src = `${PATH}${color}.gif`;
}

// Set the color image for the tens digit
function setTens(choice) {
    const tensColor = choice.options[choice.selectedIndex].text;
    document.tens.src = imageDB[tensColor].src;
    calcOhms();
}

// Set the color image for the ones digit
function setOnes(choice) {
    const onesColor = choice.options[choice.selectedIndex].text;
    document.ones.src = imageDB[onesColor].src;
    calcOhms();
}

// Set the color image for the multiplier
function setMult(choice) {
    const multColor = choice.options[choice.selectedIndex].text;
    document.mult.src = imageDB[multColor].src;
    calcOhms();
}

// Set the color image for the tolerance
function setTol(choice) {
    const tolColor = choice.options[choice.selectedIndex].text;
    document.tol.src = imageDB[tolColor].src;
    calcOhms();
}