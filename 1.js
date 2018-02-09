
var m =[ ];
var m1 = [ 1, 2, 3,4,5,6,7,8,9,10];
 m[3]=4;
console.log(m1);

function masOut () {
    var p = document.getElementById('new');
    var str ='';
    for ( var i=0; i<m1.length; i++){
        str = str + i + '   ' + m1[i] + '<br>';
    }
    p.innerHTML = str;

}


masOut();

function f1() {
    var num = document.getElementById("inp1").value;
    var idElement = document.getElementById('inp2').value;
    m1[idElement] = num;
    masOut();
    console.log(m1);
}

// function fp () {
//     var el1 = document.getElementById("inp1").value;
//     m1.pop(el1);
//     masOut ();
//     console.log(m1);
//
// }


function fp() {
    m1.pop();
    f1 ();
    console.log(m1);
}


function fsh() {
    m1.shift();
    f1();
    console.log(m1);

}
function  fpu() {
    m1.push();
    f1();
}

















