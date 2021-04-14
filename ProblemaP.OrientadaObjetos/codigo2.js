class Launch {
    constructor(cantD, puntuacion, peso){

        this.descargas = cantD;
        this.rank = puntuacion;
        this.peso = peso;
        this.install = true;
        this.opened = false;
        this.appExist = true;
    }

    setup(){
        
        if(this.install == true){
            alert('se puede instalar la app');
            this.install = false
        };
    };

    openclose(){
        
        if(this.opened == false){
            alert('abriendo aplicacion');
            this.opened = true;
        }else{
            alert('cerrando aplicacion');
            this.opened = false;
        };
    };

    unnistall(){
       
        if(this.appExist == true){
            let permission = prompt('Quiere remover la aplicacion? TRUE.si FALSE.no');
            if(permission == 'true'){
                
                alert('se removera la aplicacion');
                this.appExist = false;
            }else{
                alert('no se removera la aplicacion')
            }
        }else{
            alert('no se encontro la aplicacion ');
        };
        
    };

    getInf(){
        return `
            cantidad de descargas : ${this.descargas} <br>
            puntuacion de app: ${this.rank}<br>
            peso de app: ${this.peso} Mb<br>
            <hr>
            `
    };
};

const app1 = new Launch (10000000,500000,500);
const app2 = new Launch (10000,5000,800);

document.write(
    `
        ${app1.getInf()}<br>
        ${app2.getInf()}<br>

    `
);

app1.setup();
app1.openclose();
app1.unnistall();