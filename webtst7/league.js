/**
 * Created by amir on 4/25/18.
 */
let numOfPlayers;
let teams = [];
let gameLevel = 1;
//////////////////////////////////////////////////////////
//              Variables
/////////////////////////////////////////////////////////



function Teams(name,id,score,competitor,level) {
    return {
        name,
        id,
        score,
        competitor,
        level
    }
}
//////////////////////////////////////////////////////////
//           Teams CLASS
/////////////////////////////////////////////////////////




function numOfTeamsGetter() {
    numOfPlayers =  prompt(" Enter Number Of Teams : " , '');
}
//////////////////////////////////////////////////////////
//            It Gets Number Of Players
/////////////////////////////////////////////////////////




function teamCreator() {
    for ( let i = 0; i < numOfPlayers; i++){
        let name = prompt(" Enter Name Of Teams " + i + " Of " + numOfPlayers + " Teams : " , '');
        teams[i] = new Teams(name,i+1,0,0,1);
    }
}
//////////////////////////////////////////////////////////
//            team Counstructor
/////////////////////////////////////////////////////////




function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//////////////////////////////////////////////////////////
//            It Suffles The elements in Array
/////////////////////////////////////////////////////////




function startCompetition(){
    makeTeams2And2(teams);
    for ( let i = 0; i < numOfPlayers; i++ ){
        let rndm = Math.floor( ( Math.random() * 5 ) + 1 ); // Random Number in range 1 - 5
        if (  teams[i].level === gameLevel )
            teams[i].score = rndm;
    }

    let index = 0;
    console.log("");
    console.log("*----------------\\SCORES/--------------*");
    for ( let i = 1; i < teams.length; i+=2 ) {
        if ( teams[i].competitor === i)
            console.log( teams[index].name + "'s SCORE: " +teams[index].score + " And "  +
                teams[index+1].name + "'s SCORE: " + teams[index+1].score );
        index += 2;
    }
    console.log("*----------*----------*----------*---------*");
    console.log("");
    bestScoreRecognizer();
}
//////////////////////////////////////////////////////////
//        It Starts The Compititions
//        And Prints The Results
/////////////////////////////////////////////////////////




function makeTeams2And2(allTeams) {
    console.log(" Game LEVEL Is : " + gameLevel);
    shuffle(allTeams);
    for ( let i = 0; i < allTeams.length; i++){
        if ( teams[i].level === gameLevel ){
            if (i % 2 === 0)
                allTeams[i].competitor = i + 1;
            else
                allTeams[i].competitor = i;
        }
    }
    console.log( "*----------------\\The Competitors/--------------*");
    let index = 0;
    for ( let i = 1; i < allTeams.length; i+=2) {
        if ( allTeams[i].competitor === i && teams[i-1].level === gameLevel )
            console.log( allTeams[index].name + " VS "  +  allTeams[index+1].name );
        index += 2;
    }
    if ( allTeams.length % 2 === 1 )
        console.log(" And " + allTeams[allTeams.length-1].name + " Will Ascends In The League ! ");
    console.log("*----------*----------*----------*---------*");
    console.log("");

}
//////////////////////////////////////////////////////////
//   It Mix The Teams And Return You Competitors
//   And Prints Them AS \The Competitors/
//  And LEVEL Up Them
/////////////////////////////////////////////////////////




function bestScoreRecognizer() {
    let index = 0;
    console.log(" *-------\\Who Ascends In This LEVEL/-----*");
    for ( let i = 1; i < teams.length; i+=2 ) {
        if ( teams[i].competitor === i && teams[i].level === gameLevel){
            if ( teams[index].score >= teams[index+1].score  ){
                teams[index].level++;
                console.log( " Team : " + teams[index].name);
            }
            else{
                teams[index+1].level++;
                console.log( " Team : " + teams[index+1].name);
            }
        }
        index += 2;
    }
    if ( teams.length % 2 === 1  ){
        teams[teams.length-1].level++;
        console.log(" Team : " + teams[teams.length-1].name);
        console.log(" Will Ascends In The League ! ");
    }
    console.log("*----------*----------*----------*---------*");
    console.log("");
    gameLevel++;
}
//////////////////////////////////////////////////////////
//        It Recognizes The Best Score
/////////////////////////////////////////////////////////




function teamPrinter() {
    console.log("*----------------\\TEAMS INFO/--------------*");
    for ( element in teams){
        console.log( teams[element].id +  " - " + teams[element].name +
            " | Score " + teams[element].score);
    }
    console.log("*----------*----------*----------*---------*");
    console.log("");
}
//////////////////////////////////////////////////////////
//          It Prints The teams With Their Score
/////////////////////////////////////////////////////////





function main(){
    numOfTeamsGetter();
    teamCreator();
    teamPrinter();
    console.log(teams);
}
main();
//////////////////////////////////////////////////////////
//                   RUN THE APP
/////////////////////////////////////////////////////////