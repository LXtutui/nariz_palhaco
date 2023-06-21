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
  //poseNet=ml5.poseNet(video, modelLoaded);
  //poseNet.on("pose", gotPoses);
}
function takeSnapshot(){
  save("foto.jpg");
}