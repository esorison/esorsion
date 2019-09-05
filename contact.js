// var myform = document.getElementById("contact");
// console.log();
// if(document.contact.onsubmit()){
//   alert("Name must be filled out");
// }

// action="https://docs.google.com/forms/d/e/1FAIpQLSfoON8kBlutOpW8QDSMXsRs-jtYqLNoUqf6-25d8gpXWq0vcQ/formResponse"


function validateform(){  
  var name=document.contactform.name.value;  
  var password=document.contactform.password.value;  
    
  if (name==null || name.length<6){  
    alert("Name can't be blank or less than 6");  
    return false;  
  }else if(password.length<20){  
    alert("Password must be at least 20 characters long.");  
    return false;  
    }  
  } 