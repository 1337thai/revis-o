let opcao = prompt("DIGITE 1 PARA SOMAR \n DIGITE 2 PARA SUBTRAIR \n DIGITE 3 PARA DIVIDIR \n  DIGITE 4 PARA MULTIPLICAR")
let num = parseInt(prompt("Digite um numero"))
let oderNum = prompt("Digite outro numero")

switch(parseInt(opcao)){
   
  case 1:
    total = parseInt (oderNum) + parseInt (num)
    console.log("O total  foi de "+total)
    break
   
  case 2:
    total = parseInt (oderNum) - parseInt (num)
    console.log("O total  foi de "+total)
    break
   
  case 3:
    total = parseInt (oderNum) / parseInt (num)
    console.log("O total  foi de "+total)
    break
   
  case 4:
    total = parseInt (oderNum) * parseInt (num)
    console.log("O total  foi de "+total)
    break
   
  default:
    console.log("Código inválido")
    
}