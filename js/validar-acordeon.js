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
    var v14 = validate11();
    
    
    if ( v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8 && v9 && v10 && v14) {
        return true
    } else {
        $(".rut-error").first().focus();
        return false;
    }
};

function validate1() {
    var a = $('.e-prod1').val()!='default';
    var b = document.forms["form-accordion"]["pension-porc-1"].value == 0;
    var c = document.forms["form-accordion"]["pension-porc-2"].value == 0;
    
    if(a && b && c) {
        $('.pension-porc-1').addClass("rut-error");
        $('.pension-porc-2').addClass("rut-error");
        $('.e-monto1').parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.e-monto1').parents(".border-top").children(".accordion__title").children(".icon-minus").css( "display","block" );
        $('.e-monto1').parents(".border-top").children(".accordion__title").children(".icon-plus").css( "display","none" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
}

function validate2() {
    var a = $('.e-prod2').val()!='default';
    var b = document.forms["form-accordion"]["cuenta-porc-1"].value == 0;
    var c = document.forms["form-accordion"]["cuenta-porc-2"].value == 0;
    
    if(a && b && c) {
        $('.cuenta-porc-1').addClass("rut-error");
        $('.cuenta-porc-2').addClass("rut-error");
        $('.e-monto2').parent().parent().parent().parent().parent().parent().css( "display","block" );
        $('.e-monto2').parents(".border-top").children(".accordion__title").children(".icon-minus").css( "display","block" );
        $('.e-monto1').parents(".border-top").children(".accordion__title").children(".icon-plus").css( "display","none" );
        $('.e-btn-acordion').attr("disabled");
        return false;
    } else {
        return true;
    }
}

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

function validateChildren(event) {
    let select = event.target;
    let day = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[1].childNodes[1].children[0];
    let month = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[1].childNodes[1].children[2];
    let year = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[1].childNodes[1].children[4];
    let state = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0];
    let inv = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[0].childNodes[1].childNodes[4].childNodes[0].childNodes[0];
    if (select.val!='default' && day.value=="" ) {
        day.classList.add('noValidate')
    }
    if (select.val!='default' && month.value=="" ) {
        month.classList.add('noValidate')
    }
    if (select.val!='default' && year.value=="" ) {
        year.classList.add('noValidate')
    }
    if (select.val!='default' && state.value=="" ) {
        state.classList.add('noValidate')
    }
    if (select.val!='default' && inv.value=="" ) {
        inv.classList.add('noValidate')
    }
    $('input').on('keyup change paste', function () {
        if ($(this).val() > 0) {
            $(this).removeClass('noValidate');
            $(this).removeClass('rut-error');
        } 
        if ($(this).val() == "") {
            $(this).addClass('noValidate');
        } 
        if ($('.bg-skyblue-acordeon').find(".noValidate").length == 0) {
            $(".fakeBtn").hide()
            $(".e-btn-acordion").show()
        } 
        if ($('.bg-skyblue-acordeon').find(".noValidate").length > 0) {
            $(".fakeBtn").show()
            $(".e-btn-acordion").hide()
        }
    });
    $("select").on('change', function() {
        if ($(this).val()!='') {
            $(this).removeClass('noValidate');
            $(this).removeClass('rut-error');
        } 
        if ($(this).val()=='') {
            $(this).addClass('noValidate');
        } 
        if ($('.bg-skyblue-acordeon').find(".noValidate").length == 0) {
            $(".fakeBtn").hide()
            $(".e-btn-acordion").show()
        } 
        if ($('.bg-skyblue-acordeon').find(".noValidate").length > 0) {
            $(".fakeBtn").show()
            $(".e-btn-acordion").hide()
        } 
    });
    if ($(".mar-bottom-24").find(".fakeBtn").length == 0) {
        $(".mar-bottom-24").append("<button onclick='fakeClick()' class='botns fakeBtn ladda-button botns-provida-v btn-desktop'>CALCULAR</button>")
    }
    $(".e-btn-acordion").hide()
}

function validateChildren2(event) {
    let select = event.target;

    let monto = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[1].children[1];
    let fondo1 = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[2].childNodes[1].children[1];
    let fondo2 = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[2].childNodes[2].children[1];
    // MONTO  
    // .parent().parent().parent().parent().parent().children().eq(0).children().eq(1).children().eq(1).children().eq(1)
    // FONDO1
    // .parent().parent().parent().parent().parent().children().eq(0).children().eq(2).children().eq(1).children().eq(1)
    // FONDO2
    // .parent().parent().parent().parent().parent().children().eq(0).children().eq(2).children().eq(2).children().eq(1)
    if (select.val!='default' && monto.value=="" ) {
        monto.classList.add('noValidate')
    }
    if (select.val!='default' && fondo1.value=="" ) {
        fondo1.classList.add('noValidate')
    }
    if (select.val!='default' && fondo2.value=="" ) {
        fondo2.classList.add('noValidate')
    }
    
    $('input').on('keyup change paste', function () {
        if ($(this).val() > 0) {
            $(this).removeClass('noValidate');
            $(this).removeClass('rut-error');
        } 
        if ($(this).val() == "") {
            $(this).addClass('noValidate');
        } 
        if ($('.bg-skyblue-acordeon').find(".noValidate").length == 0) {
            $(".fakeBtn").hide()
            $(".e-btn-acordion").show()
        } 
        if ($('.bg-skyblue-acordeon').find(".noValidate").length > 0) {
            $(".fakeBtn").show()
            $(".e-btn-acordion").hide()
        }
    });
    $("select").on('change', function() {
        if ($(this).val()!='') {
            $(this).removeClass('noValidate');
            $(this).removeClass('rut-error');
        } 
        if ($(this).val()=='') {
            $(this).addClass('noValidate');
        } 
        if ($('.bg-skyblue-acordeon').find(".noValidate").length == 0) {
            $(".fakeBtn").hide()
            $(".e-btn-acordion").show()
        } 
        if ($('.bg-skyblue-acordeon').find(".noValidate").length > 0) {
            $(".fakeBtn").show()
            $(".e-btn-acordion").hide()
        } 
    });
    if ($(".mar-bottom-24").find(".fakeBtn").length == 0) {
        $(".mar-bottom-24").append("<button onclick='fakeClick()' class='botns fakeBtn ladda-button botns-provida-v btn-desktop'>CALCULAR</button>")
    }
    $(".e-btn-acordion").hide()
}

function fakeClick() {
    $(".noValidate").addClass("rut-error")
}