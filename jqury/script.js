$(function() {
  
  var $registerFrom= $("#register");
  
   $registerFrom.validate({
    rules:{ 
      fristname:{
         required: true,
         lattersonly: true
      } ,

      LASTNAME:{
        required: true,
        lattersonly: true
     } ,

     Email:{
        required: true,
        Email:true
        
     } ,

     Mobile:{
        required: true,
        numericonly:true,
        minilength:10,
        maxlength:12
     } ,

     General:{
        required: true
     } ,

     dateofbirth:{
        required: true
     } ,


     Address:{
        required: true
     } ,


     City:{
        required: true
     } ,
   
     
     Areapin:{
        required: true
     } ,


     
     State:{
        required: true
     } ,


     
     Qulification:{
        required: true
     } ,

     
     specialization:{
        required: true
     } ,

     password:{
        required: true
     } ,

     


    },




    messagess:{
         fristname:{
            required:'frist name is must be required',
            lattersonly:'invalid name'
            },


            LASTNAME:{
                required: 'last name is must be required',
                lattersonly:'invalid name'
             } ,
        
             Email:{
                required: 'Email is must be required',
                Email:'email invalid'
             } ,
        
             Mobile:{
                required: 'mobile is must be required',
                numericonly:'movile is invalid',
                minilength:'min 10 digits',
                maxlength:'max 12 digits'
             } ,
        
             General:{
                required: 'general is must be required'
             } ,
        
             dateofbirth:{
                required: 'date of birth is must be required'
             } ,
        
        
             Address:{
                required: 'Address is must be required'
             } ,
        
        
             City:{
                required: 'City is must be required'
             } ,
           
             
             Areapin:{
                required: 'Area pin is must be required'
             } ,
        
        
             
             State:{
                required: 'state  is must be required'
             } ,
        
        
             
             Qulification:{
                required: 'qulification is must be required'
             } ,
        
             
             specialization:{
                required: 'specification is must be required'
             } ,
        
             password:{
                required: 'password is must be required'
             } ,

          
                        





},

 errorPlacement:function(error,element){
    if(element.is(":radio")){
        error.append(element.parents(".gen"));
    }
    else{
        error.insertAfter(element); 
    }
}


})



jQuery.validator.addMethod('lattersonly', function(error,element){
    return/^[^~\s][a-zA-Z\s-]+$/;

});

jQuery.validator.addMethod('numericonly', function(error,element){
   return/^[0-9]+$/;

});

  



$('#submit').click(function(e){
    alert($("#submit").val())

   if(e.val() == "")
   {
     alert("hi")
     e.css("border","3px solid red");
     return false;
   }
   else
   {
     e.css("border","3px solid green");
     return false;
   }

   


 })

})