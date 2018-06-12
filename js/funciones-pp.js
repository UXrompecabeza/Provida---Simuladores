$(function() {
    $('[data-toggle="tooltip"]').tooltip()
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

function format(input) {
    var num = input.value.replace(/\./g, '');
    if (!isNaN(num)) {
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/, '');
        input.value = num;
    } else {
        alert('Solo se permiten numeros');
        input.value = input.value.replace(/[^\d\.]*/g, '');
    }
}

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

// function sumar() {
// var total = 0;
// $(".cifra").each(function() {
//     if (isNaN(parseFloat($(this).val()))) {
//     total += 0;
//     } else {
//     total += parseFloat($(this).val());
//     }
// });

// document.getElementById('spTotal').value=total;

// }

$(function maxValue() {
	$(document).on('keyup', '.edadform', function(event) {
        let max= 120;
        let valor = parseInt(this.value);
    	if(valor>max){
    		this.value = max;
        }
	});
});





