function setup()
{
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,550);
canvas.position(590,150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose",gotresults);
}

function draw()
{
 background("#CCCCFF");
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotresults(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}