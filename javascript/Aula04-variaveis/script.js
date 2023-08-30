var a = 10
var b = 20
var c = null //variavel auxiliar

document.write('<h1>Neste Script Existem 3 variaveis que recebem os seguintes valores: <br>a= '+ a +' <br>b= '+ b +' <br>c= '+ c +'</h1>')

document.write('<hr>')

c = a
a = b
b = c

document.write('<h1>Neste Script Existem 3 variaveis que recebem os seguintes valores: <br>a= '+ a +' <br>b= '+ b +' <br>c= '+ c +'</h1>')