function validateAccordion() {      
    var v1 = validate1();
    var v2 = validate2();
    var v3 = validate3();
    var v4 = validate4();
    var v5 = validate5();
    var v6 = validate6();
    var v7 = validate7();
    var v8 = validate8();
    var v9 = validate9();
    var v10 = validate10();
    var v11 = validate2b();
    var v12 = validate6b();
    var v13 = validate8b();
    
    if (v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8 && v9 && v10 && v11 && v12 && v13) {
        return true
    } else {
        $(".rut-error").first().focus();
        // var scroll = $(window).scrollTop();
        // window.scrollTo(0,scroll-83)
        return false;
    }
};

function validate1() {
    var a = document.forms["form-accordion"]["e-input-cantPension"].value;
    var b = document.forms["form-accordion"]["edadform"].value;

    if (a == "" ) {
        $('.e-input-cantPension').addClass("rut-error");
        $('.e-input-cantPension').parent().parent().parent().parent().css( "display","block" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};
function validate2() {
    var b = document.forms["form-accordion"]["edadform"].value;

    if (b =="") {
        $('.e-input-cantPension').parent().parent().parent().parent().css( "display","block" );
        $('.edadform').addClass("rut-error");
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};

function validate2b() {
    var b = document.forms["form-accordion"]["edadform"].value;

    if (b < 45) {
        $('.e-input-cantPension').parent().parent().parent().parent().css( "display","block" );
        $('.edadform').addClass("rut-error");
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};
function validate3() {
    var c = document.forms["form-accordion"]["e-monto1"].value;
    var d = $('.e-prod1').val()!='default';

    if (c =="" && d) {
        $('.e-monto1').addClass("rut-error");
        $('.e-monto1').parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};
function validate4() {
    var e = $('.e-prod2').val()!='default';
    var f = document.forms["form-accordion"]["e-monto2"].value;

    if (e && f =="") {
        $('.e-monto2').addClass("rut-error");
        $('.e-monto2').parent().parent().parent().parent().parent().css( "display","block" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};
function validate5() {
    var e = $('.e-prod2').val()!='default';
    var f = document.forms["form-accordion"]["e-monto2"].value;

    if (e && f =="") {
        $('.e-monto2').addClass("rut-error");
        $('.e-monto2').parent().parent().parent().parent().parent().css( "display","block" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};
function validate6() {
    var g = $('.e-parent').val()!='default';
    var h1 = document.forms["form-accordion"]["birthDateMonth"].value;

    if (g && h1 =="") {
        $('.birthDateMonth').addClass("rut-error");
        $('.birthDateMonth').parent().parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};

function validate6b() {
    var g = $('.e-parent').val()!='default';
    var h1 = document.forms["form-accordion"]["birthDateMonth"].value;

    if (g && h1 > 13) {
        $('.birthDateMonth').addClass("rut-error");
        $('.birthDateMonth').parent().parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};
function validate7() {
    var g = $('.e-parent').val()!='default';
    var h2 = document.forms["form-accordion"]["birthDateDay"].value;

    if (g &&  h2 =="") {
        $('.birthDateDay').addClass("rut-error");
        $('.birthDateMonth').parent().parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};
function validate8() {
    var g = $('.e-parent').val()!='default';
    var h3 = document.forms["form-accordion"]["birthDateYear"].value;

    if (g && h3 =="" ) {
        $('.birthDateYear').addClass("rut-error");
        $('.birthDateMonth').parent().parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};
function validate8b() {
    var g = $('.e-parent').val()!='default';
    var h3 = document.forms["form-accordion"]["birthDateYear"].value;

    if (g && h3 > 2019 ) {
        $('.birthDateYear').addClass("rut-error");
        $('.birthDateMonth').parent().parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};
function validate9() {
    var g = $('.e-parent').val()!='default';
    var i = $('.e-estCivil').val()=='default';

    if (g && i) {
        $('.e-estCivil').addClass("rut-error");
        $('.birthDateMonth').parent().parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};
function validate10() {
    var g = $('.e-parent').val()!='default';
    var j = $('.e-grado').val()=='default';

    if (g && j ) {
        $('.e-grado').addClass("rut-error");
        $('.birthDateMonth').parent().parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};

$('input').on('keyup keydown keypress change paste', function () {
    if ($(this).val() > 0) {
        $(this).removeClass('rut-error');
    } 
});

$("select").on('change', function() {
    if ($(this).val()!='default') {
        $(this).removeClass('rut-error');
    } 
});

