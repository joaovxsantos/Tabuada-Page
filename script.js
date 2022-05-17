function tabuada(){
    let valor = document.getElementById("valor") //aqui peguei o elemento com id "valor"
    let x = document.getElementById("a") //aqui peguei o elemento com id "a"
    let a = valor.value //aqui peguei o value do let valor
    var teste = "" //aq uma var vazia pra usar dps
    for (var count = 1; count<=10; count++){ //aqui o for
   teste += a + " x " + count + " = " + a*count + "<br/>" //aq eu apenas add tudo q fiz no for **obs para o += q é para incrementar tudo

   x.innerHTML = teste //aq eu passei o var teste para o innerhtml de x
}
}

