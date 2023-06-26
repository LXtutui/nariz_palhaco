var X=0;
var Y=0;
var nariz;
var canvas;
var video;
var poseNet;

function preload(){
  nariz=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup(){
  canvas=createCanvas(300, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function takeSnapshot(){
  save("foto.jpg");
}
function modelLoaded(){
  console.log("poseNet foi inicializado");
}
function gotPoses(results){
  if (results.length>0){
    console.log(results);
    X=results[0].pose.nose.x-15;
    Y=results[0].pose.nose.y-15;
  }
}
function draw(){
  image(video, 0, 0, 300, 300);
  image(nariz, X, Y, 30, 30);
}