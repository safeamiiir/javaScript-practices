/**
 * Created by amir on 3/16/18.
 */
var carNumbers = 0;
var userInp = 0;
var carLefted = 0;
var newPosition = 0;
var allCurrentPosition = [100];
var allcurrentID = [100];
var cars = [];
var cylandrNumberRndm = [];
var winnerCars = [];
var roadSimulator = [100];
// *************************************************************
//                       VARIABLES                                 
// *************************************************************
function roadUpdater(current,carId){
    // console.clear();
    for(var j = 0; j < 100; j++){
        if( current.includes(j) ){
            roadSimulator[j] =  '#____' + carId[j] + '___#' ;
        }
        else{
            roadSimulator[j] = '*';
        }
    } 
    return roadSimulator;
}
// *************************************************************
//              Update The Road Every Time
// *************************************************************

function Cars(id,cylandrNumber,currentPosition,NumOfChance,){
    return{
    id,
    cylandrNumber,
    currentPosition,
    NumOfChance,
    }
}
// *************************************************************
//   Cars All Are CHILD Of This Function It Is The CREATOR !!!
// *************************************************************

function carNumbersGetter() {
    carNumbers =+ prompt("Insert Number Of The Cars : ",'');
    carLefted = carNumbers;
}
// *************************************************************
//     It Gets Number Of The Cars from USER With 'Promt'
// *************************************************************

function carIdentifier() {
    for(var i = 0; i < carNumbers; i++){
        cylandrNumberRndm.push(Math.floor((Math.random() * 10) + 1)); // 1-10
    }
    for(var i = 0; i < carNumbers; i++){
        cars[i] = new Cars(i,cylandrNumberRndm[i],0,Math.max(...cylandrNumberRndm) - cylandrNumberRndm[i] + 1);
        console.log(cars[i]);
    }
}
// *************************************************************
//      It Identifies The Car This Way : 
//      Set it an 'Id'
//      Set it a 'cylandrNumber'                               
//      set it a 'currentPosition'
//      set it a 'NumOfChance'
// *************************************************************

function dice() {
    return  Math.floor((Math.random() * 10) + 1);
}
// *************************************************************
//              Dice for Every Move Of The Car
// *************************************************************

function move(i) {
    for(var j = 0; j < cars[i].NumOfChance; j++ ) {
        var inp = 0;
        inp =+ prompt("Enter[" + (j+1) + "]move of " + "car[" + (i+1) + "] : ", ""); //User INPUT
        while( inp > 10 || inp < 0)
            inp =+ prompt("Enter[" + (j+1) + "]move of " + "car[" + (i+1) + "] agin !! ( in range (1-10) ): ", ""); //User INPUT
        userInp = inp  
        newPosition = Math.abs( userInp - dice() ) * cars[i].cylandrNumber;
        //conflict Handler START!!!
        for(var k = 0; k < carNumbers; k++){
            if( newPosition === cars[k].currentPosition ){
                cars[k].currentPosition = 0;
            }
        }//conflict Handler END!!!

        cars[i].currentPosition += newPosition;
        allCurrentPosition[i] = cars[i].currentPosition;
        allcurrentID[cars[i].currentPosition] = i+1;
        console.log( ("car[" + (i+1) + "]'s Position is : " + allCurrentPosition[i]) );
        if(cars[i].currentPosition >= 100){
            console.log("car[" + (i+1) + "]Has Won The Race !!!!!! ");
            carLefted -= 1;
            winnerCars.push(i);
            allCurrentPosition[i] = -1;
            // console.log( roadUpdater( allCurrentPosition , allcurrentID )  );
            break;
        }
        console.log( roadUpdater( allCurrentPosition , allcurrentID )  );
    }
}
// *************************************************************
//        Move The Cars By Changing 'currentPosition'                               
// *************************************************************


function main() {
    carNumbersGetter();
    carIdentifier();
    while(carLefted){//while There is any Car
        for(var i = 0; i < carNumbers; i++){//Move 4 Cars
            if( !winnerCars.includes(i) ){
                move(i);
                // console.log("car ["+ (i+1) +"]'s Position Is : " +cars[i].currentPosition);
                // console.log(allCurrentPosition);
            }
        }
// *************************************************************
//                 Calls 'move' for each car                               
// *************************************************************
        console.log("Car Lefted : " + carLefted);
    }
    for(var i = 0; i < winnerCars.length; i++){winnerCars[i] += 1;}
    alert(' WINNERS: ' + winnerCars );
    console.log(' WINNERS: ' + winnerCars );

// *************************************************************
//                     Shows The Winners                               
// *************************************************************
}
// *************************************************************
//             MAIN FUNC  Calls All The Other Funcs                              
// *************************************************************

main();   
// *************************************************************
//               PLAY THE GAME HERE ^^                              
// *************************************************************