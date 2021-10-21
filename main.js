img="";
status1="";
object=[];
function preload() {
    img=loadImage("download.jpg");
}
function setup() {
    canvas=createCanvas(600,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status :detecting objects ";
}
function draw() {
    image(img,0,0,600,420);
    if(status1!=""){
        for (i=0;i<object.length;i++){
            document.getElementById("status").innerHTML="status :detected objects ";
fill("red");
percent=floor(object[i].confidence*100);
text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
noFill();
stroke("red");
rect(object[i].x,object[i].y,object[i].width,object[i].height)
        }
    }
}
function modelLoaded() {
    console.log("model Is Loaded");
    status1=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results) {
    if (error){
        console.error(error);
    }
    else{
        console.log(results)
object=results;
    }
}