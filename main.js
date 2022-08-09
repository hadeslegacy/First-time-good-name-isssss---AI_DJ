song = "";
roblox = 0;
roboy = 0;
lox = 0;
lure = 0;
scoreleftwrist = 0
scorerightrist = 0



function preload() {
    song = loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide();

    posenet = ml5.poseNet(video, minecraft)
    posenet.on('pose', LOLAOALOALAO)
}

function minecraft() {
    console.log("YOU PLAYING MINECRAFT,I LIKE YA CUT G >:)))")
}

function LOLAOALOALAO(results) {
    if (results.length > 0) {
        console.log(results)
        scoreleftwrist = results[0].pose.keypoints[9].score
        scorerightrist = results[0].pose.keypoints[10].score
        console.log("score left wrist is " + scoreleftwrist)
        console.log("score right rist is" + "  " + scorerightrist)

        roblox = results[0].pose.rightWrist.x
        roboy = results[0].pose.rightWrist.y
        lox = results[0].pose.leftWrist.x
        lure = results[0].pose.leftWrist.y
        console.log(roblox, roboy, lox, lure + " these are right x and y and left x and y")
    }
}

function draw() {
    image(video, 0, 0, 600, 500)
    fill("#FF0310")
    stroke("#FF3729")
    if (scorerightrist > 0.2) {
        circle(roblox, roboy, 20)
        if (roboy > 0 && roboy <= 75) {
            document.getElementById("GASGASGAS").innerHTML = "Speed = 0x"
            song.rate(0)
        } else if (roboy > 75 && roboy <= 125) {
            document.getElementById("GASGASGAS").innerHTML = "Speed = 0.5x"
            song.rate(0.5)
        } else if (roboy > 125 && roboy <= 200) {
            document.getElementById("GASGASGAS").innerHTML = "Speed = 1x"
            song.rate(1)
        } else if (roboy > 200 && roboy <= 300) {
            document.getElementById("GASGASGAS").innerHTML = "Speed = 1.5x"
            song.rate(1.49)
        } else if (roboy > 300 && roboy <= 400) {
            document.getElementById("GASGASGAS").innerHTML = "Speed = 2x"
            song.rate(1.99)
        } else if (roboy > 400 && roboy <= 500) {
            document.getElementById("GASGASGAS").innerHTML = "Speed = 2.5000000x"
            song.rate(2.5)
        }
    }
    if (scoreleftwrist > 0.2) {
        circle(lox, lure, 20)
        InNolwy = Number(lure)
        remove_decimals = floor(InNolwy)
        volume = remove_decimals / 500
        document.getElementById("GAGASGAS").innerHTML = "VOlUme = " + volume;
        song.setVolume(volume)
    }
}

function play() {
    song.play();
    song.volume(1);
    song.rate(2);
}