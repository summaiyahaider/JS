// let weightMark=78;
// let weightJohn=95;
// let heightMark=1.69;
// let heightJohn=1.88;
// let markBmi=weightMark/(heightMark*heightMark);
// console.log(markBmi);
// let johnBmi=weightJohn/(heightMark**2);
// console.log(johnBmi);
// const markHigherBmi = markBmi > johnBmi;
// console.log(markHigherBmi);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1965;
// const year = 2022;

// const jonas = "I'm " + firstName + ', a ' + (year-birthYear) + ' years old ' + job +'!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}`;
// console.log(jonasNew);

// console.log('String \n\
// with \n\
// multilines');

// console.log(`String
// with
// multilines`);

// const age = 12;

// if(age>=18){
//     console.log(`Sarah can have a driving license. 👍`);
// }
// else{
//     const yearLeft=18-age;
//     console.log(`Sarah is too young to drive. Wait another ${yearLeft} years :)`);
// }

// const birthYear = 1991;

// let century;
// if (birthYear<=2000){
//     century = 20;
// }
// else{
//     century = 21;
// }
// console.log(century);

// let weightMark=78;
// let weightJohn=95;
// let heightMark=1.69;
// let heightJohn=1.88;
// let markBmi=weightMark/(heightMark*heightMark);
// console.log(markBmi);
// let johnBmi=weightJohn/(heightMark**2);
// console.log(johnBmi);
// if (markBmi>johnBmi){
//     console.log(`Mark's BMI is greater than John's!`);
// }
// else{
//     console.log(`John's BMI is greater than Mark's!`);
// }
// console.log(`Mark's BMI (${markBmi}) and John's BMI (${johnBmi})"
// `);

// const inputYear = '1991';
// console.log(Number(inputYear)+18);

//Truthy and Falsy values 
//  5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));

// const money = 100;
// if (money){
//     console.log("Don't spend it all");
// }
// else{
//     console.log("You should get a job!");
// }
   
// let height = 123;
// if(height){
//     console.log("Yay! Your height is defined");
// }
// else{
//     console.log("UNDEFINED");
// }

// const age = 18;
// if(age===18) console.log("You just became an adult :D (strict)");
// if(age==18) console.log("You just became an adult :D (loose)");

// const favourite = Number (prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite==22){
//     console.log("That's cool xD");
// }

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B
 
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if(shouldDrive){
//     console.log("Sarah Should drive");
// } else console.log("Someone else should drive :(");

// const isTired = false;
// if (hasDriversLicense && hasGoodVision && ! isTired);{
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

// Test Data 
/*
const dolphinScore1=97;
const dolphinScore2=90;
const dolphinScore3=90;

const koalasScore1=90;
const koalaScore2=95;
const koalaScore3=92;

const averageDolphin=(dolphinScore1+dolphinScore2+dolphinScore3)/3;
console.log(averageDolphin);

const averageKoala=(koalasScore1+koalaScore2+koalaScore3)/3;
console.log(averageKoala);

if (averageDolphin>averageKoala && averageDolphin>=100){
    console.log("Team Dolphins is the Winner");
} else if (averageKoala>averageDolphin && averageKoala>=100){
    console.log("Team Koala is the Winner");
}
else {
    console.log("No one is the Winner");
} */

const day='Thursday';

switch (day){
    case 'Monday':
        console.log("Prepare the schedule");
        break;
    
    case 'Tuesday':
        console.log("Prepare theory videos");
        break;
    
    case 'Wednesday':
    case 'Thursday' :
        console.log('Write code examples');
        break;

    case 'Friday' :
        console.log('Make Videos');
        break;

    case 'Saturday' :
    case 'Sunday' : 
    console.log('Enjoy weekend');
    break;
    default:
        console.log('Not a valid day');
}

