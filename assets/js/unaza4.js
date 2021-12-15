 // create array listing all the multiplier values
 var multiplier = new Array()
 multiplier[0] = 0
 multiplier[1] = 1
 multiplier[2] = 2
 multiplier[3] = 3
 multiplier[4] = 4
 multiplier[5] = 5
 multiplier[6] = 6
 multiplier[7] = -1
 multiplier[8] = -2

 // create array listing all tolerance values
 var tolerance = new Array()
 tolerance[0] = "+/-5%"
 tolerance[1] = "+/-10%"
 tolerance[2] = "+/-20%"

 // format large values into kilo and meg
 function format(ohmage) {
     if (ohmage >= 10e6) {
         ohmage /= 10e5
         return "" + ohmage + " Mohms"
     } else {
         if (ohmage >= 10e3) {
             ohmage /= 10e2
             return "" + ohmage + " Kohms"
         } else {
             return "" + ohmage + " ohms"
         }
     }
 }

 // calculate resistance and tolerance values
 function calcOhms() {
     var form = document.forms[0]
     var d1 = form.tensSelect.selectedIndex
     var d2 = form.onesSelect.selectedIndex
     var m = form.multiplierSelect.selectedIndex
     var t = form.toleranceSelect.selectedIndex
     var ohmage = (d1 * 10) + d2
     ohmage = eval("" + ohmage + "e" + multiplier[m])
     ohmage = format(ohmage)
     var tol = tolerance[t]
     document.forms[1].result.value = ohmage + ", " + tol
 }

 // pre-load all color images into image cache
 var colorList = "Zi,Kaltert,Kafe,Ari,Gri,Jeshil,Pa Ngjyre,Portokall,Kuq,Argjendi,Vjollce,Bardhe,Verdhe"
 var colorArray = colorList.split(",")
 var imageDB = new Array()
 for (i = 0; i < colorArray.length; i++) {
     imageDB[colorArray[i]] = new Image(21, 182)
     imageDB[colorArray[i]].src = colorArray[i] + ".gif"
 }

 function setTens(choice) {
     var tensColor = choice.options[choice.selectedIndex].text
     document.tens.src = imageDB[tensColor].src
     calcOhms()
 }

 function setOnes(choice) {
     var onesColor = choice.options[choice.selectedIndex].text
     document.ones.src = imageDB[onesColor].src
     calcOhms()
 }

 function setMult(choice) {
     var multColor = choice.options[choice.selectedIndex].text
     document.mult.src = imageDB[multColor].src
     calcOhms()
 }

 function setTol(choice) {
     var tolColor = choice.options[choice.selectedIndex].text
     document.tol.src = imageDB[tolColor].src
     calcOhms()
 }