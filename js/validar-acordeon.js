function validateAccordion() {      
    var v3 = validate3();
    var v4 = validate4();
    var v5 = validate5();
    var v6 = validate6();
    var v7 = validate7();
    var v8 = validate8();
    var v9 = validate9();
    var v10 = validate10();
    var v14 = validate11();
    
    if ( v3 && v4 && v5 && v6 && v7 && v8 && v9 && v10 && v14) {
        return true
    } else {
        $(".rut-error").first().focus();
        return false;
    }
};

function validate3() {
    var c = document.forms["form-accordion"]["e-monto1"].value;
    var d = $('.e-prod1').val()!='default';

    if (c =="" && d) {
        $('.e-monto1').addClass("rut-error");
        $('.e-monto1').parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.e-monto1').parents(".border-top").children(".accordion__title").children(".icon-minus").css( "display","block" );
        $('.e-monto1').parents(".border-top").children(".accordion__title").children(".icon-plus").css( "display","none" );
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
        $('.e-monto2').parents(".border-top").children(".accordion__title").children(".icon-minus").css( "display","block" );
        $('.e-monto2').parents(".border-top").children(".accordion__title").children(".icon-plus").css( "display","none" );
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
        $('.e-monto2').parents(".border-top").children(".accordion__title").children(".icon-minus").css( "display","block" );
        $('.e-monto2').parents(".border-top").children(".accordion__title").children(".icon-plus").css( "display","none" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};
function validate6() {
    var g = $('.e-parent');

    if (g.val()!='default' && g.parents(".bg-skyblue-acordeon").find('.birthDateMonth').val() == "") {
        $('.birthDateMonth').addClass("rut-error");
        $('.birthDateMonth').parent().parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.birthDateMonth').parents(".border-top").children(".accordion__title").children(".icon-minus").css( "display","block" );
        $('.birthDateMonth').parents(".border-top").children(".accordion__title").children(".icon-plus").css( "display","none" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};

function validate7() {
    var g = $('.e-parent');

    if (g.val()!='default' &&  g.parents(".bg-skyblue-acordeon").find('.birthDateDay').val() == "") {
        $('.birthDateDay').addClass("rut-error");
        $('.birthDateDay').parent().parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.birthDateDay').parents(".border-top").children(".accordion__title").children(".icon-minus").css( "display","block" );
        $('.birthDateDay').parents(".border-top").children(".accordion__title").children(".icon-plus").css( "display","none" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};
function validate8() {
    var g = $('.e-parent');

    if (g.val()!='default' && g.parents(".bg-skyblue-acordeon").find('.birthDateYear').val() == "" ) {
        $('.birthDateYear').addClass("rut-error");
        $('.birthDateMonth').parent().parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.birthDateMonth').parents(".border-top").children(".accordion__title").children(".icon-minus").css( "display","block" );
        $('.birthDateMonth').parents(".border-top").children(".accordion__title").children(".icon-plus").css( "display","none" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};
function validate9() {
    var g = $('.e-parent');

    if (g.val()!='default' && g.parents(".bg-skyblue-acordeon").find('.e-estCivil').val()=='default') {
        $('.e-estCivil').addClass("rut-error");
        $('.birthDateMonth').parent().parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.birthDateMonth').parents(".border-top").children(".accordion__title").children(".icon-minus").css( "display","block" );
        $('.birthDateMonth').parents(".border-top").children(".accordion__title").children(".icon-plus").css( "display","none" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};
function validate10() {
    var g = $('.e-parent');

    if (g.val()!='default' && g.parents(".bg-skyblue-acordeon").find('.e-grado').val()=='default' ) {
        $('.e-grado').addClass("rut-error");
        $('.birthDateMonth').parent().parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.birthDateMonth').parents(".border-top").children(".accordion__title").children(".icon-minus").css( "display","block" );
        $('.birthDateMonth').parents(".border-top").children(".accordion__title").children(".icon-plus").css( "display","none" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
};

function validate11() {
    if  ($(".rut-error").length > 0){
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

$('input').bind('contextmenu',function(e){
    return false;
});

