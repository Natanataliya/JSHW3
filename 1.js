

var mas = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 

function masOut () {
    var p = document.getElementById('new');
    var str ='';
    for ( var i=0; i<mas.length; i++){
        str = str + i + '   ' + mas[i] + '<br>';
    }
    p.innerHTML = str;

}


masOut();

function val() {
    var num = document.getElementById("inp1").value;
    var idElement = document.getElementById('inp2').value;
    mas[idElement] = num;
    masOut();
    console.log(mas);
}

function valPop() {
    mas.pop();
    val ();
    console.log(mas);
}


function valShift() {
    mas.shift();
    val();
    console.log(mas);

}
function valPush() {
    mas.push();
    val();
}

















