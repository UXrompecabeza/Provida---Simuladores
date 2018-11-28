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

$(function(){
	$('.sim-input-simbol').keyup(function()
	{
		var yourInput = $(this).val();
		re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
		var isSplChar = re.test(yourInput);
		if(isSplChar)
		{
			var no_spl_char = yourInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
			$(this).val(no_spl_char);
        }
    });

    $('.input-emoji').bind('keyup blur',function(){ 
        var node = $(this);
        node.val(node.val().replace(/[^a-z]/g,'') ); }
    );

    function test_fn(test_value){
        var test_value = test_value.replace(/[^0-9]/g, "");
        document.getElementById("iid").value = test_value;
    }

    $('.sim-input-dots').keyup(function()
	{
		var test_value = $(this).val();
		var test_value = test_value.replace(/[^0-9]/g, "");
    });

    $(".sim-input-dots").change(function() {
        var a = $(this).val(); 
        var b = parseInt(a, 10);
        $(this).val(b);
    });

    $(".sim-input-dots").change(function() {
        var a = $(this).val(); 
        if(a == "NaN") {
            $(this).val(1);
        }
    });

    $('.sim-input-results').change(function()
	{
        var a = $(this).val(); 
        var isDot = a.indexOf(',');
        if(isDot > -1)
        {
            var b = parseInt(a, 10);
            $(this).val(b);
        }
    });
    $(".sim-input-results").change(function() {
        var a = $(this).val(); 
        if(a == "NaN") {
            $(this).val(1);
        }
    });

    $(".sim-input-dots").change(function() {
        var valueDate = $(this).val();
        var lastvalue = valueDate.charAt(valueDate.length-1);
        if (lastvalue == ".") {
            $(this).val(
                function(index, valueDate){
                    return valueDate.substr(0, valueDate.length - 1);
            })
        }
    });


});

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

    
    if (tecla == 8) {
        return true;
    }

    
    patron = /[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
};

function validaDot(e) {
    
    e.val(e.val().replace(/[^0-9]/gi, '') ); 
};


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

function format_number(n) {
    n = String(n).replace(/\D/g, "");
    return n === '' ? n : Number(n).toLocaleString("es-CL");
}







