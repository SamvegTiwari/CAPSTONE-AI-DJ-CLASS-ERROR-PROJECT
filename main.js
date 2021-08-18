song = ""
song1 = ""
song2 = ""
song3 = ""
song4 = ""
song5 = ""
song6 = ""

score_left_wrist = 0;
score_right_wrist = 0;



LeftWristX = 0;
RightWristX = 0;
LeftWristY = 0;
RightWristY = 0;

function preload() {
  if(document.getElementById("b0").clicked==true){
    song = loadSound("music.mp3");
  }
  
  if(document.getElementById("b1").clicked==true){
    song = loadSound("Imagine Dragons - Believer (Lyrics).mp3");
  }
  if(document.getElementById("b2").clicked==true){
    song = loadSound("Ed Sheeran - Thinking Out Loud (Lyrics).mp3");
  }
  if(document.getElementById("b3").clicked==true){
    song = loadSound("Alan Walker - Faded (Lyrics).mp3");
  }
  if(document.getElementById("b4").clicked==true){
    song = loadSound("The Script - Hall Of Fame.mp3");
  }
  if(document.getElementById("b5").clicked==true){
    song = loadSound("Ed Sheeran & Justin Bieber - I Don't Care [Official Music Video].mp3");
  }
  if(document.getElementById("b6").clicked==true){
    song = loadSound("OFFICIAL MUSIC VIDEO VAARI JAWAN Rimorav Vlogs.mp3");
  }


  //song1 = loadSound("The Script - Hall Of Fame.mp3");
  //song2 = loadSound("Alan Walker - Faded (Lyrics).mp3");
  //song3 = loadSound("Ed Sheeran - Thinking Out Loud (Lyrics).mp3");
  //song4 = loadSound("Ed Sheeran & Justin Bieber - I Don't Care [Official Music Video].mp3");
  //song5 = loadSound("Imagine Dragons - Believer (Lyrics).mp3");
  //song6 = loadSound("OFFICIAL MUSIC VIDEO VAARI JAWAN Rimorav Vlogs.mp3");
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.position(10, 300);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, model_loaded);
  poseNet.on("pose", got_results) // On function is pre-defined function of posenet which works like a listner keeps getting the results.

}


function draw() {
  image(video, 0, 0, 500, 500)
  fill("blue");
  stroke("pink");
  if (score_right_wrist > 0.2) {
    circle(RightWristX, RightWristY, 50);

    if (RightWristY < 100) {
      document.getElementById("Speed_para").innerHTML = "speed=2.5x";
      song.rate(2.5);
    }

    if (RightWristY > 100 && RightWristY < 200) {
      document.getElementById("Speed_para").innerHTML = "speed=2x";
      song.rate(2);
    }

    if (RightWristY > 200 && RightWristY < 300) {
      document.getElementById("Speed_para").innerHTML = "speed=1.5x";
      song.rate(1.5);
    }

    if (RightWristY > 300 && RightWristY < 400) {
      document.getElementById("Speed_para").innerHTML = "speed=1x";
      song.rate(1);
    }

    if (RightWristY > 400 && RightWristY < 500) {
      document.getElementById("Speed_para").innerHTML = "speed=0.5x";
      song.rate(0.5);
    }

    if (RightWristY > 500) {
      document.getElementById("Speed_para").innerHTML = "speed=0x";
      song.rate(0);
    }


  }
  if (score_left_wrist > 0.2) {
    stroke("pink")
    fill("blue")
    circle(leftWristX, leftWristY, 20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals / 500;
    document.getElementById("Volume_para").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
  }

}

function Play_function() {
  song.play();
  song.setVolume(1); // SetVolume is a pre-defined function of p5.js;(Values can be:0.1 to 1)
  song.rate(1); // rate is a pre-defined function of p5.js(Values: 0.5,1,1.5,2,2.5);

}

function model_loaded() {
  console.log("POSENET ON")
}

function got_results(results) {

  if (results.length > 0) {
    console.log(results);
    LeftWristX = results[0].pose.leftWrist.x;
    LeftWristY = results[0].pose.leftWrist.y;
    RightWristX = results[0].pose.rightWrist.x;
    RightWristY = results[0].pose.rightWrist.y;

    score_left_wrist = results[0].pose.keypoints[9].score;
    score_right_wrist = results[0].pose.keypoints[10].score;

  }

}

//function beleiver_play() {
  //song5.play();
  //song5.setVolume(1); // SetVolume is a pre-defined function of p5.js;(Values can be:0.1 to 1)
  //song5.rate(1); // rate is a pre-defined function of p5.js(Values: 0.5,1,1.5,2,2.5);

//}

//function tol_play() {
  //song3.play();
  //song3.setVolume(1); // SetVolume is a pre-defined function of p5.js;(Values can be:0.1 to 1)
  //song3.rate(1); // rate is a pre-defined function of p5.js(Values: 0.5,1,1.5,2,2.5);

//}

//function faded_play() {
  //song2.play();
  //song2.setVolume(1); // SetVolume is a pre-defined function of p5.js;(Values can be:0.1 to 1)
  //song2.rate(1); // rate is a pre-defined function of p5.js(Values: 0.5,1,1.5,2,2.5);

//}

//function hof_play() {
  //song1.play();
  //song1.setVolume(1); // SetVolume is a pre-defined function of p5.js;(Values can be:0.1 to 1)
  //song1.rate(1); // rate is a pre-defined function of p5.js(Values: 0.5,1,1.5,2,2.5);

//}

//function idc_play() {
  //song4.play();
  //song4.setVolume(1); // SetVolume is a pre-defined function of p5.js;(Values can be:0.1 to 1)
  //song4.rate(1); // rate is a pre-defined function of p5.js(Values: 0.5,1,1.5,2,2.5);

//}

//function vj_play() {
  //song6.play();
  //song6.setVolume(1); // SetVolume is a pre-defined function of p5.js;(Values can be:0.1 to 1)
  //song6.rate(1); // rate is a pre-defined function of p5.js(Values: 0.5,1,1.5,2,2.5); 
//}



