function tabuada(){
    let valor = document.getElementById("valor")
    let x = document.getElementById("a")
    let a = valor.value
    var teste = ""
    for (var count = 1; count<=10; count++){
   teste = a + " x " + count + " = " + a*count

   x.innerHTML = teste
}
}

