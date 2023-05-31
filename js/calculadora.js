var num1='';
var num2='';
var signo='';
var flag='nr';

function leerNumeros(value){
        if(flag=='nr'){
            document.getElementById('idResultado').value += value; //con el iner o me concateno
        }else{
            document.getElementById('idResultado').value = '';
            flag='nr'
        }
}

function leerSigno(op){
    signo = op;
    num1 = parseInt(document.getElementById('idResultado').value);
    document.getElementById('idResultado').value = '';
}

function resultado(){
    num2 = parseInt(document.getElementById('idResultado').value);
    var resultado = operaciones(num1,num2,signo);
    document.getElementById('idResultado').value = resultado;
    signo='';
    flag='r';
}

function operaciones(num1,num2,op){

    switch(op){

        case '+':
            return num1+num2;
            break;
        case '-':
            return num1-num2;
            break;
        case '*':
            return num1*num2;
            break;
        case '/':
            return num1/num2;
            break;

    }

}