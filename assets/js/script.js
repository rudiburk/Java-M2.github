let HTML1 = document.getElementById("HTML1");  
let HTML2 = document.getElementById("HTML2"); 
let HTML3 = document.getElementById("HTML3"); 
let HTMLPromedio = document.getElementById("HTML_promedio");

let nota1HTML = parseInt(prompt("Ingrese la Nota 1 de HTML")); 
let nota2HTML = parseInt(prompt("Ingrese la Nota 2 de HTML"));
let nota3HTML = parseInt(prompt("Ingrese la Nota 3 de HTML"));

HTML1.innerHTML = nota1HTML; 
HTML2.innerHTML = nota2HTML;
HTML3.innerHTML = nota3HTML;


HTMLPromedio.innerHTML = ((nota1HTML + nota2HTML + nota3HTML) / 3).toFixed(1); 


let CSS1 = document.getElementById("CSS1");
let CSS2 = document.getElementById("CSS2");
let CSS3 = document.getElementById("CSS3");
let CSSPromedio = document.getElementById("CSS_promedio");


let nota1CSS = parseInt(prompt("Ingrese la Nota 1 de CSS"));
let nota2CSS = parseInt(prompt("Ingrese la Nota 2 de CSS"));
let nota3CSS = parseInt(prompt("Ingrese la Nota 3 de CSS"));

CSS1.innerHTML = nota1CSS;
CSS2.innerHTML = nota2CSS;
CSS3.innerHTML = nota3CSS;
CSSPromedio.innerHTML = ((nota1CSS + nota2CSS + nota3CSS) / 3).toFixed(2);

let JAVASCRIPT1 = document.getElementById("JAVASCRIPT1");
let JAVASCRIPT2 = document.getElementById("JAVASCRIPT2");
let JAVASCRIPT3 = document.getElementById("JAVASCRIPT3");
let JAVASCRIPTPromedio = document.getElementById("JAVASCRIPT_promedio");

let nota1JAVASCRIPT = parseInt(prompt("Ingrese la Nota 1 de JAVASCRIPT"));
let nota2JAVASCRIPT = parseInt(prompt("Ingrese la Nota 2 de JAVASCRIPT"));
let nota3JAVASCRIPT = parseInt(prompt("Ingrese la Nota 3 de JAVASCRIPT"));

JAVASCRIPT1.innerHTML = nota1JAVASCRIPT;
JAVASCRIPT2.innerHTML = nota2JAVASCRIPT;
JAVASCRIPT3.innerHTML = nota3JAVASCRIPT;
JAVASCRIPTPromedio.innerHTML = ((nota1JAVASCRIPT + nota2JAVASCRIPT + nota3JAVASCRIPT) / 3).toFixed(2);