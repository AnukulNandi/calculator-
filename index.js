function view(num)
{
document.getElementById("screen").value+=num
}
function clr()
{
document.getElementById("screen").value=""
}
function compu()
{
let x = document.getElementById("screen").value
let y = eval(x)
document.getElementById("screen").value= y
}
function Cut()
{
    var a = document.getElementById("screen");
    a.value=a.value.slice(0,-1);
}
