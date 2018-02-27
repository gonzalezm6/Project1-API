var playerData;

function preload() {
    //First row images
    carusoImg = loadImage('caruso.png');
    bogutImg = loadImage('bogut.png');
    ingramImg = loadImage('ingram.png');
    lopezImg = loadImage('lopez.png');
    brewerImg = loadImage('brewer.png');
    zubacImg = loadImage('zubac.png');
    
    //Second row images
    clarksonImg = loadImage('clarkson.png');
    hartImg = loadImage('hart.png');
    randleImg = loadImage('randle.png');
    cpImg = loadImage('cp.png');
    kuzmaImg = loadImage('kuzma.png');
    nancejrImg = loadImage('nancejr.png');
    
    //Third row images
    ballImg = loadImage('ball.png');
    dengImg = loadImage('deng.png');
    hayesImg = loadImage('hayes.png');
    bryantImg = loadImage('bryant.png');
    ennisImg = loadImage('ennis.png');
    blueImg = loadImage('blue.png');    
    
}

function setup() {
    createCanvas(1350,900);
    loadJSON("https://nba-players.herokuapp.com/players-stats-teams/lal", dataReceived);
    
}


function dataReceived(data) {
    playerData = data;

}

function draw() {
    background(0);
    fill(255);
    
//  first row of player images  
    image(carusoImg, 10, 5, 220, 160);
    image(bogutImg, 215, 5, 220, 160);
    image(ingramImg, 440, 5, 220, 160); 
    image(lopezImg, 670, 5, 220, 160); 
    image(brewerImg, 900, 5, 220, 160);
    image(zubacImg, 1130, 5, 220, 160); 
    
//  first row of player stats    
    if (playerData) {
        // Alex Caruso
        text(playerData[0].name, 90, 190);
        text("FG %: " + playerData[0].field_goal_percentage, 90, 210);
        text("FT %: " + playerData[0].free_throw_percentage, 90, 230);
        text("3PT %: " + playerData[0].three_point_percentage, 90, 250);
        
        // Andrew Bogut
        text(playerData[1].name, 290, 190);
        text("FG %: " + playerData[1].field_goal_percentage, 290, 210);
        text("FT %: " + playerData[1].free_throw_percentage, 290, 230);
        text("3PT %: " + playerData[1].three_point_percentage, 290, 250);
        
        // Brandon Ingram
        text(playerData[2].name, 505, 190);
        text("FG %: " + playerData[2].field_goal_percentage, 505, 210);
        text("FT %: " + playerData[2].free_throw_percentage, 505, 230);
        text("3PT %: " + playerData[2].three_point_percentage, 505, 250);
        
        // Brook Lopez
        text(playerData[3].name, 740, 190);
        text("FG %: " + playerData[3].field_goal_percentage, 740, 210);
        text("FT %: " + playerData[3].free_throw_percentage, 740, 230);
        text("3PT %: " + playerData[3].three_point_percentage, 740, 250);  
        
        // Corey Brewer
        text(playerData[4].name, 975, 190);
        text("FG %: " + playerData[4].field_goal_percentage, 975, 210);
        text("FT %: " + playerData[4].free_throw_percentage, 975, 230);
        text("3PT %: " + playerData[4].three_point_percentage, 975, 250);
        
        // Ivica Zubac
        text(playerData[5].name, 1210, 190);
        text("FG %: " + playerData[5].field_goal_percentage, 1210, 210);
        text("FT %: " + playerData[5].free_throw_percentage, 1210, 230);
        text("3PT %: " + playerData[5].three_point_percentage, 1210, 250);         
    }
    
//  second row of player images  
    image(clarksonImg, 10, 275, 220, 160);
    image(hartImg, 215, 275, 220, 160);
    image(randleImg, 440, 275, 220, 160); 
    image(cpImg, 670, 275, 220, 160); 
    image(kuzmaImg, 900, 275, 220, 160);
    image(nancejrImg, 1130, 275, 220, 160); 
    
//  second row of player stats    
    if (playerData) {
        // Jordan Clarkson
        text(playerData[6].name, 80, 460);
        text("FG %: " + playerData[6].field_goal_percentage, 80, 480);
        text("FT %: " + playerData[6].free_throw_percentage, 80, 500);
        text("3PT %: " + playerData[6].three_point_percentage, 80, 520);
        
        // Josh Hart
        text(playerData[7].name, 295, 460);
        text("FG %: " + playerData[7].field_goal_percentage, 295, 480);
        text("FT %: " + playerData[7].free_throw_percentage, 295, 500);
        text("3PT %: " + playerData[7].three_point_percentage, 295, 520);
        
        // Julius Randle
        text(playerData[8].name, 505, 460);
        text("FG %: " + playerData[8].field_goal_percentage, 505, 480);
        text("FT %: " + playerData[8].free_throw_percentage, 505, 500);
        text("3PT %: " + playerData[8].three_point_percentage, 505, 520);
        
        // Kentavious Caldwell-Pope
        text(playerData[9].name, 710, 460);
        text("FG %: " + playerData[9].field_goal_percentage, 740, 480);
        text("FT %: " + playerData[9].free_throw_percentage, 740, 500);
        text("3PT %: " + playerData[9].three_point_percentage, 740, 520);  
        
        // Kyle Kuzma
        text(playerData[10].name, 975, 460);
        text("FG %: " + playerData[10].field_goal_percentage, 975, 480);
        text("FT %: " + playerData[10].free_throw_percentage, 975, 500);
        text("3PT %: " + playerData[10].three_point_percentage, 975, 520);
        
        // Larry Nance Jr.
        text(playerData[11].name, 1200, 460);
        text("FG %: " + playerData[11].field_goal_percentage, 1210, 480);
        text("FT %: " + playerData[11].free_throw_percentage, 1210, 500);
        text("3PT %: " + playerData[11].three_point_percentage, 1210, 520);         
    }    

//  third row of player images  
    image(ballImg, 10, 545, 220, 160);
    image(dengImg, 215, 545, 220, 160);
    image(hayesImg, 460, 545, 180, 160); 
    image(bryantImg, 670, 545, 220, 160); 
    image(ennisImg, 900, 545, 220, 160);
    image(blueImg, 1130, 545, 220, 160); 
    
//  third row of player stats    
    if (playerData) {
        // Lonzo Ball
        text(playerData[12].name, 90, 730);
        text("FG %: " + playerData[12].field_goal_percentage, 90, 750);
        text("FT %: " + playerData[12].free_throw_percentage, 90, 770);
        text("3PT %: " + playerData[12].three_point_percentage, 90, 790);
        
        // Luol Deng
        text(playerData[13].name, 295, 730);
        text("FG %: " + playerData[13].field_goal_percentage, 295, 750);
        text("FT %: " + playerData[13].free_throw_percentage, 295, 770);
        text("3PT %: " + playerData[13].three_point_percentage, 295, 790);
        
        // Nigel Hayes
        text(playerData[14].name, 510, 730);
        text("FG %: " + playerData[14].field_goal_percentage, 510, 750);
        text("FT %: " + playerData[14].free_throw_percentage, 510, 770);
        text("3PT %: " + playerData[14].three_point_percentage, 510, 790);
        
        // Thomas Bryant
        text(playerData[15].name, 740, 730);
        text("FG %: " + playerData[15].field_goal_percentage, 740, 750);
        text("FT %: " + playerData[15].free_throw_percentage, 740, 770);
        text("3PT %: " + playerData[15].three_point_percentage, 740, 790);  
        
        // Tyler Ennis
        text(playerData[16].name, 975, 730);
        text("FG %: " + playerData[16].field_goal_percentage, 975, 750);
        text("FT %: " + playerData[16].free_throw_percentage, 975, 770);
        text("3PT %: " + playerData[16].three_point_percentage, 975, 790);
        
        // Vander Blue
        text(playerData[17].name, 1210, 730);
        text("FG %: " + playerData[17].field_goal_percentage, 1210, 750);
        text("FT %: " + playerData[17].free_throw_percentage, 1210, 770);
        text("3PT %: " + playerData[17].three_point_percentage, 1210, 790);         
    }        
}
