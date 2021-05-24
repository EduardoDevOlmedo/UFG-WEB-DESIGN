function buttonclick()    
{    
    var menuList = document.getElementById("menu");    
    if (menuList.className == "menuOff")    
    {    
    
        menuList.className = "menuOn";    
    } else    
    {    
    
        menuList.className = "menuOff";    
    }    
}


function hipotenusa(num1, num2){
   let resultado1 = Math.pow(num1, 2) + Math.pow(num2, 2)
   let resultado = Math.sqrt(resultado1)
   console.log(resultado) 
}

hipotenusa(4, 5)