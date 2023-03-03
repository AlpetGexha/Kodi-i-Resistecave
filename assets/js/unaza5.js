 // create array listing E192 series
 const PATH = 'assets/img/';

 const serie = [
     100, 101, 102, 104, 105, 106, 107, 109, 110, 111, 113, 114, 115, 117, 118, 120, 121, 123, 124, 126, 127, 129, 130, 132, 133, 135, 137, 138, 140, 142, 143, 145, 147, 149, 150, 152, 154, 156, 158, 160, 162, 164, 165, 167, 169, 172, 174, 176, 178, 180, 182, 184, 187, 189, 191, 193, 196, 198, 200, 203, 205, 208, 210, 213, 215, 218, 221, 223, 226, 229, 232, 234, 237, 240, 243, 246, 249, 252, 255, 258, 261, 264, 267, 271, 274, 277, 280, 284, 287, 291, 294, 298, 301, 305, 309, 312, 316, 320, 324, 328, 332, 336, 340, 344, 348, 352, 357, 361, 365, 370, 374, 379, 383, 388, 392, 397, 402, 407, 412, 417, 422, 427, 432, 437, 442, 448, 453, 459, 464, 470, 475, 481, 487, 493, 499, 505, 511, 517, 523, 530, 536, 542, 549, 556, 562, 569, 576, 583, 590, 597, 604, 612, 619, 626, 634, 642, 649, 657, 665, 673, 681, 690, 698, 706, 715, 723, 732, 741, 750, 759, 768, 777, 787, 796, 806, 816, 825, 835, 845, 856, 866, 876, 887, 898, 909, 920, 931, 942, 953, 965, 976, 988,
 ];

 const multiplier = [
     0, 1, 2, 3, 4, 5, 6, -1, -2
 ];

 const tolerance = [
     "+/-0,1%", "+/-0,25%", "+/-0,5%", "+/-1%", "+/-2%", "+/-5%", "+/-10%", "+/-20%"
 ];

 function format(ohmage) {
     if (ohmage >= 10e6) {
         ohmage /= 10e5
         return `${ohmage} Mohm`;
     } else if (ohmage >= 10e3) {
         ohmage /= 10e2
         return `${ohmage} Kohm`;
     } else {
         return `${ohmage} ohm`;
     }
 }

 // calculate resistance and tolerance values
 function calcOhm() {
     const form = document.forms[0]
     const d0 = form.hundSelect.selectedIndex
     const d1 = form.tensSelect.selectedIndex
     const d2 = form.onesSelect.selectedIndex
     const m = form.multiplierSelect.selectedIndex
     const t = form.toleranceSelect.selectedIndex
     let ohmage = (d0 * 100) + (d1 * 10) + d2
     ohmage = eval("" + ohmage + "e" + multiplier[m])
     ohmage = format(ohmage)
     const tol = tolerance[t]
     document.forms[1].result.value = ohmage + ", " + tol
 }

 // pre-load all color images into image cache
 const colorList = "Zi,Kaltert,Kafe,Ari,Gri,Jeshil,Pa ngjyre,Portokall,Kuq,Argjendi,Vjollce,Bardhe,Verdhe"
 const colorArray = colorList.split(",")
 const imageDB = new Array()
 for (i = 0; i < colorArray.length; i++) {
     imageDB[colorArray[i]] = new Image(21, 182)
     imageDB[colorArray[i]].src = PATH + colorArray[i] + ".gif"

 }

 function setHund(choice) {
     var hundColor = choice.options[choice.selectedIndex].text
     document.hund.src = imageDB[hundColor].src
     calcOhm()
 }

 function setTens(choice) {
     var tensColor = choice.options[choice.selectedIndex].text
     document.tens.src = imageDB[tensColor].src
     calcOhm()
 }

 function setOnes(choice) {
     var onesColor = choice.options[choice.selectedIndex].text
     document.ones.src = imageDB[onesColor].src
     calcOhm()
 }

 function setMult(choice) {
     var multColor = choice.options[choice.selectedIndex].text
     document.mult.src = imageDB[multColor].src
     calcOhm()
 }

 function setTol(choice) {
     var tolColor = choice.options[choice.selectedIndex].text
     document.tol.src = imageDB[tolColor].src
     calcOhm()
 }