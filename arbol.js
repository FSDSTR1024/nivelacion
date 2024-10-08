
let height = 10;

let leaf = '*';

for(let i = 0; i  < height; i++){

    let spaces = '';

    for(let k = 0; k < height - i - 1; k++){
        spaces += ' ';
    }

    let auxLeaf = spaces;

    for(let j = 0; j < i+1; j++){
        auxLeaf += leaf + ' ';
    }

    console.log(auxLeaf);
}