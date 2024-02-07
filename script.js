let email= 'ivanssembeguya@gmail.com';
let password= '22/u/4780/ps';
 
let userEmail= prompt('Please enter your email');
let userPassword = prompt('enter password');


function emailAndPasswordValidation(validEmail, validPassword){ 
    
    if( validEmail === email && validPassword === password){
        
        console.log(`User email is, ${userEmail} login successfully`);
       
    }
    else{
        console.log(` Invalid login !!! Please try again`);

    }



}

emailAndPasswordValidation( userEmail, userPassword );

