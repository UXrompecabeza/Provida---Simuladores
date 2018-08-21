$(function() {
    $('[data-toggle="tooltip"]').tooltip();
})

var menu = $('.menue'),
    profileObj = $('.profile-object');

menu.click(function() {
    profileObj.toggleClass('move-left');
});

var mediaquery = window.matchMedia("(max-width: 768px)");
if (mediaquery.matches) {

} else {
    $('#sidebar').portamento({ wrapper: $('#wrapper') }); 
}

function birthDayMonth(event) {
    let input = event.target
    let min = 1;
    let valor = parseInt(input.value);
    if (valor < 1) {
        input.value = min;
    }
}

function birthDayYear(event) {
    let input = event.target
    let min = 1900;
    let valor = parseInt(input.value);
    if (valor < 1900) {
        input.value = min;
    }
}

// <!-- VALIDADOR TEXTO -->

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

// <!-- DELIMITACION FECHA -->

function limitMe(e) {
    if (e.keyCode == 8) { return true; }
    return this.value.length < $(this).attr("maxLength");
}

$('input#edadform').attr('maxLength', '3').keypress(limitMe);

$('input#date2').attr('maxLength', '2').keypress(limitMe);

$('input#date4').attr('maxLength', '4').keypress(limitMe);

$('input#rut-limit').attr('maxLength', '9').keypress(limitMe);

$('input#nom_form').attr('maxLength', '30').keypress(limitMe);

$('.money').attr('maxLength', '15').keypress(limitMe);

$('#spTotal').attr('maxLength', '15').keypress(limitMe);

$('input.birthDateDay').attr('maxLength', '2').keypress(limitMe);

$('input.birthDateMonth').attr('maxLength', '2').keypress(limitMe);

$('input.birthDateYear').attr('maxLength', '4').keypress(limitMe);



// <!-- SOLO NUMEROS EN INPUTS -->

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

$(".tiemposelect").hide();

$("#mensual").click(function() {
    $(".tiemposelect").show();
});
$("#unica-vez").click(function() {
    $(".tiemposelect").hide();
});

$(function () {
    $("#prod-afp").change(function () {
        if ($(this).val() == "Bono") {
            $(".fila").children('.fondos').hide();
        } else {
            $(".fila").children('.fondos').show();
        }
    });

});

$(function() {
    $('.edad-input').keydown(function(e) {
        //list of functional/control keys that you want to allow always
        var keys = [8, 9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];

        if ($.inArray(e.keyCode, keys) == -1) {
            if (checkMaxLength(this.innerHTML, 2)) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    });

    function checkMaxLength(text, max) {
        return (text.length >= max);
    }
});

function validarRango(elemento) {

    var numero = parseInt(elemento.value, 10);
    //Validamos que se haya ingresado solo numeros
    if (!isNaN(numero)) {
        alert('Ingrese solo números.');
        elemento.focus();
        elemento.select();
        return false;
    } else if (numero.length <= 3) {
        return false;
    } else {
        return true;
    }

}

$(function maxValue() {
	$(document).on('keyup', '.edadform', function(event) {
        let max= 120;
        let valor = parseInt(this.value);
    	if(valor>max){
    		this.value = max;
        }
	});
});

$(function maxValue2() {
	$(document).on('keyup', '.birthDateYear', function(event) {
        let max= 2018;
        let valor = parseInt(this.value);
    	if(valor>max){
    		this.value = max;
        }
	});
});

$(function maxValue2() {
	$(document).on('keyup', '.birthDateMonth', function(event) {
        let max= 12;
        let valor = parseInt(this.value);
    	if(valor>max){
    		this.value = max;
        }
	});
});

$(function maxValue3() {
	$(document).on('keyup', '.birthDateDay', function(event) {
        let max= 31;
        let valor = parseInt(this.value);
    	if(valor>max){
    		this.value = max;
        }
	});
});

$(function maxValue4() {
	$(document).on('keyup', '.in-perc-fondos', function(event) {
        let max= 100;
        let valor = parseInt(this.value);
    	if(valor>max){
    		this.value = max;
        }
	});
});


/* Without prefix */
var input = document.getElementById('with-prefix');
input.addEventListener('keyup', function(e)
{
    input.value = format_number(this.value);
});

var input2 = document.getElementById('input-cifra');
input2.addEventListener('keyup', function(e)
{
    input2.value = format_number(this.value);
});

var input3 = document.getElementById('spTotal');
input3.addEventListener('keyup', function(e)
{
    input3.value = format_number(this.value);
});

var input4 = document.getElementById('tipoCuenta');
input4.addEventListener('keyup', function(e)
{
    input4.value = format_number(this.value);
});

var input5 = document.getElementById('tipoCuenta');
input5.addEventListener('keyup', function(e)
{
    input5.value = format_number(this.value);
});


function format_input(e) {
    $(e).on('keyup keydown keypress change paste', function () {
        e.value = format_number(this.value);
    });
}

/* Function */
function format_number(number, prefix, thousand_separator, decimal_separator)
{
    var thousand_separator = thousand_separator || '.',
        decimal_separator = decimal_separator || ',',
        regex		= new RegExp('[^' + decimal_separator + '\\d]', 'g'),
        number_string = number.replace(regex, '').toString(),
        split	  = number_string.split(decimal_separator),
        rest 	  = split[0].length % 3,
        result 	  = split[0].substr(0, rest),
        thousands = split[0].substr(rest).match(/\d{3}/g);
    
    if (thousands) {
        separator = rest ? thousand_separator : '';
        result += separator + thousands.join(thousand_separator);
    }
    result = split[1] != undefined ? result + decimal_separator + split[1] : result;
    return prefix == undefined ? result : (result ? prefix + result : '');
};




