/***********************************************************************************
  PROJECT Stuff Finding
  by Xinyu Yang
  
  DESCRIPTION HERE
***********************************************************************************/
var images = [];
var midX;
var midY;
var hatButton;
var numberButton;
var toothButton;
var hatStatus;
var numberStatus;
var toothStatus;
var simpleTimer;
var elapsedSeconds = 0;
var waitForClick = true;
var counter;

// first load some images
function preload() {
	collections = loadImage('assets/Collections.png');
	christmasHat = loadImage('assets/Christmas hat.png');
	number5 = loadImage('assets/Number5.png');
	toothpaste = loadImage('assets/Toothpaste.png');
}
	
function setup() {
	// set the canvas
	createCanvas(windowWidth, windowHeight);
	midX = width/2;
	midY = height/2;

	// 30 seconds countdown
	simpleTimer = new Timer(30000);
	simpleTimer.start();


	imageMode(CENTER);
	textAlign(LEFT);

	textSize(160);
	makeButtons();

	// not founded yet
	Hatstatus = false;
	numberStatus = false;
	toothStatus = false;

}


// Draw code goes here
function draw() {
	background(255);

	// give instructures
	fill(0);
	text("Find the objects: ", 60, 20);
	image(collections, midX, midY);

	// make images icon on the left side of the screen
	image(christmasHat, 50, 80);
	image(number5, 100, 80);
	image(toothpaste, 140, 80);

	// use timer
    updateTimer();

    // make the buttons
	hatButton.draw();
	numberButton.draw();
	toothButton.draw();
}

function makeButtons() {
	// Create buttons
	hatButton = new Clickable();
	numberButton = new Clickable();
	toothButton = new Clickable();

	// no button texts
	hatButton.text = "";
	numberButton.text = "";
	toothButton.text = "";

	// Make button backgrounds transpancy
	hatButton.color = "#00000000";
	numberButton.color = "#00000000";
	toothButton.color = "#00000000";

	// make button size the same as images
	hatButton.width = christmasHat.width;
	hatButton.height = christmasHat.height;
	numberButton.width = number5.width;
	numberButton.height = number5.height;
	toothButton.width = toothpaste.width;
	toothButton.height = toothpaste.height;

	// make button borders invisible
	hatButton.strokeWeight = 0;
	numberButton.strokeWeight = 0;
	toothButton.strokeWeight = 0;

	// make button location the same as it on the image
	hatButton.locate( width/2 + 100 - hatButton.width/2 , height/2 + 20 - hatButton.height/2 );
	numberButton.locate( width/2 - 126 - numberButton.width/2 , height/2 + 78 - numberButton.height/2 );
	toothButton.locate( width/2 + 220 - toothButton.width/2 , height/2 + 180 - toothButton.height/2 );

	// when buttons are pressed
  	hatButton.onPress = hatButtonPressed;
  	numberButton.onPress = numberButtonPressed;
  	toothButton.onPress = toothButtonPressed;


}

// when Christmas hat is pressed
hatButtonPressed = function () {
	hatStatus = true;
}

// when number5 is pressed
numberButtonPressed = function () {
	numberStatus = true;
}

// when toothpaste is pressed
toothButtonPressed = function () {
	toothStatus = true;
}

// make the timer
function updateTimer() {
	// if times up, then gameover
	if( simpleTimer.expired() ) {
		fill(255,0,0);
		textSize(300);
		text( "BOOM", midX, midY );
		frameRate(2);
	}

	// before tims up, you win
	else {
		fill(255,0,0);
		text("Time: " + Math.round(simpleTimer.getRemainingTime()/1000), windowWidth - 60, 20);
			if (hatStatus == true && numberStatus == true && toothStatus == true) {
				fill(255,0,0);
				textSize(300);
				text ("you win!", midX, midY);
				noLoop();
			}
		}
	}
