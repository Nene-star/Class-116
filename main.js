function preload()
{
 clown_nose = loadImage('https://i.postimg.cc/26FPL4vT/Clown-Nose.jpg')
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded()
{
    console.log('PoseNet Is Intialized');
}

function draw()
{
image(video, 0, 0, 300, 300);
fill(255,0,0);
stroke(255,0,0);
circle(noseX, noseY, 20);
image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function gotPose(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}