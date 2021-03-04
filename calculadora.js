$(document).ready(function main() {

    // Calcular la operacion
    $('.igual').click(calcular);
    function calcular(){
        let x = $('#txtEntry').text();
        let y = eval(x);
        $('#txtEntry').text(y);
        
    }

    // Borrar el ultimo caracter
    $('.borrar').click(borrar);
    function borrar() {
        let x = $('#txtEntry').text();
        let tam = x.length;
        let y = x.substring(0,(tam-1));
        $('#txtEntry').text(y);
    }

    // Restablecer a 0
    $('.cero').click(cero);
    function cero(){
        $('#txtEntry').empty();
    }

    // Escribir el el caracetr seleccionado
    $('.numero').click(escribir);
    function escribir() {
        let x = $(this).attr("value");
        if(x  === 'X'){
            $('#txtEntry').append('*');
        }
        // Calcular raiz cuadrada
        else if(x === '√'){  
            let x = $('#txtEntry').text();
            let tam = Array.from(x);
            let z = tam.join("");
            let y = Math.sqrt(`${z}`);
            $('#txtEntry').empty();
            $('#txtEntry').append(y);
        }

        // Calcular base
        else if( x === 'X˟'){
            $('#txtEntry').append('**');
        }
        else{
        $('#txtEntry').append(x);
        }   
    
        
    }
    
});