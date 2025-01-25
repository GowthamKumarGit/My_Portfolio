function displayValue(val)
{
    document.getElementById("display").value = document.getElementById("display").value + val;
}

function clearData(){
    document.getElementById("display").value = "";
}

function claculateData(){
    var userInput = document.getElementById("display").value;
    var result = eval(userInput);

    document.getElementById("display").value = result;
}