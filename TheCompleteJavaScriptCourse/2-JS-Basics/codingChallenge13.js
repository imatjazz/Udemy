var age1, height1, age2, height2;

age1 = 20;
height1 = 180;

age2 = 35;
height2 = 172;

age3 = 26;
height3 = 170;

var score1 = age1*5 + height1;
var score2 = age2*5 + height2;
var score3 = age3*5 + height3;

/*
if (score1>score2){
    console.log('Player1 win');
} else if (score1 == score2){
    console.log('It is a draw (1st scenario) with score1:'+score1 +' and score2:'+score2);
} else {
    console.log('Player2 win');
}
*/

switch(score1, score2, score3){
    case score1 < score3 && score2<score3:
        console.log('3 is the winner');
        break;
    case score1 <score2 && score3 < score2:
        console.log('2 is the winner');
        break;
    case score2 <score1 && score3 < score1:
        console.log('1 is the winner');
        break;
    //default:
    //    console.log('no results');
}