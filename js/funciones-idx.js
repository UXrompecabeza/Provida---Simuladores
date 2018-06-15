    function limitMe(e) {
        if (e.keyCode == 8) { return true; }
        return this.value.length < $(this).attr("maxLength");
    }
    $('input#date2').attr('maxLength', '2').keypress(limitMe);
    $('input#date3').attr('maxLength', '2').keypress(limitMe);
    $('input#date4').attr('maxLength', '4').keypress(limitMe);
    $('input#rut-limit').attr('maxLength', '9').keypress(limitMe);  
    $('input#nom_form').attr('maxLength', '30').keypress(limitMe);
    $('input#nom_form').attr('maxLength', '30').keypress(limitMe);
    // $('input.input_rut').attr('maxLength', '9').keypress(limitMe);


    $("#nom_form").keypress(function() {
        if ($("#nom_form") != '') {
            $("#nom_form").removeClass("rut-error");
        }
    });

    $('input.input_rut').on('keyup keydown keypress change paste', function () {
        var maxChars = 9;
        if ($(this).val().length > maxChars) {
            $(this).val($(this).val().substr(0, maxChars));
        }
    });
    
    function validateForm() {
        var a=document.forms["form-pension"]["answer_a"].value;
        var b=document.forms["form-pension"]["answer_b"].value;
        var c=document.forms["form-pension"]["DOB1"].value;
        var d=document.forms["form-pension"]["DOB2"].value;
        var e=document.forms["form-pension"]["DOB3"].value;
                    
        if (a=="" && b=="" && c=="" && d=="" && e=="" && $('input[type="radio"]').is(':checked')==false && $('#renta_bruta_1').val() == '0' && $('#renta_bruta_2').val() == '0') {
            $('.input_rut').addClass("rut-error");
            $('#nom_form').addClass("rut-error");
            $('.date1').addClass("rut-error");
            $('.date2').addClass("rut-error");
            $('.date3').addClass("rut-error");
            $(".sex1").addClass("rut-error");
            $(".sex2").addClass("rut-error");
            $(".validacion-d").removeClass("hide");
            $('.env1').attr("disabled");
            return false;

        } else if (a=="") {
            $('#nom_form').addClass("rut-error");
            return false;

        } else if (b=="" || $('.input_rut').val().length < 9) {
            $('.input_rut').addClass("rut-error");
            return false;

        }else if (c=="") {
            $('.date1').addClass("rut-error");
            return false;

        }else if (d=="") {
            $('.date2').addClass("rut-error");
            return false;
        }else if (d > 13) {
            $('.date2').addClass("rut-error");
            return false;

        }else if (e=="") {
            $('.date3').addClass("rut-error");
            return false;
        }else if (e > 2019) {
            $('.date3').addClass("rut-error");
            return false;
        }else if ($('.choice').is(':checked')==false) {
            $('.sex1').addClass("rut-error");
            $('.sex2').addClass("rut-error");
            return false;
        }else if ($('#renta_bruta_1').val() == '0') {
            $(".validacion-d").removeClass("hide");
            return false;
        }else if ($('#renta_bruta_2').val() == '0') {
            $(".validacion-d").removeClass("hide");
            return false;
        }else if ($('#renta_bruta_1').val() == '') {
            $(".validacion-d").removeClass("hide");
            return false;
        }else if ($('#renta_bruta_2').val() == '') {
            $(".validacion-d").removeClass("hide");
            return false;
        }else {
            $("#nom_form").removeClass("rut-error");
            $(".input_rut").removeClass("rut-error");
                $('.inrut-val').removeClass("rut-error");
            $('#nom_form').removeClass("rut-error");
            $('.date1').removeClass("rut-error");
            $('.date2').removeClass("rut-error");
                $('.sex1').removeClass("rut-error");
            $('.sex2').removeClass("rut-error");
            $('.date3').removeClass("rut-error");
            $(".validacion-d").addClass("hide");
            $('.env1').removeAttr("disabled");
        }
    }
        
    $("#nom_form").keypress(function() {
        if ($("#nom_form") == ''){
            $('#nom_form').addClass("rut-error");
        }else {
            $("#nom_form").removeClass("rut-error");
        }
    });

    $(".input_rut").keypress(function() {
        if ($(".input_rut") == '') {
            $('.input_rut').addClass("rut-error");
        } else {
            $(".input_rut").removeClass("rut-error");
        }
    });

    $('input.input_rut').on('keyup keydown keypress change paste', function () {
        if ($('.input_rut').val().length >= 9) {
            $(".input_rut").removeClass("rut-error");
        }
    });

    $(".date1").keypress(function() {
        if ($(".date1") == '') {
            $('.date1').addClass("rut-error");
        } else {
            $(".date1").removeClass("rut-error");
        }
    });

    $(".date2").keypress(function() {
        if ($(".date2") == '') {
            $('.date2').addClass("rut-error");
        } else {
            $(".date2").removeClass("rut-error");
        }
    });

    $(".date3").keypress(function(){
        if ($(".date3") == '') {
            $('.date3').addClass("rut-error");
        } else {
            $(".date3").removeClass("rut-error");
        }
    });

    $("#hombre").click(function() {
        $('.sex2').removeClass("rut-error");
    });

    $("#mujer").click(function() {
        $('.sex1').removeClass("rut-error");
    });
    
    function soloLetras(e) {
        key = e.keyCode || e.which;
        tecla = String.fromCharCode(key).toLowerCase();
        letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
        especiales = "8-37-39-46";

        tecla_especial = false
        for (var i in especiales) {
            if (key == especiales[i]) {
                tecla_especial = true;
                break;
            }
        }

        if (letras.indexOf(tecla) == -1 && !tecla_especial) {
            return false;
        }
    }
    
    function validaNUM(e) {
        tecla = (document.all) ? e.keyCode : e.which;

        //Tecla de retroceso para borrar, siempre la permite
        if (tecla == 8) {
            return true;
        }

        // Patron de entrada, en este caso solo acepta numeros
        patron = /[0-9]/;
        tecla_final = String.fromCharCode(tecla);
        return patron.test(tecla_final);
    }
   
    function checkRut(rut) {
    // Despejar Puntos
    var valor = rut.value.replace('.','');
    // Despejar Guión
    valor = valor.replace('-','');
    
    
    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv
    
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { 
        return false;
    }

    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;
    
    // Para cada dígito del Cuerpo
    for(i=1;i<=cuerpo.length;i++) {
    
        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado != dv) {  return false; }
    
    // Si todo sale bien, eliminar errores (decretar que es válido)
}

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function maxValue1() {
	$(document).on('keyup', '.date1', function(event) {
        let max= 31;
        let valor = parseInt(this.value);
    	if(valor>max){
    		this.value = max;
        }
	});
});

$(function maxValue2() {
	$(document).on('keyup', '.date2', function(event) {
        let max= 12;
        let valor = parseInt(this.value);
    	if(valor>max){
    		this.value = max;
        }
	});
});

$(function maxValue3() {
	$(document).on('keyup', '.date3', function(event) {
        let max= 2018;
        let valor = parseInt(this.value);
    	if(valor>max){
    		this.value = max;
        }
	});
});
