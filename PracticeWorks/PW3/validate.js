
window.onload = function(){

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input elements 
	// they are initially empty and hidden

    // password should have minimum 6 characters, one uppercase, one number, one special character    
    let strongPassword = new RegExp('(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})')
    let validEmailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]');

	var email = document.getElementById("email");
    var span1 = document.createElement("span");
    span1.setAttribute('id',"span1");
	span1.style.display = "none";
    email.parentNode.appendChild(span1);

    var pwd = document.getElementById("pwd");
    var span2 = document.createElement("span");
    span2.setAttribute('id',"span2");
    span2.style.display = "none"; 
    pwd.parentNode.appendChild(span2);

    var confirm = document.getElementById("confirm");
    var span3 = document.createElement("span");
    span3.setAttribute('id',"span3");
    span3.style.display = "none"; 
    confirm.parentNode.appendChild(span3);

    email.onfocus = function(){
        if(email.classList.contains('error'))
        {
            email.classList.remove('error');   
        }
        span1.textContent="Email should be of the form: <prefix>@<domain_part1>.<domain_part2>";
        span1.style.display = "block";
    }

    email.onblur = function(){
        span1.style.display = "none";
    }

    pwd.onfocus = function(){
        if(pwd.classList.contains('error'))
        {
            pwd.classList.remove('error');
            if(confirm.classList.contains('error'))
            {
                confirm.classList.remove('error');
            }
        }
        span2.textContent="The password field should contain at least six characters, one uppercase letter, one number and one special character (!,@,#,$,%,^,&,*,+)";
        span2.style.display = "block";
    }

    pwd.onblur = function(){
        span2.style.display = "none";
    }

    confirm.onfocus = function(){
        if(confirm.classList.contains('error'))
        {
            confirm.classList.remove('error');
            if(pwd.classList.contains('error'))
            {
                pwd.classList.remove('error');
            }
        }
    }

    confirm.onblur = function(){
        span3.style.display = "none";
    }

    var form = document.getElementById("myForm");
    form.onsubmit = function(e){

        if(!isValidEmailAddress(email.value, validEmailRegex))
           return false;
        if(!isValidPassword(pwd.value, strongPassword))
            return false;
        if(!isValidConfirmPassword(pwd.value, confirm.value))
            return false;
        alert("Done!");
    }

    function isValidEmailAddress(inputText, validEmailRegex)
    {
        
        if(!inputText.match(validEmailRegex))
        {
            email.classList.add('error');
            span1.style.display= "block";
            span1.classList.add('error_span_class');
            span1.textContent="Invalid Email Address";
            return false;
        }
        return true;
    }

    function isValidPassword(inputText, strongPassword)
    {
        if(!inputText.match(strongPassword))
        {
            pwd.classList.add('error');
            span2.style.display= "block";
            span2.classList.add('error_span_class');
            span2.textContent="The password field should contain at least six characters, one uppercase letter, one number and one special character (!,@,#,$,%,^,&,*,+)";
            return false;
        }
        return true;    
    }

    function isValidConfirmPassword(pwdv, confirmv)
    {   
        if(!(pwdv===confirmv))
        {
            pwd.classList.add('error');
            confirm.classList.add('error');
            span3.style.display= "block";
            span3.classList.add('error_span_class');
            span3.textContent="Password should match the previous field value.";
            return false;
        }   
        return true;
    }
}


