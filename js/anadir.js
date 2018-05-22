$(document).ready(function() {

    var nextinput = 0;

    $("#btclon").bind('click', function() {
        if (nextinput <= 100) {
            nextinput++;

            campo =
                campo = "<div class='row fila" + nextinput + "'><div class='col-md-3'><div class='container'><p>Tipo de Cuenta</p></div><div class='container'><span class='custom-dropdown'><select name='Selecciona un producto' id='prod-afp" + nextinput + "' class='form-user-ctrl user-select prod-afp' title='Selecciona un producto' data-required='true' aria-required='true' ><option value='' selected>Selecciona</option><option class='general' id='bonoreconocimiento2" + nextinput + "' value='Cuenta Obligatoria'>Cuenta Obligatoria</option><option class='general' id='bonoreconocimiento3" + nextinput + "' value='APV'>APV</option><option class='general' id='bonoreconocimiento4" + nextinput + "' value='Depósitos convenidos'>Depósitos Convenidos</option><option class='general' id='bonoreconocimiento5" + nextinput + "' value='Cuenta 2'>Cuenta 2</option><option class='general' id='bonoreconocimiento" + nextinput + "' value='Bono'>Bono Reconocimiento</option></select></span></div></div><div class='col-md-3'><div class='container mar-top-mob-24'><p>Monto</p></div><div class='container'><span class='peso'>$</span><input id='input-cifra' type='text' class='bor-bott money cifra' onchange='sumar();' onkeyup='format(this)' onkeypress='return validaNUM(event)' min='0' max='10000000000' style='width: 80%' placeholder='0' /></div></div><div class='col-md-6 fondos" + nextinput + "'><div class='container mar-top-mob-24'><p>¿En qué Fondo/s?</p></div><div class='container'><ul id='botoneraFondos'><form action=''><li><input type='radio' id='fondo-A" + nextinput + "' name='selector" + nextinput + "' checked='checked'><label for='fondo-A" + nextinput + "'></label><div class='check'>A</div></li><li><input type='radio' id='fondo-B" + nextinput + "' name='selector" + nextinput + "'><label for='fondo-B" + nextinput + "'></label><div class='check'>B</div></li><li><input type='radio' id='fondo-C" + nextinput + "' name='selector" + nextinput + "'><label for='fondo-C" + nextinput + "'></label><div class='check'>C</div></li><li><input type='radio' id='fondo-D" + nextinput + "' name='selector" + nextinput + "'><label for='fondo-D" + nextinput + "'></label><div class='check'>D</div></li><li><input type='radio' id='fondo-E" + nextinput + "' name='selector" + nextinput + "'><label for='fondo-E" + nextinput + "'></label><div class='check'>E</div></li></form></ul><input class='bor-bott in-perc-fondos' onkeypress='return validaNUM(event)' onkeyup='format(this)' onchange='format(this)' type='text' step='1' min='0' max='100' maxlength='3' placeholder='0' /><span class='peso'>%</span></div><div class='container'><ul id='botoneraFondos'><form action=''><li><input type='radio' id='fondo-A-filaDos" + nextinput + "' name='selector" + nextinput + "' checked='checked'><label for='fondo-A-filaDos" + nextinput + "'></label><div class='check'>A</div></li><li><input type='radio' id='fondo-B-filaDos" + nextinput + "' name='selector" + nextinput + "'><label for='fondo-B-filaDos" + nextinput + "'></label><div class='check'>B</div></li><li><input type='radio' id='fondo-C-filaDos" + nextinput + "' name='selector" + nextinput + "'><label for='fondo-C-filaDos" + nextinput + "'></label><div class='check'>C</div></li><li><input type='radio' id='fondo-D-filaDos" + nextinput + "' name='selector" + nextinput + "'><label for='fondo-D-filaDos" + nextinput + "'></label><div class='check'>D</div></li><li><input type='radio' id='fondo-E-filaDos" + nextinput + "' name='selector" + nextinput + "'><label for='fondo-E-filaDos" + nextinput + "'></label><div class='check'>E</div></li></form></ul><input class='bor-bott in-perc-fondos' onkeypress='return validaNUM(event)' onkeyup='format(this)' onchange='format(this)' type='text' step='1' min='0' max='100' maxlength='3' placeholder='0' /><span class='peso'>%</span></div></div></div><button class='btdel'><img src='img/icon-close.svg' alt=''></button>"

            var destino = $('ol.d1Dest').append('<li class="d1 bg-skyblue-acordeon">' + campo + '</li>');


            destino.find(".btdel").on('click', function() {
                $(this).parent().remove();
            });

			//1
            $("#prod-afp1").change(function () {
                if ($(this).val() == "Bono") {
                    $(".fila1").children('.fondos1').hide();
                } else {
                    $(".fila1").children('.fondos1').show();
                }
            });
            //1
            //1
            $("#prod-afp2").change(function () {
                if ($(this).val() == "Bono") {
                    $(".fila2").children('.fondos2').hide();
                } else {
                    $(".fila2").children('.fondos2').show();
                }
            });
            //1            
            //1
            $("#prod-afp3").change(function () {
                if ($(this).val() == "Bono") {
                    $(".fila3").children('.fondos3').hide();
                } else {
                    $(".fila3").children('.fondos3').show();
                }
            });
            //1            
            //1
            $("#prod-afp4").change(function () {
                if ($(this).val() == "Bono") {
                    $(".fila4").children('.fondos4').hide();
                } else {
                    $(".fila4").children('.fondos4').show();
                }
            });
            //1
            //1
            $("#prod-afp5").change(function () {
                if ($(this).val() == "Bono") {
                    $(".fila5").children('.fondos5').hide();
                } else {
                    $(".fila5").children('.fondos5').show();
                }
            });
            //1
            //1
            $("#prod-afp6").change(function () {
                if ($(this).val() == "Bono") {
                    $(".fila6").children('.fondos6').hide();
                } else {
                    $(".fila6").children('.fondos6').show();
                }
            });
            //1
            //1
            $("#prod-afp7").change(function () {
                if ($(this).val() == "Bono") {
                    $(".fila7").children('.fondos7').hide();
                } else {
                    $(".fila7").children('.fondos7').show();
                }
            });
            //1
            //1
            $("#prod-afp8").change(function () {
                if ($(this).val() == "Bono") {
                    $(".fila8").children('.fondos8').hide();
                } else {
                    $(".fila8").children('.fondos8').show();
                }
            });
            //1
            //1
            $("#prod-afp9").change(function () {
                if ($(this).val() == "Bono") {
                    $(".fila9").children('.fondos9').hide();
                } else {
                    $(".fila9").children('.fondos9').show();
                }
            });
            //1
            //1
            $("#prod-afp10").change(function () {
                if ($(this).val() == "Bono") {
                    $(".fila10").children('.fondos10').hide();
                } else {
                    $(".fila10").children('.fondos10').show();
                }
            });
            //1









        }


    });





    $('.btdel').on('click', function() {
        $(this).parent().remove();
    });
    $('#btdelAll').on('click', function() {
        $('ol li').remove();
    });




//acordeon #2

var nextinputt = 0;

$("#btclon-two").bind('click', function() {
    if (nextinputt <= 100) {
        nextinputt++;

        var campo = $('.d2:first').html();

        campo =
            campo = "<div class='row'><div class='col-md-3'><p>Tipo de Cuenta</p><div class='clearfix'></div><span class='custom-dropdown'><select name='Selecciona un producto' id='prod-afp' class='form-user-ctrl user-select prod-afp' title='Selecciona un producto' data-required='true' aria-required='true'><option value='' selected>Selecciona</option><option class='general' value='APV'>APV</option><option class='general' value='Depósitos convenidos'>Depósitos Convenidos</option><option class='general' value='Cuenta 2'>Cuenta 2</option></select></span></div><div class='col-md-3'><p>Monto</p><div class='clearfix'></div><span class='peso'>$</span><input class='bor-bott money' type='text' min='0' max='12000000000' onkeypress='return validaNUM(event)' onkeyup='format(this)' style='width: 80%' placeholder='0' /></div><div class='col-md-6'><p>¿En qué Fondo/s?</p><div class='clearfix'></div><div class='container'><ul id='botoneraFondos'><form action=''><li><input type='radio' id='fondo-A2" + nextinputt + "' name='selector2" + nextinputt + "' checked='checked'><label for='fondo-A2" + nextinputt + "'></label><div class='check'>A</div></li><li><input type='radio' id='fondo-B2" + nextinputt + "' name='selector2" + nextinputt + "'><label for='fondo-B2" + nextinputt + "'></label><div class='check'>B</div></li><li><input type='radio' id='fondo-C2" + nextinputt + "' name='selector2" + nextinputt + "'><label for='fondo-C2" + nextinputt + "'></label><div class='check'>C</div></li><li><input type='radio' id='fondo-D2" + nextinputt + "' name='selector2" + nextinputt + "'><label for='fondo-D2" + nextinputt + "'></label><div class='check'>D</div></li><li><input type='radio' id='fondo-E2" + nextinputt + "' name='selector2" + nextinputt + "'><label for='fondo-E2" + nextinputt + "'></label><div class='check'>E</div></li></form></ul><input class='bor-bott in-perc-fondos' onkeypress='return validaNUM(event)' onkeyup='format(this)' onchange='format(this)' type='text' step='1' min='0' max='100' maxlength='3' placeholder='0' /><span class='peso'>%</span></div><div class='container'><ul id='botoneraFondos'><form action=''><li><input type='radio' id='fondo-A2-filaDos" + nextinputt + "' name='selector2" + nextinputt + "' checked='checked'><label for='fondo-A2-filaDos" + nextinputt + "'></label><div class='check'>A</div></li><li><input type='radio' id='fondo-B2-filaDos" + nextinputt + "' name='selector2" + nextinputt + "'><label for='fondo-B2-filaDos" + nextinputt + "'></label><div class='check'>B</div></li><li><input type='radio' id='fondo-C2-filaDos" + nextinputt + "' name='selector2" + nextinputt + "'><label for='fondo-C2-filaDos" + nextinputt + "'></label><div class='check'>C</div></li><li><input type='radio' id='fondo-D2-filaDos" + nextinputt + "' name='selector2" + nextinputt + "'><label for='fondo-D2-filaDos" + nextinputt + "'></label><div class='check'>D</div></li><li><input type='radio' id='fondo-E2-filaDos" + nextinputt + "' name='selector2" + nextinputt + "'><label for='fondo-E2-filaDos" + nextinputt + "'></label><div class='check'>E</div></li></form></ul><input class='bor-bott in-perc-fondos' onkeypress='return validaNUM(event)' onkeyup='format(this)' onchange='format(this)' type='text' step='1' min='0' max='100' maxlength='3' placeholder='0' /><span class='peso'>%</span></div></div></div><div class='row'><div class='col-lg-12'><p>¿Por cuánto tiempo vas a ahorrar?</p></div></div><div class='row'><div class='col-md-6 col-lg-6 radios'><input class='' type='radio' id='unica-vez" + nextinputt + "' name='selectorr" + nextinputt + "'><label class='radio' for='unica-vez" + nextinputt + "'>Única Vez</label><input class='' type='radio' id='mensual" + nextinputt + "' name='selectorr" + nextinputt + "'><label class='radio' for='mensual" + nextinputt + "'>Mensual</label></div><div class='col-md-6 col-lg-4'><span class='custom-dropdown tiemposelect" + nextinputt + "'><select name='Selecciona un producto' id='prod-afp' class='form-user-ctrl user-select prod-afp' title='Selecciona un producto' data-required='true' aria-required='true'><option value='' selected>Selecciona</option><option class='general' value='APV'>1 año</option><option class='general' value='APV'>5 años</option><option class='general' value='Depósitos convenidos'>10 años</option><option class='general' value='Cuenta 2'>15 años</option><option class='general' value='Hasta pensionarme'>Hasta pensionarme</option></select></span></div></div><button class='btdel-two'><img src='img/icon-close.svg' alt=''></button>"
        var destino = $('ol.d2Dest').append('<li class="d2 bg-skyblue-acordeon">' + campo + '</li>')
        
        destino.find(".btdel-two").on('click', function() {
            $(this).parent().remove();
        });

        //1
            $(".tiemposelect1").hide();
		    $("#mensual1").click(function() {
			        $(".tiemposelect1").show();
			    });
			$("#unica-vez1").click(function() {
			        $(".tiemposelect1").hide();
			    });
        //1
        //1
            $(".tiemposelect2").hide();
		    $("#mensual2").click(function() {
			        $(".tiemposelect2").show();
			    });
			$("#unica-vez2").click(function() {
			        $(".tiemposelect2").hide();
			    });
        //1
        //1
            $(".tiemposelect3").hide();
		    $("#mensual3").click(function() {
			        $(".tiemposelect3").show();
			    });
			$("#unica-vez3").click(function() {
			        $(".tiemposelect3").hide();
			    });
        //1
        //1
            $(".tiemposelect4").hide();
		    $("#mensual4").click(function() {
			        $(".tiemposelect4").show();
			    });
			$("#unica-vez4").click(function() {
			        $(".tiemposelect4").hide();
			    });
        //1
        //1
            $(".tiemposelect5").hide();
		    $("#mensual5").click(function() {
			        $(".tiemposelect5").show();
			    });
			$("#unica-vez5").click(function() {
			        $(".tiemposelect5").hide();
			    });
        //1
        //1
            $(".tiemposelect6").hide();
		    $("#mensual6").click(function() {
			        $(".tiemposelect6").show();
			    });
			$("#unica-vez6").click(function() {
			        $(".tiemposelect6").hide();
			    });
        //1
        //1
            $(".tiemposelect7").hide();
		    $("#mensual7").click(function() {
			        $(".tiemposelect7").show();
			    });
			$("#unica-vez7").click(function() {
			        $(".tiemposelect7").hide();
			    });
        //1
        //1
            $(".tiemposelect8").hide();
		    $("#mensual8").click(function() {
			        $(".tiemposelect8").show();
			    });
			$("#unica-vez8").click(function() {
			        $(".tiemposelect8").hide();
			    });
        //1
        //1
            $(".tiemposelect9").hide();
		    $("#mensual9").click(function() {
			        $(".tiemposelect9").show();
			    });
			$("#unica-vez9").click(function() {
			        $(".tiemposelect9").hide();
			    });
        //1
        //1
            $(".tiemposelect10").hide();
		    $("#mensual10").click(function() {
			        $(".tiemposelect10").show();
			    });
			$("#unica-vez10").click(function() {
			        $(".tiemposelect10").hide();
			    });
        //1




    }

});






    $('.btdel-two').on('click', function() {
        $(this).parent().remove();
    });
    $('#btdelAll-two').on('click', function() {
        $('ol li').remove();
    });


 /*   $('#btclon-three').on('click', function() {
        var campo = $('.d3:first').html();
        var destino = $('ol.d3Dest').append('<li class="d3 bg-skyblue-acordeon">' + campo + '</li>')
        destino.find(".btdel-three").on('click', function() {
            $(this).parent().remove();
        });
        //$('.d3:first').before($('ol li:first').clone());
    });
*/


//acordeon tienes beneficiario

var nextinputtt = 0;

$("#btclon-three").bind('click', function() {
    if (nextinputtt <= 100) {
        nextinputtt++;

        var tooltipdi = $("#savetp").html();

        var campo = $('.d3:first').html();
        campo =
        campo = "<div class='row'><div class='col-md-6'><div class='container'><p>Parentesco</p></div><div class='container mar-top-8'><span class='custom-dropdown'><select name='Selecciona un producto' id='prod-afp' class='form-user-ctrl user-select prod-afp' title='Selecciona un producto' data-required='true' aria-required='true'><option value='' selected>Selecciona</option><option class='general' value='Cónyuge femenino'>Cónyuge femenino</option><option class='general' value='Cónyuge masculino'>Cónyuge masculino</option><option class='general' value='Conviviente Civil Femenino'>Conviviente Civil Femenino</option><option class='general' value='Conviviente Civil Masculino'>Conviviente Civil Masculino</option><option class='general' value='Conviviente Femenino'>Conviviente Femenino</option><option class='general' value='Conviviente Masculino'>Conviviente Masculino</option><option class='general' value='Hija'>Hija</option><option class='general' value='Hijo'>Hijo</option><option class='general' value='Madre'>Madre</option><option class='general' value='Padre'>Padre</option></select></span></div></div><div class='col-md-6 fixios'><div class='container'><p>Nacimiento</p></div><div class='container mar-top-8'><input class='hidden' name='BirthDate' id='BirthDateInput'><div class='BirthDate input-group triple-input fixipad' id='BirthDate'><input style='margin-top: 0;' class='col-md-3 bor-ask-tab birthDateMonth required' data-required='true' aria-required='true' id='BirthDated' type='text' placeholder='DD' maxlength='2' size='2' onkeypress='return validaNUM(event)'><label style='margin-top: 0;' class='col-md-1 sectionBar'>-</label><input style='margin-top: 0;' class='col-md-3 bor-ask-tab birthDateDay required' data-required='true' aria-required='true' id='BirthDatem' type='text' placeholder='MM' maxlength='2' size='2' onkeypress='return validaNUM(event)'><label style='margin-top: 0;' class='col-md-1 sectionBar'>-</label><input style='margin-top: 0;' class='col-md-4 bor-ask-tab birthDateYear required' data-required='true' aria-required='true' id='BirthDatey' type='text' placeholder='AAAA' maxlength='4' size='4' onkeypress='return validaNUM(event)'></div></div></div></div><div class='row'><div class='container'><div class='col-md-6'><br><div class='container'><p>Estado Civil</p></div><div class='container mar-top-8'><span class='custom-dropdown'><select name='Selecciona un producto' id='prod-afp' class='form-user-ctrl user-select prod-afp' title='Selecciona un producto' data-required='true' aria-required='true'><option value='' selected>Selecciona</option><option class='general' value='Soltero'>Soltero/a</option><option class='general' value='Casado'>Casado/a</option><option class='general' value='Conviviente Civil (AUC)'>Conviviente Civil (AUC)</option><option class='general' value='Divorciado'>Divorciado/a</option><option class='general' value='Viudo'>Viudo/a</option></select></span></div></div><div class='col-md-6'><br><p>Grado de Invalidez</p> " + tooltipdi + "<div class='container mar-top-8'><span class='custom-dropdown'><select name='Selecciona un producto' id='prod-afp' class='form-user-ctrl user-select prod-afp' title='Selecciona un producto' data-required='true' aria-required='true'><option value='' selected>Selecciona</option><option class='general' value='Sin invalidez'>Sin invalidez</option><option class='general' value='Invalidez total'>Invalidez total</option><option class='general' value='Invalidez parcial'>Invalidez parcial</option></select></span></div></div></div></div><button class='btdel-three'><img src='img/icon-close.svg' alt=''></button>"
        var destino = $('ol.d3Dest').append('<li class="d3 bg-skyblue-acordeon">' + campo + '</li>')
        
        destino.find(".btdel-three").on('click', function() {
            $(this).parent().remove();
        });

    }

});



    $('.btdel-three').on('click', function() {
        $(this).parent().remove();
    });
    $('#btdelAll-three').on('click', function() {
        $('ol li').remove();
    });





    $(".progres").click(function(e) {
        $(".progreso-bar").addClass("barra-block");
        $(".small-product-container").addClass("mar-bot-130");
    });
    $(".clickUno").click(function(e) {
        $(".campoUno").addClass("barra-block");
    });

    $(".clickDos").click(function(e) {
        $(".campoDos").addClass("barra-block");
    });

    $(".clickTres").click(function(e) {
        $(".campoTres").addClass("barra-block");
    });

    $(".clickCuatro").click(function(e) {
        $(".campoCuatro").addClass("barra-block");
    });

});