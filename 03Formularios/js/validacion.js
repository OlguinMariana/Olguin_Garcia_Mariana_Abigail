/**
 * JS es un lenguaje interpretado para lo cual debemos entender 
 * que el manejo de variables es no tipado
 * 
 * JS maneja var para cadenas, enteros, dobles, flotantes, etc...
 * 
 * JS es un lenguaje bajo multiparadigma 
 */


function validar (formulario){
    if(formulario.nombre.value.length < 3){
        alert("Escriba por lo menos tres caracteres en el campo nombre");
    fromulario.nombre.focus();
    
    }
    var checkOk = "qwertyuiopasdfghjklñ" + "QWERTYUIOPASDFGHJKLÑ";
    var checkString = formulario.nombre.value;

    alert(checkString);

    var todoesvalido = true;

    for (var i=0; i < checkString.length; i++){
    var ch = checkString.charAT(i);
        for( var j = 0; j < checkOk.length; j++);
        if( ch == checkOk.charAt(j)){
            break;
        }

    }
    if (j == checkOk.length){
        todoesvalido = false;
        break;
    }
    if(!todoesvalido){
        alert("favor de escribir unicamente letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }


    var checkOk = "qwertyuiopasdfghjklñ" + "QWERTYUIOPASDFGHJKLÑ";
    var checkString = formulario.edad.value;

    alert(checkString);

    var todoesvalido = true;

    for (var i=0; i < checkString.length; i++){
    var ch = checkString.charAT(i);
        for( var j = 0; j < checkOk.length; j++);
        if( ch == checkOk.charAt(j)){
            break;
        }

    }
    if (j == checkOk.length){
        todoesvalido = false;
        break;
    }
    if(!todoesvalido){
        alert("favor de escribir unicamente numeros en el campo nombre");
        formulario.edad.focus();
        return false;
    }

    var txt = formulario.email.vallue;

    var expreg = /\S+@\.\S+/;

    var expreg2=/^(([^<>()\[\]\.,;:\s@\]+(\.[])))

    
}