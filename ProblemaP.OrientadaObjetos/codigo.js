class PhonesCharact{
    constructor(Color, Peso, Resolucion, Camara, MemoriaR){

        this.color = Color;
        this.peso = Peso;
        this.resolucion = Resolucion;
        this.camara = Camara;
        this.memoriaRam = MemoriaR;
        this.boot = false;
        
        
    };

    prender(){
        if(this.boot == false){
            alert('se esta enciendo...');
            this.boot=true;
        }else{
            alert('ya esta encendido');
            this.boot=true;
        };
    };

    reiniciar(){
        if(this.boot == true){
            alert('Se puede reiniciar el celular');
            
        }else{
            alert('No se puede reiniciar por que esta apagado');
        };
    };

    tomarpic(){
        alert(`Toma fotos en ${this.camara} px`);
    };

    grabar(){
        alert(`Graba videos en ${this.resolucion} p`);
    };
    
    getInf(){
        return `
        
            
            El color ${this.color}<br>
            con un peso de ${this.peso} G <br>
            una pantala de ${this.resolucion} pixeles <br>
            una camara de ${this.camara} megapixeles <br>
            y una memoria ram de ${this.memoriaRam} GB <br>
            
            
        
        
        
        `
    }
    
    
};

class newPhone extends PhonesCharact{
    constructor(Color, Peso, Resolucion, Camara, CantCam, MemoriaR){
        super(Color, Peso, Resolucion,Camara,MemoriaR);
        
        
        this.camaras = CantCam;

    }

   camaraSL(){
       alert(`Inicializando la camara lenta del cel ${this.color}`);
   };

   recnFacial(){
       alert(`Inicializando el reconocimiento facial del cel ${this.color}`);
   }
    newInf(){
        return this.getInf() + `Cuantas camaras tiene : ${this.camaras} <hr>`;
    }    
    
}

console.log(newPhone);


const celHG1 = new newPhone('Negro',5,1080,12,2,12);
const celHG2 = new newPhone('Blanco',8,1920,16,2,16);

console.log(celHG1)
document.write(celHG1.newInf());
document.write(celHG2.newInf());

celHG1.camaraSL();
celHG1.recnFacial();
celHG2.camaraSL();
celHG2.recnFacial();

// const cel1 = new PhonesCharact('Rojo',10,1080,13,8);
// const cel2 = new PhonesCharact('Verde',5,720,10,6);
// const cel3= new PhonesCharact('Negro',3,960,3,4);

// document.write(cel1.getInf());
// document.write(cel2.getInf());
// document.write(cel3.getInf())


