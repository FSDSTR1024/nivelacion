let introduction = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.";

console.log(introduction.length);
console.log(introduction.indexOf("astillero"));
console.log(introduction.toUpperCase());

let newPlace = prompt("Elige donde quieres que comience el Quijote");

introduction = introduction.replace("la Mancha", newPlace);
console.log(introduction);

introduction = introduction.replace("hidalgo", "elfo del bosque");
console.log(introduction);

introduction = introduction.slice(0, introduction.length/2);
console.log(introduction);

