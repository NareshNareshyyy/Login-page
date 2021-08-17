function vfun(){
    var uname=document.forms["myform"]["uname"].value;
    var email=document.forms["myform"]["email"].value;
    var pswd=document.forms["myform"]["pswd"].value;

    if(uname==null || uname==""){
        document.getElementById("errorBox").innerHTML = 
        "Please enter the user Name";
        return false ;
    }

    if(email==null || email==""){
        document.getElementById("errorBox").innerHTML = 
        "Please enter the email-id";
        return false;
    }
    
    if(pswd==null || pswd==""){
        document.getElementById("errorBox").innerHTML = 
        "Please enter the Password";
        return false;
    }

    if (uname !='' && email !='' && pswd !=''){
        alert("Login Successfully");
    }
    


    }
