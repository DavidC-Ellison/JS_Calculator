    function insert(num){
    document.form10.display.value = document.form10.display.value + num;
    }

function equal(){
    var exp = document.form10.display.value;
    if(exp){
     document.form10.display.value = eval(exp)
    }
    }
    