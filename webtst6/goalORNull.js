/**
 * Created by amir on 4/13/18.
 */
let numberOfPlayers = 0;
let players = [];
let counter = 1;
let sameScorePlayers = [];
///////////////////////////////////////////////////////
//                  Variables
//////////////////////////////////////////////////////



function goalBooleanMadeBySystemMaker() {
    return Math.floor(Math.random() * Math.floor(2));
}
///////////////////////////////////////////////////////
//              Generates Goal !
//////////////////////////////////////////////////////



function PlayerClass(userName,id,score) {
    return{
        userName,
        id,
        score
    }
}
///////////////////////////////////////////////////////
//           'playerClass' Constructor
//////////////////////////////////////////////////////



function playerNumberGetter() {
    numberOfPlayers += prompt("Insert Number Of Players : ",'');
}
///////////////////////////////////////////////////////
//    It Asks User to Enter Number Of Player
//////////////////////////////////////////////////////




function playerIdentifier() {
    for( let i = 0; i < numberOfPlayers; i ++ ){
        let playerName = prompt(" Enter Your Name Player \'" + Number(i+1) + "\' (Of " + numberOfPlayers +  " Players) : ");
        players[i] = new PlayerClass(playerName,i,0);
    }
}
///////////////////////////////////////////////////////
//              Identifies The Players (Wich Is ):
//              Player Name
//              id
//              TimeHeWasRight

//////////////////////////////////////////////////////



function goalOrNullAsker() {
    let playerGoalOrNullGuess = [];
    for( let i = 0; i < 5; i ++){
        for( let j = 0; j < numberOfPlayers; j++ ) {
            playerGoalOrNullGuess[i] = prompt("Now  " + players[j].userName + "  Tell Me Wich Hand Has The GOAL?" +
                " ( \"left\" : 0 Or \"right\" : 1) \n Chance : " + i + " Of 5 Chances", '');
            goalOrNullChecker( playerGoalOrNullGuess[i] , players[j] );
        }
    }
}
///////////////////////////////////////////////////////
//          Asks The Player RIGHT ? Or LEFT ?
//          User Enter 0 Or 1 !
//          GoalOrNulChecker Runs In It !!
//////////////////////////////////////////////////////



function goalOrNullChecker( guess , player){
    let goalBooleanMadeBySystem = goalBooleanMadeBySystemMaker();
    if( guess == goalBooleanMadeBySystem ){
        console.log( player.userName + "! Your Guess Number :  " + guess +
            " And System's Guess : " + goalBooleanMadeBySystem + " | So It Was Exactly Truuuuuue !  ^^ ");
        player.score ++;
        counter++;
    }
    else {
        console.log( player.userName + "! Your Guess Number :  " + guess +
            " And System's Guess : " + goalBooleanMadeBySystem +  " | So It  Was Wrongggggg  !  :( ");
        counter++;
    }

}
///////////////////////////////////////////////////////
//  Checks The user Answer And Tell You Win Or Lost ?
//  It ++ The score If He Tell THe True Answer
// Counter Is ++ed Here To Show Each Ones Time
//////////////////////////////////////////////////////




function playerInfoPrinter() {
    console.log(players);
}
///////////////////////////////////////////////////////
// Prints The Information Of The Players As The Object
//////////////////////////////////////////////////////




function findWinner() {
    players.sort(function (a, b) {
        return a.score - b.score;
    });
    if(checkDuplicateInObject('score', players)){
        console.log( " DUPLICATED SCORE !! ");
        findWinnerWhenDuplicated();
    }

    else{
        console.log( "  ANDDDD The Winners : " );
        let rank = 1;
        for ( let i = numberOfPlayers - 1; i > -1; i -- ){
            console.log( " Rank " + rank + " Of " + numberOfPlayers + " Players , Isssss : " + players[i].userName );
            rank ++;
        }
    }
}
///////////////////////////////////////////////////////
// It Finds The Winnerss And Console It !
//////////////////////////////////////////////////////




function findWinnerWhenDuplicated() {
    let playerGoalOrNullGuess = 0;
    while(checkDuplicateInObject('score', players)){
        for ( let i = 0; i < numberOfPlayers; i++) {
            if (players[i].duplicate) {
                playerGoalOrNullGuess = prompt(" Penaltiiiiiiiiies ! Now  " + players[i].userName + "  Tell Me Wich Hand Has The GOAL?" +
                    " ( \"left\" : 0 Or \"right\" : 1) \n Chance : ", '');
                goalOrNullChecker(playerGoalOrNullGuess, players[i]);
            }
        }
    }
    console.log( "  ANDDDD Finally The Winners : " );
    let rank = 1;
    for ( let i = numberOfPlayers - 1; i > -1; i -- ) {
        console.log(" Rank " + rank + " Of " + numberOfPlayers + " Players , Isssss : " + players[i].userName);
        rank++;
    }
}
///////////////////////////////////////////////////////
// It Finds The Winner When We Have Duplication !
//////////////////////////////////////////////////////




function checkDuplicateInObject(propertyName, inputArray) {
    let seenDuplicate = false,
        testObject = {};

    inputArray.map(function(item) {
        let itemPropertyName = item[propertyName];
        if (itemPropertyName in testObject) {
            testObject[itemPropertyName].duplicate = true;
            item.duplicate = true;
            seenDuplicate = true;
        }
        else {
            testObject[itemPropertyName] = item;
            delete item.duplicate;
        }
    });

    return seenDuplicate;
}
///////////////////////////////////////////////////////
// It Finds The Duplicated Value in Array Of Objects
//////////////////////////////////////////////////////



function main() {
    playerNumberGetter();
    playerIdentifier();
    playerInfoPrinter();
    goalOrNullAsker();
    findWinner();
}
main();
///////////////////////////////////////////////////////
//              Runs The Main Function .
//////////////////////////////////////////////////////