$(document).ready(function() {
    "use strict";
    /*==================================================================
    [ Focus input ]*/
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
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
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
    
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showPass = 0;
        }
    });

    $(document).on('click', '.txt2', function(){ 
        var text = '<div class="wrap-login100 signin" style="margin-top: 10px;"><form class="login100-form validate-form"><span class="login100-form-title p-b-25">환영합니다</span>' +
        '<div class="wrap-input100 validate-input" data-validate = "올바르지 않은 이메일 형식입니다."><input class="input100" type="text" name="email"><span class="focus-input100" data-placeholder="이메일"></span></div>' +
        '<div class="wrap-input100 validate-input" data-validate="비밀번호를 입력 해 주세요.">' +
        '<input class="input100" type="password" name="pass"><span class="focus-input100" data-placeholder="비밀번호"></span></div>' +
        '<div class="wrap-input100 validate-input" data-validate="비밀번호를 입력 해 주세요.">' +
        '<input class="input100" type="password"><span class="focus-input100" data-placeholder="비밀번호 확인"></span></div>' +
        '<div class="wrap-input100 validate-input" data-validate = ""><input class="input100" type="text" name="name"><span class="focus-input100" data-placeholder="이름"></span></div>' +
        '<div style="margin-bottom: 10px;">신분<select><option value="worker">직장인</option><option value="student">학생</option><option value="retire">정년퇴직자</option><option value="none">무직</option></select></div>' + 
        '세부적인 정보는 "추가정보 입력" 에서 작성하실 수 있습니다.' +
        '<div class="container-login100-form-btn"><div class="wrap-login100-form-btn"><button class="loginbtn">회원가입</button></div></div>' +
        '<div class="text-center p-t-10"><a class="txt3" href="">로그인 페이지로</a></div></form></div>';
        $(".component").hide();

        var x = $(".container-login100");
        $(".wrap-login100").remove();
        x.append(text);
        x.hide();
        x.slideDown(500);
    });

    $(document).on('click', '.txt3', function(){
        var text2 = '<div class="wrap-login100 signin"><form class="login100-form validate-form"><span class="login100-form-title p-b-25">환영합니다</span>' +
        '<div class="wrap-input100 validate-input" data-validate = "올바르지 않은 이메일 형식입니다."><input class="input100" type="text" name="email"><span class="focus-input100" data-placeholder="Email"></span></div>' +
        '<div class="wrap-input100 validate-input" data-validate="비밀번호를 입력 해 주세요."><span class="btn-show-pass"><i class="zmdi zmdi-eye"></i></span>' +
        '<input class="input100" type="password" name="pass"><span class="focus-input100" data-placeholder="Password"></span></div>' +
        '<div class="container-login100-form-btn"><div class="wrap-login100-form-btn"><button class="loginbtn">로그인</button></div></div>' +
        '<div class="text-center p-t-10"><span class="txt1">아직 계정이 없으신가요?</span><a class="txt2" href=""> 회원가입</a></div></form></div>';
        $(".component").show();

        var x = $(".container-login100");
        $(".wrap-login100").remove();
        x.append(text2);
        x.hide();
        x.slideDown(500);
    }); 
});