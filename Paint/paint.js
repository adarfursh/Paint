var myBox = document.getElementById("box");
var drawn= false;
var picColor = document.querySelectorAll(".color");
var color = "black";
var borderRadius = document.querySelectorAll(".shape");
var shape = ""



for (var i=0;i<picColor.length;i++){
    picColor[i].addEventListener("click",function(e){
        color= e.target.id;
        return color;
    })
}


for (var j=0;j<borderRadius.length;j++){
    borderRadius[j].addEventListener("click",function(e){
        borderRadius= e.target.id;
        return shape;
    })
}



myBox.addEventListener("mousedown", function(){
    drawn=true; 
    drawDot();
    drawMeSomeMo();
});

function drawMeSomeMo(){
    myBox.addEventListener("mousemove",drawDot)
}


myBox.addEventListener("mouseup",function(){
    drawn=false;
});



function drawDot() {
    if (drawn===true){
        var littleBox = document.createElement('div');
        littleBox.className = "littleBox";
        littleBox.style.backgroundColor = color;
        littleBox.style.borderRadius = borderRadius;
        littleBox.style.left = event.clientX - myBox.clientLeft - 10  +"px";
        littleBox.style.top = event.clientY -myBox.clientTop - 10 + "px";
        if((littleBox.style.left >= "0px") &&
            (littleBox.style.left <= "px") &&
            (littleBox.style.top >= "0px") &&
            (littleBox.style.top <= "px")) {
        myBox.appendChild(littleBox);
        }
    }

}



 