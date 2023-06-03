noseX=0;
noseY=0;
diffrence = 0;
rightWristX =0;
leftWristX =0;

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX =" + noseX +"noseY =" + noseY);
  
  leftWristX = results[0].pose.leftWrist.x;
  rightWristX = results[0].pose.rightWrist.x;
  diffrence = floor(leftWristX - rightWristX);
  console.log("leftWristX =" + leftWristX + "rightWristX ="+ rightWristX + "diffrence = " + diffrence);
}
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#A7C7E7');

    document.getElementById("square_side").innerHTML = "Width and Height of a Square Will be = " + diffrence +"px";
    fill('#1434A4');
    stroke('#1434A4');
    square(noseX,noseY, diffrence);
}


function modelLoaded()
{
    console.log('PoseNet Is Initialized :D');
}
