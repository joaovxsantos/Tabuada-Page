function tabuada(){
    let valor = document.getElementById("valor")
    let x = document.getElementById("a")
    let a = valor.value
    let b = valor.value * 0
    let c = valor.value* 1
    let d = valor.value* 2
    let e = valor.value* 3
    let f = valor.value* 4
    let g = valor.value* 5
    let h = valor.value* 6
    let i = valor.value* 7
    let j = valor.value* 8
    let k = valor.value* 9
    let l = valor.value* 10

    x.innerText = a + " x 0 = " + b  + "\n" + a + " x 1 = " + c + "\n" + a + " x 2 = " + d 
    + "\n" + a + " x 3 = " + e + "\n" + a + " x 4 = " + f + "\n" + a + " x 5 = " + g 
    + "\n" + a + " x 6 = " + h + "\n" + a + " x 7 = " + i + "\n" + a + " x 8 = " + j +
    "\n" + a + " x 9 = " + k + "\n" + a + " x 10 = " + l
    
}