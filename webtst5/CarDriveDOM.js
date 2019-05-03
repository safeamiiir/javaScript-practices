/**
 * Created by amir on 3/16/18.
 */
let carNumbers = 0;
let userInp = 0;
let carLefted = 0;
let newPosition = 0;
let allCurrentPosition = [100];
let allcurrentID = [100];
let cars = [];
let cylandrNumberRndm = [];
let winnerCars = [];
let roadSimulator = [100];
// *************************************************************
//                       VARIABLES                                 
// *************************************************************
function roadUpdater(current,carId){
    // console.clear();
    for(let j = 0; j < 100; j++){
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
    carNumbers = document.getElementById("carNumInput").value;
    carLefted = carNumbers;
}
// *************************************************************
//     It Gets Number Of The Cars from USER With 'Promt'
// *************************************************************

function carIdentifier() {
    for(let i = 0; i < carNumbers; i++){
        cylandrNumberRndm.push(Math.floor((Math.random() * 10) + 1)); // 1-10
    }
    for(let i = 0; i < carNumbers; i++){
        cars[i] = new Cars(i,cylandrNumberRndm[i],0,Math.max(...cylandrNumberRndm) - cylandrNumberRndm[i] + 1);
        console.log(cars[i]);
        let carNum = cars[i].id + 1;
        let cylandrNum = cars[i].cylandrNumber;
        let chances = cars[i].NumOfChance;
        document.getElementById("mainInformation").innerHTML += "Car's Number : "
            + carNum + " | " + "Cylandrs : " + cylandrNum + " | " + "Chances : " + chances + "<br>"
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
    for(let j = 0; j < cars[i].NumOfChance; j++ ) {
        let inp = 0;
        // inp =+ prompt("Enter[" + (j+1) + "]move of " + "car[" + (i+1) + "] : ", ""); //User INPUT
        inp = Number(document.getElementById(i).value);
        while( inp > 10 || inp < 0)
            inp =+ prompt("Enter[" + (j+1) + "]move of " + "car[" + (i+1) + "] agin !! ( in range (1-10) ): ", ""); //User INPUT
        userInp = inp;
        newPosition = Math.abs( userInp - dice() ) * cars[i].cylandrNumber;
        //conflict Handler START!!!
        for(let k = 0; k < carNumbers; k++){
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
            break;
        }
        console.log( roadUpdater( allCurrentPosition , allcurrentID )  );
    }
}
function moveSetter() {
    let moveNum = 1;
    let carNum = 1;
    document.getElementById("moveInformation").innerHTML =  "Enter " + moveNum + "'s Move Of "
        + carNum + "'s Car : " + '<tb>' + "Your MOVE Numer : " + document.getElementById(moveNum - 1).value ;
}

// *************************************************************
//        Move The Cars By Changing 'currentPosition'
// *************************************************************

function inputCreater(carnmbrs) {
    for( let i = 0; i < carnmbrs; i ++ ){
        let carMoveInput = document.createElement("INPUT");
        document.getElementById("userInputMoves").appendChild(carMoveInput);
        carMoveInput.id = i;
        carMoveInput.className = "moveInputs";
        document.getElementById(i).placeholder = " Enter Car " + (i+1) + " 's Moves Here : ";
        let carMoveInputSpaces = document.createElement("TB");
        document.getElementById("userInputMoves").appendChild(carMoveInputSpaces);
    }
}
// *************************************************************
//        Creates The input for each Car to Enter its Move
// *************************************************************


function main() {
    carNumbersGetter();
    carIdentifier();
    inputCreater(carNumbers);
    // while(carLefted){//while There is any Car
    //     for(let i = 0; i < carNumbers; i++){//Move 4 Cars
    //         if( !winnerCars.includes(i) ){
    //             move(i);
    //             // console.log("car ["+ (i+1) +"]'s Position Is : " +cars[i].currentPosition);
    //             // console.log(allCurrentPosition);
    //         }
    //     }
// *************************************************************
//                 Calls 'move' for each car                               
// *************************************************************
//         console.log("Car Lefted : " + carLefted);
//     }
//     for(let i = 0; i < winnerCars.length; i++){winnerCars[i] += 1;}
//     alert(' WINNERS: ' + winnerCars );
//     console.log(' WINNERS: ' + winnerCars );

// *************************************************************
//                     Shows The Winners                               
// *************************************************************

}

// *************************************************************
//             MAIN FUNC  Calls All The Other Funcs                              
// *************************************************************