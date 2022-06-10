//validation code

const email = document.formElement['form']['email'];
const password = document.formElement['form']['password'];

const email_error = document.getElementById('email_error');
const password_error =document.getElementById('password_error');

function validated(){
    if (email.value.lenght < 9){
        email.style.border ="1px solid red";
        email_error.style.display="block";
        email.focus();
        return false;
    }
}
  
    

