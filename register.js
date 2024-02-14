function checkForm(e) {
   e.preventDefault();
   let fullNameInput = document.getElementById("fullName");
   let errorSpan = fullNameInput.previousElementSibling;
   let outputP = document.getElementById("tryCatchOutput");
   errorSpan.innerHTML = "";
   outputP.innerHTML = "";

   try{
      if(fullNameInput.value == ""){
         throw 
      }
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});