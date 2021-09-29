<script>
    Function ()
    { 
       const password1 = password.value.trim();
       const confrimpassword1 = confirmpassword.value.trim(); 
    }
   if(password1 == ''){
     setErrorFor(password,"password cannot be blank");
   } else {
     setSuccessFor(password);
   }
   if(confirmpassword1 ==''){
     setErrorFor(confirmpassword, 'confirmpassword cannot be blank');
   } else if( password1!== confirmpassword){
     setErrorFor(confirmpassword, 'passwords does not match');
   } else {
     setSuccessFor(confirmpassword);
   }
</script>     