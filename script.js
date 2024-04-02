
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1); // empty array with one space 

function setup() { // sets up the sketch
  createCanvas(500, 300); // size of canvas 
  dots[0] = new Dot(width/2, height/2); // initialize dots array
} // end of set up

function draw() { // draw something
  background(200); // background color
  
  for(let i = 0; i < dots.length; i++){ // loops through the array
    dots[i].move(); // moves the objects
    dots[i].display(); // display the objects 
  }
  textSize(24); // sets text size
  fill(100, 0, 200); // color of the text
  text("'dots' array length: " + dots.length, 100, 100); // display the size of the array 

} // end of draw ()

function mousePressed(){ // when mouse is pressed
  let obj = new Dot(mouseX, mouseY); // creates a new Dot 

  dots.push (obj); // adds dot to the array 
  console.log (dots.length); // prints the size of the array in the conosole
  
  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */

} // end of mouse pressed function 


function Dot(X, Y){ // constructor function
  
  this.x = X; // set x property from initial argument
  this.y = Y; // set y property from second arguemnt 
  this.w = random (20, 50); // random width 
  this.sx = random(-5, 5); // set x speed 
  this.sy = random(-5, 5); // set y speed
  this.r = random(0, 255); // set red level
  this.g = random(0, 255); // set green level 
  this.b = random(0, 255); // set blue level
  
  this.display = function(){ // show the object
    fill(this.r, this.g, this.b); // set the color
    ellipse(this.x, this.y, this.w, this.w); // draw a curcle 
  } // end of display method 
  
  this.move = function(){ // move the object
    this.x += this.sx; // update horizontal location
    this.y += this.sy; // update vertical location
    
    if (this.x < 0 || this.x > width){ // if off of the screen 
        this.sx *= -1; // change direction
    } // end of if statement
    if (this.y < 0 || this.y > height){ // if off of the screen vertically
        this.sy *= -1; // chnage direction 
    } // end of if statement
  } // end of move method 
    
} // end of Dot constructor 
