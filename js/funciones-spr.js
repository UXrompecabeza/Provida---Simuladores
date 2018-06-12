$(document).ready(function() {
    
    //ANCLA

    if ($(window).width() <= 768) {  

        $( ".ancla" ).append( "<div id='pensionate'>&nbsp;</div>" )

    }
    
    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize <= 768) {
            $('.ancla-tablet').removeAttr('id');
            $('.ancla-desk').removeAttr('id');
            $('.ancla-movil').attr('id', 'ancla');
        }
        else if (windowSize >= 769 && windowSize <= 992) {
            $('.ancla-tablet').attr('id', 'ancla');
            $('.ancla-desk').removeAttr('id');
            $('.ancla-movil').removeAttr('id');
        }
        else if (windowSize >= 993) {
            $('.ancla-desk').attr('id', 'ancla');
            $('ancla-tablet').removeAttr('id');
            $('.ancla-movil').removeAttr('id');
        }
    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

     // Add smooth scrolling to all links
     $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $('.btn-tooltips').tooltip({ title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora necessitatibus suscipit aliquid et saepe facere vitae repellat dolore, error consequatur doloribus, amet aliquam quod, exercitationem odio culpa. Magnam, illum, animi.", placement: "top" });


    $('.btn-success').tooltip({ title: "Hooray", placement: "bottom" });
    $('.btn-danger').tooltip({ title: "Hooray", placement: "left" });
    $('.btn-default').tooltip({ title: "Hooray", placement: "right" });
    $(".btn-tabla-detalle").click(function() {
        $(".tabla-contenido").slideToggle();
    });
    $('.input_rut').rut();
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})


$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


var menu = $('.menue'),
    profileObj = $('.profile-object');

menu.click(function() {
    profileObj.toggleClass('move-left');
});


$('.btn-open-email').click(function(e) {
    e.preventDefault();
    $('.panel-heading').removeClass('active');

    var $parentHeading = $(this).parents('.panel-heading');
    $parentHeading.addClass('active');
    $('.primero').show();
    $('.segundo').hide();
    $parentHeading.find('.primero').hide();
    $parentHeading.find('.segundo').show();
});


$('.sl-1').on('click touchstart', function() {
    $('.mov1').removeClass('hide');
    $('.sl-2').on('click touchstart', function() {
        $('.mov1').addClass('hide');
        $('.mov2').addClass('hide');
        $('.mov3').removeClass('hide');
    });
});


$('.sl-2').on('click touchstart', function() {
    $('.mov2').removeClass('hide');
    $('.sl-1').on('click touchstart', function() {
        $('.mov1').addClass('hide');
        $('.mov2').addClass('hide');
        $('.mov3').removeClass('hide');
    });
});

var mediaquery = window.matchMedia("(max-width: 1025px)");
if (mediaquery.matches) {

} else {
    $('#sidebar').portamento({ wrapper: $('#wrapper') }); // set #wrapper as the bottom boundary
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

$('input#date2').attr('maxLength', '2').keypress(limitMe);

function limitMe(e) {
    if (e.keyCode == 8) { return true; }
    return this.value.length < $(this).attr("maxLength");
}

$('input#date4').attr('maxLength', '4').keypress(limitMe);

function limitMe(e) {
    if (e.keyCode == 8) { return true; }
    return this.value.length < $(this).attr("maxLength");
}

$('input#rut-limit').attr('maxLength', '9').keypress(limitMe);

function limitMe(e) {
    if (e.keyCode == 8) { return true; }
    return this.value.length < $(this).attr("maxLength");
}

// <!-- DELIMITACION NOMBRE -->

$('input#nom_form').attr('maxLength', '30').keypress(limitMe);

function limitMe(e) {
    if (e.keyCode == 8) { return true; }
    return this.value.length < $(this).attr("maxLength");
}

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

$("#exito-val").click(function() {
    $(".show-modal-content").removeClass("max-slider-handle");
    $(".hide-modal-content").addClass("max-slider-handle");
});

$(".tiemposelect").hide();

$("#mensual").click(function() {
    $(".tiemposelect").show();
});

// LIMPIAR VALIDACION MODAL

$('.modal').on('hidden.bs.modal', function() {
    $(this).find('form')[0].reset(); //para borrar todos los datos que tenga los input, textareas, select.
    $(".form-user-ctrl").removeClass("error"); //lo utilice para borrar la etiqueta de error del jquery validate
});
