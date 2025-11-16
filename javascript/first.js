

function convertTemperature(){
   let tempInput = document.getElementById("tempInput").value
   let tempFrom = document.getElementById("tempFrom").value
   let tempTo = document.getElementById("tempTo").value
   let tempResult = document.getElementById("tempResult")

   let result

   if(tempFrom == tempTo){
      result = tempInput
   }else if(tempFrom == "celsius"){
      if(tempTo == "fahrenheit"){
         result = tempInput * 2
      }else if(tempTo == "kelvin"){
         result = tempInput * 3
      }
   }else if(tempFrom == "fahrenheit"){
      if(tempTo == "celsius"){
         result = tempInput * 2
      }else if(tempTo == "kelvin"){
         result = tempInput * 3
      }
   }else if(tempFrom == "kelvin"){
      if(tempTo == "celsius"){
         result = tempInput * 2
      }else if(tempTo == "fahrenheit"){
         result = tempInput * 3
      }
   }
   tempResult.innerHTML = result
   tempResult.style.display = "block"
}