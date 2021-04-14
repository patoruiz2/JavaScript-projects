const suma = (num1,num2) =>{
    num1 = prompt('Ingresa un numero');
    num2 = prompt('Ingresa otro numero');

    let result = parseInt(num1) + parseInt(num2);
    document.write(result);
};

const restar = (num1,num2) =>{
    num1 = prompt('Ingresa un numero');
    num2 = prompt('Ingresa otro numero');

    let result = parseInt(num1) - parseInt(num2);
    document.write(result);
};

const dividir = (num1,num2) =>{
    num1 = prompt('Ingresa un numero');
    num2 = prompt('Ingresa otro numero');

    let result = parseInt(num1) / parseInt(num2);
    document.write(result);
};

const multiplicar = (num1,num2) =>{
    num1 = prompt('Ingresa un numero');
    num2 = prompt('Ingresa otro numero');

    let result = parseInt(num1) * parseInt(num2);
    document.write(result);
};

let opSelect = prompt('Que operacion elige--> 1: suma 2: resta 3: division 4: multiplicacion');

if(opSelect == '1'){
    suma();
}else if(opSelect == '2'){
    restar();
}else if(opSelect == '3'){
    dividir();
}else if (opSelect == '4'){
    multiplicar();
}else{
    alert('no se encontro la operacion')
};


   

