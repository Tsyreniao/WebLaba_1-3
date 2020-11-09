let mass = [];
let pos = 0;
function input()
{
    let item = Number(document.getElementById("item").value) 
    if(!isNaN(item))
    {
        mass[pos] = item;  
    }    
    else
    {
        mass[pos] = 0;
    }
    pos += 1;
    showMass();
}
function Sum()
{
    let sum = 0;
    mass.forEach(function(item, i, arr) {
        sum += item*item;
      })
    return sum;  
}
function showAllMass()
{
    document.getElementById("showAllMass").innerHTML = Sum();
}
function showMass()
{
    document.getElementById("showMass").innerHTML = mass;
}
function changeColor() {
    let item=document.getElementById("content").style.color='red'
}