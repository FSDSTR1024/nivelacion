let masterStudents = [];

masterStudents.push("Ana", "Claudia", "Antonio", "Mar", "Carlos", "Otilio", "Marciano");
console.log(masterStudents);

console.log(masterStudents.shift());
console.log(masterStudents);

masterStudents.push("Maria");
console.log(masterStudents);

masterStudents.sort();
console.log(masterStudents);

// Da lo mismo pero join es mas flexible
console.log(masterStudents.toString());
console.log(masterStudents.join(","));
console.log(masterStudents.join(" <3 "));
console.log(masterStudents.join(" # "));

