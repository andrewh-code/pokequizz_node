var filename = location.href.split("/").slice(-1);
var b1 = document.getElementsByClassName("btn btn-outline-primary");
var b2 = document.getElementById("btnTechnology");

//console.log(filename);
console.log(b1);
//console.log(b2);

b1.onclick = function(){
    b1.style.background = "green";
    b2.style.background = "";
}

b2.onclick = function(){
    b2.style.background = "green";
    b1.style.background = "";
}