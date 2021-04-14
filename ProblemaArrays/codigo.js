let cantidaAlumnos = prompt('Cuantos alumnos son?');
let alumnosTotales = [];

for(i = 0;i < cantidaAlumnos;i++){
    console.log(i)
    alumnosTotales[i] =[prompt('nombre de alumno'+(i+1)),0];
    // console.log(alumnosTotales[i][1]);
    // document.write(`${alumnosTotales[i][0]}`);
};

const tomarAsist = (nombre,index)=>{
    let asist = prompt(nombre + "esta?")
    
    if(asist == 'p' || asist == 'P'){
         alumnosTotales[index][1]++;
         console.log(alumnosTotales[index])
    }

};

for(i = 0;i < 30;i++){
    for(alumnos in alumnosTotales){

        tomarAsist(alumnosTotales[alumnos][0],alumnos);
        
         
    };

};
for(alumnos in alumnosTotales){

    let result = 
        `
            <br> ${alumnosTotales[alumnos][0]}----<br>
            <br> Asistencias: ${alumnosTotales[alumnos][1]} <br>
            <br> Inasistencias ${30-alumnosTotales[alumnos][1]}<br>
        `;
            
    if(30 -alumnosTotales[alumnos][1] > 18){
        result += "reprobaste";
    }else{
        result += "";
    };

    document.write(result);
};








 
//  console.log(alumnosTotales);