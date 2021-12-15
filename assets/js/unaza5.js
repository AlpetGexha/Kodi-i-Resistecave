 // create array listing E192 series

 var serie = new Array()

 serie[0] = 100
 serie[1] = 101
 serie[2] = 102
 serie[3] = 104
 serie[4] = 105
 serie[5] = 106
 serie[6] = 107
 serie[7] = 109
 serie[8] = 110
 serie[9] = 111
 serie[10] = 113
 serie[11] = 114
 serie[12] = 115
 serie[13] = 117
 serie[14] = 118
 serie[15] = 120
 serie[16] = 121
 serie[17] = 123
 serie[18] = 124
 serie[19] = 126
 serie[20] = 127
 serie[21] = 129
 serie[22] = 130
 serie[23] = 132
 serie[24] = 133
 serie[25] = 135
 serie[26] = 137
 serie[27] = 138
 serie[28] = 140
 serie[29] = 142
 serie[30] = 143
 serie[31] = 145
 serie[32] = 147
 serie[33] = 149
 serie[34] = 150
 serie[35] = 152
 serie[36] = 154
 serie[37] = 156
 serie[38] = 158
 serie[39] = 160
 serie[40] = 162
 serie[41] = 164
 serie[42] = 165
 serie[43] = 167
 serie[44] = 169
 serie[45] = 172
 serie[45] = 174
 serie[47] = 176
 serie[48] = 178
 serie[49] = 180
 serie[50] = 182
 serie[51] = 184
 serie[52] = 187
 serie[53] = 189
 serie[54] = 191
 serie[55] = 193
 serie[56] = 196
 serie[57] = 198
 serie[58] = 200
 serie[59] = 203
 serie[60] = 205
 serie[61] = 208
 serie[62] = 210
 serie[63] = 213
 serie[64] = 215
 serie[65] = 218
 serie[66] = 221
 serie[67] = 223
 serie[68] = 226
 serie[69] = 229
 serie[70] = 232
 serie[71] = 234
 serie[72] = 237
 serie[73] = 240
 serie[74] = 243
 serie[75] = 246
 serie[76] = 249
 serie[77] = 252
 serie[78] = 255
 serie[79] = 258
 serie[80] = 261
 serie[81] = 264
 serie[82] = 267
 serie[83] = 271
 serie[84] = 274
 serie[85] = 277
 serie[86] = 280
 serie[87] = 284
 serie[88] = 287
 serie[89] = 291
 serie[90] = 294
 serie[91] = 298
 serie[92] = 301
 serie[93] = 305
 serie[94] = 309
 serie[95] = 312
 serie[96] = 316
 serie[97] = 320
 serie[98] = 324
 serie[99] = 328
 serie[100] = 332
 serie[101] = 336
 serie[102] = 340
 serie[103] = 344
 serie[104] = 348
 serie[105] = 352
 serie[106] = 357
 serie[107] = 361
 serie[108] = 365
 serie[109] = 370
 serie[110] = 374
 serie[111] = 379
 serie[112] = 383
 serie[113] = 388
 serie[114] = 392
 serie[115] = 397
 serie[116] = 402
 serie[117] = 407
 serie[118] = 412
 serie[119] = 417
 serie[120] = 422
 serie[121] = 427
 serie[122] = 432
 serie[123] = 437
 serie[124] = 442
 serie[125] = 448
 serie[126] = 453
 serie[127] = 459
 serie[128] = 464
 serie[129] = 470
 serie[130] = 475
 serie[131] = 481
 serie[132] = 487
 serie[133] = 493
 serie[134] = 499
 serie[135] = 505
 serie[136] = 511
 serie[137] = 517
 serie[138] = 523
 serie[139] = 530
 serie[140] = 536
 serie[141] = 542
 serie[142] = 549
 serie[143] = 556
 serie[144] = 562
 serie[145] = 569
 serie[146] = 576
 serie[147] = 583
 serie[148] = 590
 serie[149] = 597
 serie[150] = 604
 serie[151] = 612
 serie[152] = 619
 serie[153] = 626
 serie[154] = 634
 serie[155] = 642
 serie[156] = 649
 serie[157] = 657
 serie[158] = 665
 serie[159] = 673
 serie[160] = 681
 serie[161] = 690
 serie[162] = 698
 serie[163] = 706
 serie[164] = 715
 serie[165] = 723
 serie[166] = 732
 serie[167] = 741
 serie[168] = 750
 serie[169] = 759
 serie[170] = 768
 serie[171] = 777
 serie[172] = 787
 serie[173] = 796
 serie[174] = 806
 serie[175] = 816
 serie[176] = 825
 serie[177] = 835
 serie[178] = 845
 serie[179] = 856
 serie[180] = 866
 serie[181] = 876
 serie[182] = 887
 serie[183] = 898
 serie[184] = 909
 serie[185] = 920
 serie[186] = 931
 serie[187] = 942
 serie[188] = 953
 serie[189] = 965
 serie[190] = 976
 serie[191] = 988

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
 tolerance[0] = "+/-0,1%"
 tolerance[1] = "+/-0,25%"
 tolerance[2] = "+/-0,5%"
 tolerance[3] = "+/-1%"
 tolerance[4] = "+/-2%"
 tolerance[5] = "+/-5%"
 tolerance[6] = "+/-10%"
 tolerance[7] = "+/-20%"
 // format large values into kilo and meg
 function format(ohmage) {
     if (ohmage >= 10e6) {
         ohmage /= 10e5
         return "" + ohmage + " Mohm"
     } else {
         if (ohmage >= 10e3) {
             ohmage /= 10e2
             return "" + ohmage + " Kohm"
         } else {
             return "" + ohmage + " ohm"
         }
     }
 }

 // calculate resistance and tolerance values
 function calcOhm() {
     var form = document.forms[0]
     var d0 = form.hundSelect.selectedIndex
     var d1 = form.tensSelect.selectedIndex
     var d2 = form.onesSelect.selectedIndex
     var m = form.multiplierSelect.selectedIndex
     var t = form.toleranceSelect.selectedIndex
     var ohmage = (d0 * 100) + (d1 * 10) + d2
     ohmage = eval("" + ohmage + "e" + multiplier[m])
     ohmage = format(ohmage)
     var tol = tolerance[t]
     document.forms[1].result.value = ohmage + ", " + tol
 }

 // pre-load all color images into image cache
 var colorList = "Zi,Kaltert,Kafe,Ari,Gri,Jeshil,Pa ngjyre,Portokall,Kuq,Argjendi,Vjollce,Bardhe,Verdhe"
 var colorArray = colorList.split(",")
 var imageDB = new Array()
 for (i = 0; i < colorArray.length; i++) {
     imageDB[colorArray[i]] = new Image(21, 182)
     imageDB[colorArray[i]].src = colorArray[i] + ".gif"
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
