/*
  Faça um script que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.
 
*/
function  diaSemana(dia){
   switch (dia) {
      case 1:
        console.log("1- Domingo");
        break;
      case 2:
         console.log("2- Segunda-feira");  
        break;
      case 3:
         console.log("3- Terça-feira");  
        break;
      case 4:
         console.log("4- Quarta-feira");  
        break;
      case 5:
         console.log("5- Quinta-feira");  
        break;
      case 6:
         console.log("6- Sexta-feira");  
        break;
      case 7:
         console.log("7- Domingo"); 
        break;
      default:
         console.log("Valor Inválido");
   }
      
}

diaSemana(9);