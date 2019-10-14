
(function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })


    /*==================================================================
    [ Validate after type ]*/
    $('.validate-input .input100').each(function(){
        $(this).on('blur', function(){
            if(validate(this) == false){
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })    
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
           $(this).parent().removeClass('true-validate');
        });
    });
var pass = document.getElementById("pass").value;
 
    function validate (input) {
        var reg = (/^[a-zA-Z' ']+$/);
        var str = (/^[a-zA-Z0-9_-]+$/);
        var password = (/^[0-9a-zA-Z]+$/);
        var number = (/^[0-9]+$/);
        
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        if($(input).attr('type') == 'name' || $(input).attr('name') == 'name'){
            if($(input).val().trim().match(reg) == null) {
                return false;
            }
        }
        if($(input).attr('type') == 'username' || $(input).attr('name') == 'username'){
            if($(input).val().trim().match(str) == null) {
                return false;
            }
        }
        if($(input).attr('type') == 'pass' || $(input).attr('name') == 'pass' || $(input).attr('type') == 'repeat-pass' || $(input).attr('name') == 'repeat-pass'){
            if($(input).val().trim().match(password) == null || $(input).val().trim().length<6 || $(input).val().trim().length>12) {
                return false;
            }
            if($(input).attr('type') == 'pass' || $(input).attr('name') == 'pass'){
                pass = $(input).val().trim();
            }
            if($(input).attr('type') == 'repeat-pass' || $(input).attr('name') == 'repeat-pass'){
                var repsword = document.getElementById("repeat-pass").value;
                if(pass != repsword) {
                    return false;
                }
            }

        }
        if($(input).attr('type') == 'zip' || $(input).attr('name') == 'zip'){
            if($(input).val().trim().match(number) == null || $(input).val().trim().length != 5) {
                return false;
            }
        }
        if($(input).attr('type') == 'city' || $(input).attr('name') == 'city'){
            if($(input).val().trim().match(/^[a-zA-Z]+$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    


})(jQuery);