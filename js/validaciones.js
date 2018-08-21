$(document).ready(function(){
    if (f.id == "renta") {
    if ($("form.generic-form.userForm").closest(".contact-container--form-card").find("form").data("market-code") == "UK") {
        if (ukPostalCodeRegex.test(fieldValue)) {

            this.hideError(f.id);
        } else {
            this.showError(f.id, f.type);
        }
    }
}
$('[data-valid-type=renta]').on('blur', function (evt) {
                evt.preventDefault();
                var $this = $(this);
                var val = $this.val();
                //I am currently adding an if statement to specifically target the UK form
                if ($("form.generic-form.userForm").closest(".contact-container--form-card").find("form").data("market-code") === "UK") {
                    var re = /[A-Z]{1,2}[0-9][0-9A-Z]?\s[0-9][A-Z]{2}$/gi;
                    validateOnType(val, $this, re);
                } else {
                    var re = /^\d{11}$/i;
                    validateOnType(val, $this, re);
                }
            });
$('[data-valid-type=renta]').on('keyup', function (evt) {
                if ($("form.generic-form.userForm").closest(".contact-container--form-card").find("form").data("market-code") !== "UK") {
                    var regexp = /[^0-9]/;
                    var str = $(this).val();
                    if (str.match(regexp)) {
                        str = str.replace(/\D/g, "");
                        $(this).val(str);
                    }
                    var len = str.length;
                    if (len > 11) {
                        str = str.substr(0, 11)
                        $(this).val(str);
                        return false;
                    }
                }
            });

});