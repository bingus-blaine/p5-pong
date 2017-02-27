/////                               WELCOME
/////                                 TO
/////                            "LAVA ROOM"

///// This is a game about a little ball man who loves to collect coins, but is always being chased by a black hole monster.
////Every time a coin is taken, the room fills up with more lava. It'sa lose-lose, but the goal is to collect as many coins
////until the room fills up with lava completely while avoiding the monster. 

///HOW TO PLAY:
///SPACE TO START GAME/SCARE MONSTER/SCRAMBLE COIN PLACEMENT
///MONSTER COMES RIGHT AT YOU, BE READY!
///IF MONSTER TOUCHES YOU 5 TIMES, YOU LOSE.
///IF YOU GO UNDER THE LAVA, YOU LOSE.
///COLLECT THE COINS.
///MORE COINS = MORE LAVA.
///THE WALLS CAN BE STICKY - BE CAREFUL.

var ballx 
var bally 
var ballmovex
var ballmovey
var ballr

var enemy_x
var enemy_y
var enemymove_x
var enemymove_y
var enemy_r
var enemyspeed

var coinx
var coiny
var coinr

var l
var s

var lavalevel


function setup(){
   
    createCanvas(600, 600);
    ballx = 300;
    bally = 300;
    ballmovex = 0;
    ballmovey = 0;
    ballr = 27;
    lavalevel = 600;
    
    enemy_x = 100;
    enemy_y = 500;
    enemy_r = 50
    enemymove_x = 0;
    enemymove_y = 0;
    coinx = -100
    coiny = -100
    coinr = 10;
    l=5
    s = 0 
    
   
    
}

function draw(){
    background(200);

    //lives and score
            textSize(25);
            text(l, 15, 30);
                fill(246, 230, 0);
                text("Coins:", 480, 30);
                text(s, 565, 31);
    
    //enemymove
    enemy_x = enemy_x+enemymove_x;
    enemy_y = enemy_y-enemymove_y;
    
//facemove

    ballx = ballx + ballmovex;
    bally = bally + ballmovey;
  
//enemy

    fill(0);
            ellipse(enemy_x, enemy_y, enemy_r*2, enemy_r*2);
    fill(200, 0, 0);
//eyes
            ellipse(enemy_x - 23, enemy_y, 15, 15);
            ellipse(enemy_x + 23, enemy_y, 15, 15);
    fill(155, 0, 0)
            ellipse(enemy_x - 23, enemy_y, 10, 10);
            ellipse(enemy_x + 23, enemy_y, 10, 10);
    
//face
    //head
     fill(204, 254, 201);
    strokeWeight(2);
    ellipse(ballx, bally, ballr*2, ballr*2);
    //eyes
    fill(0);
    ellipse(ballx-20, bally+3, 6, 6);
    ellipse(ballx+20, bally+3, 6, 6);
    //highlights
    fill(255);
    noStroke(1);
    ellipse(ballx-22, bally+3, 2, 5);
    ellipse(ballx+18, bally+3, 2, 5);
   
    //mouth
    stroke(0);
    ellipse(ballx, bally+15, 25, 10);

    
//coin    
    fill(252, 210, 0);
    ellipse(coinx, coiny, coinr*2, coinr*2);

//lava 
    fill(172, 87, 12)
    noStroke();
    rect(0, lavalevel, 600, 800);
    stroke(1);
    
    
//borders
    //BALL

    if(ballx - ballr < 0 || ballx + ballr > width){
        ballmovex = 0;
    } else if(bally - ballr < 0 || bally + ballr > height){
        ballmovey = 0;
    }
    
    //ENEMY
    if(enemy_x - enemy_r < 0 || enemy_x + enemy_r > width){
        enemymove_x = -enemymove_x;
        
    } else if(enemy_y + enemy_r < 0 || enemy_y + enemy_r > height){
        enemymove_y = -enemymove_y;
        
    }
    
            //GAMEOVER
                        if(lavalevel<bally+10){
                            gameover();
                        } 
                       
///////////////////////////////////////////////COLLISION

    var dx = enemy_x - ballx;
    var dy = enemy_y - bally;
    var distance = Math.sqrt(dx * dx + dy * dy);
    var cx = ballx - coinx;
    var cy = bally - coiny;
    var coindistance = Math.sqrt(cx * cx + cy * cy);
            //death
            if(distance < enemy_r + ballr){
                reset();
                l=l-1;
            }
                if(l<=0){
                    gameover();
                }
    
            if(coindistance < ballr + coinr){
                coinx = random(60, 540);
                coiny = random(60, lavalevel-ballr-40);
                lavalevel = lavalevel-20;
                s=s+1;
            }  
                        
                             
                      
    
    
}


//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

function reset(){
    ballx = 300;
    bally = lavalevel-300;
    
    if(lavalevel<250){
        bally = lavalevel+50; 
    }
    ballmovex = 0;
    ballmovey = 0;
    ballr = 27;
    enemy_x = 100;
    enemy_y = 500;
    enemy_r = 50
    enemymove_x = 0;
    enemymove_y = 0;
    coinx = -100;
    coiny = -100;
   
 
    
    
    
}


//controlling face

function keyPressed(){
 if(keyCode === RIGHT_ARROW){
     ballmovex = 7;
     ballmovey = 0;
        
 } else if(keyCode === LEFT_ARROW){
        ballmovex = -7;
        ballmovey = 0;
            
    } else if(keyCode === UP_ARROW){
        ballmovey = -7;
        ballmovex = 0;
        
    } else if(keyCode === DOWN_ARROW){
        ballmovey = 7;
        ballmovex = 0;
    } else if(key === ' '){
        enemymove_x = 8
        enemymove_y = 8
                coinx = random(60, 540);
                coiny = random(60, lavalevel-ballr-40);
      
    } else if(keyCode === SHIFT)
        reset();
    
    }

function gameover(){
     
    fill(0);
    rect(0, 0, 600, 600);
    ballmovex=0;
    ballmovey=0;
    ballx=1500;
    bally=1300;
    l=5
    s=0
    lavalevel=600 
}










    

