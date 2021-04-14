

//PRIMERO Problema

/*let sueldoR = prompt('Cuanto dinero tenes Roberto?');

let sueldoP = prompt('Cuanto dinero tenes Pedro ?');
let sueldoC = prompt('Cuanto dinero tenes Cofla?');

let 
    palitoHeladoAgua = 0.6, 

    palitoHeladoCrema = 1, 

    bombonHeladoHeladix = 1.6, 

    bombonHeladoHeladovich = 1.7,

    bombonHeladoHelardo = 1.8,

    poteHeladoHelardo = 2.9,
    
    poteUnCuarto = 2.9;

if(sueldoR >= palitoHeladoAgua && sueldoR < palitoHeladoCrema){
    alert('Roberto, comprate el palito de agua');

}
else if(sueldoR >= palitoHeladoCrema && sueldoR < bombonHeladoHeladix){
    alert('Roberto, comprate el helado de crema');
}

else if(sueldoR >= bombonHeladoHeladix && sueldoR < bombonHeladoHeladovich){
    alert('Roberto, comprate el helado Heladix');
}

else if(sueldoR >= bombonHeladoHeladovich && sueldoR < bombonHeladoHelardo ){
    alert('Roberto, comprate el helado heladovich');
}

else if(sueldoR >= bombonHeladoHelardo && sueldoR < poteHeladoHelardo){
    alert('Roberto, comprate el helado helardo');
}

else if(sueldoR >= poteHeladoHelardo && sueldoR>= poteUnCuarto){
    alert('Roberto, comprate el pote helardo  o pote 1/4kg');
}else{
    alert('Roberto, no podes comprarte nada');
};


if(sueldoC >= palitoHeladoAgua && sueldoC < palitoHeladoCrema){
    alert('Cofla, comprate el palito de agua');

}
else if(sueldoC >= palitoHeladoCrema && sueldoC < bombonHeladoHeladix){
    alert('Cofla, comprate el helado de crema');
}

else if(sueldoC >= bombonHeladoHeladix && sueldoC < bombonHeladoHeladovich){
    alert('Cofla, comprate el helado Heladix');
}

else if(sueldoC >= bombonHeladoHeladovich && sueldoC < bombonHeladoHelardo ){
    alert('Cofla, comprate el helado heladovich');
}

else if(sueldoC >= bombonHeladoHelardo && sueldoC < poteHeladoHelardo){
    alert('Cofla, comprate el helado helardo');
}

else if(sueldoC >= poteHeladoHelardo && sueldoC >= poteUnCuarto){
    alert('Cofla, comprate el pote helardo  o pote 1/4kg');
}else{
    alert('Cofla, no podes comprarte nada');
};


if(sueldoP >= palitoHeladoAgua && sueldoP < palitoHeladoCrema){
    alert('Pedro, comprate el palito de agua');

}
else if(sueldoP >= palitoHeladoCrema && sueldoP < bombonHeladoHeladix){
    alert('Pedro, comprate el helado de crema');
}

else if(sueldoP >= bombonHeladoHeladix && sueldoP < bombonHeladoHeladovich){
    alert('Pedro, comprate el helado Heladix');
}

else if(sueldoP >= bombonHeladoHeladovich && sueldoP < bombonHeladoHelardo ){
    alert('Pedro, comprate el helado heladovich');
}

else if(sueldoP >= bombonHeladoHelardo && sueldoP < poteHeladoHelardo){
    alert('Pedro, comprate el helado helardo');
}

else if(sueldoP >= poteHeladoHelardo && sueldoP >= poteUnCuarto){
    alert('Pedro, comprate el pote helardo  o pote 1/4kg');
}else{
    alert('Pedro, no podes comprarte nada');
};*/

//SEGUNDO PROBLEMA

let free = false;

const validarEntrada = (time) =>{
    let edad = prompt("Que edad tenes")
    if(edad>=18){
        if(time > 2 && time < 7 && free == false){
            alert(`Sos el primero despues de las ${time}Hs, pasa gratis`);
            free = true;
        }else{
            alert(`Son las ${time}Hs, vas a tener que pagar`);
        };
    }else{
        alert('Sos menor, no podes pasar');
    };
};

validarEntrada(23);
validarEntrada(1);
validarEntrada(2);
validarEntrada(2.30);
validarEntrada(3);