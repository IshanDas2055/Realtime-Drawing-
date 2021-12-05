function setup() {
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,550);
canvas.position(560,150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw() {
    background('#00ff91');
    fill('#66ff66');
    stroke("#ff6666");
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log('POSENET HAS BEEN INTILIALIZED');
}
noseX=0;
noseY=0;
difference = 0;
rightWrist = 0;
leftWrist = 0;
function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +"noseY = " + noseY )
    rightWrist = results[0].pose.rightWrist.x;
    leftWrist = results[0].pose.leftWrist.x;
    difference = floor(leftWrist - rightWrist);

    console.log("leftWrist = " + leftWrist + "rightWrist = " + rightWrist + "difference" + difference);
}
}
