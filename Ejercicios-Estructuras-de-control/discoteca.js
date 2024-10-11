document.getElementById("partyHard").addEventListener('submit', function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let shoes = document.getElementsByName("shoes");

    let someoneChecked = false;
    let hasShoes = true;

    for(let i = 0; i < shoes.length; i++){
        if(shoes[i].checked){
            someoneChecked = true;
            if(i > 0){
                hasShoes = false;
            }
            break;
        }
    }

    if(name && age && someoneChecked){
        checkClient(age, hasShoes);
    }

    else{
        alert("Tienes que rellenar todos los campos");
    }


});

function checkClient(age, hasShoes){

    let minAge = 18;
    let firstAgeControl = 26;
    let secondAgeControl = 30;

    if(age < minAge){
        alert("No puedes pasar");
    }

    else if(age > minAge && age < firstAgeControl){
        if(hasShoes === true){
            alert("Debes quitarte las zapatillas");
        }else{
            alert("Puedes entrar");
        }
    }

    else if(age > secondAgeControl){
        if(hasShoes === false){
            alert("Debes ponerte las zapatillas");
        }
        else{
            alert("Puedes entrar");
        }
    }


    else{
        alert("Puedes entrar como quieras")
    }

}