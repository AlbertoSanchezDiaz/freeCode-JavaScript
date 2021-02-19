var myName;

var a;
a = 7;

var a;
a = 7;
var b;
b = a;

var a = 9;

var a=5;
var b=10;
var c="I am a";

var studlyCapVar=10;
var properCamelCase="I am a";
var titleCaseOver=9000;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

var sum = 10 + 10;

var difference = 45 - 33;

var product = 8 * 10;

var quotient = 66 / 33;

var myVar = 87;
myVar++;

var myVar = 11;
myVar--;

var ourDecimal = 5.7;
var myDecimal = 5.7;

var product = 2.0 * 2.5;

var quotient = 4.4 / 2.0;

var remainder;
remainder = 11 % 3;

var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;

var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;

var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;

var myFirstName = "Alberto";
var myLastName = "Sanchez";

var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

var myStr="FirstLine\n\t\\SecondLine\nThirdLine";

var myStr="This is the start. " + "This is the end.";

var myStr="This is the first sentence. ";
myStr +="This is the second sentence.";

var myName="Alberto";
var myStr="Hello, my name is " + myName + "and I am Well!";

var someAdjective="awesome!";
var myStr = "Learning to code is ";
myStr += someAdjective;

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];

var myStr = "Jello World";

myStr = "Hello World";

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length-1];

var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length-2];

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

var myArray = ["Alberto", 1,];

var myArray = [["Madrid",7], ["Betis", 10]];

var myArray = [50,60,70];
var myData = myArray[0];

var myArray = [45,64,99];
myArray[0]=45;

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];

var myArray = [["Alberto", 23], ["cat", 2]];
myArray.push(["dog",3]);

var myArray = [["Alberto", 23], ["cat", 2]];
var removedFromMyArray=myArray.pop();

var myArray = [["Alberto", 23], ["dog", 3]];
var removedFromMyArray=myArray.shift();

var myArray = [["Alberto", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);

var myList = [["Milk",4], ["Bread",5], ["Oranges",6], ["Lemons",2], ["Donuts",4]];

function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

function FunctionWithArgs(a, b) {
    console.log(a - b);
  }
  
  FunctionWithArgs(10, 5); 
  
  function functionWithArgs(a, b) {
    console.log(a + b);
  }
  
  functionWithArgs (1, 2);
  functionWithArgs (7, 9);



function fun1() {

var myGlobal=10;

function fun1() {

oopsGlobal=5;
}

}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

var outerWear = "T-Shirt";

function myOutfit() {
var outerWear="sweater";
  return outerWear;
}

myOutfit();

function timesFive(num){
    return num*5;
}

var answer  = timesFive(3);

var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive(){
  sum = sum + 5;
}

addThree();
addFive();

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed=processArg(7);

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function welcomeToBooleans() {
  return true;
}

function trueOrFalse(wasThatTrue) {
   if (wasThatTrue) {
     return "Yes, that was true";
   }
   return "No, that was false";
}

function testEqual(val) {
  if (val==12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

function testStrict(val) {
  if (val===7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

function testNotEqual(val) {
  if (val!=99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

function testStrictNotEqual(val) {
  if (val!==17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

function testGreaterThan(val) {
  if (val>100) { 
    return "Over 100";
  }

  if (val>10) { 
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

function testGreaterOrEqual(val) {
  if (val>=20) {
    return "20 or Over";
  }

  if (val>=10) {
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

function testLessThan(val) {
  if (val<25) {
    return "Under 25";
  }

  if (val<55) {
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

function testLessOrEqual(val) {
  if (val<=12) {
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

function testLogicalAnd(val) {
  if (val<=50 && val>=25){
      return "Yes";
  }
  return "No";
}

testLogicalAnd(10);

function testLogicalOr(val) {
  if (val<10 || val>20){
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);

function testLogicalOr(val) {
  if (val<10 || val>20){
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
  }
}

testElseIf(7);

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

function switchOfStuff(val) {
  var answer = "";
switch(val){
  case "a":
  answer="apple";
  break;
  case "b":
  answer="bird";
  break;
  case "c":
  answer="cat";
  break;
  default:
  answer="stuff";
  break;
}

  return answer;
}

switchOfStuff(1);

function sequentialSizes(val) {
  var answer = "";

switch(val){
  case 1:
  case 2:
  case 3:
  answer="Low";
  break;
  case 4:
  case 5:
  case 6:
  answer="Mid";
  break;
  case 7:
  case 8:
  case 9:
  answer="High";
}

  return answer;
}

sequentialSizes(1);

var product = 2.0 * 2.5;

var quotient = 4.4 / 2.0;

function chainToSwitch(val) {
  var answer = "";

  switch(val) {
    case "bob":
    answer = "Marley";
    break;
    case 42:
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
    answer = "Ate Nine";
  }

  return answer;
}

chainToSwitch(7);

function isLess(a, b) {
 
    return a<b;
}

isLess(10, 15);

function abTest(a, b) {

if (a < 0 || b < 0) {
  return undefined;
}

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

var count = 0;

function cc(card) {
 
 switch (card){
 case 2:
 case 3:
 case 4:
 case 5:
 case 6:
  count++;
  break;
 case 10:
 case "J":
 case "Q":
 case "K":
 case "A":
  count--;
  break;
}

var holdbet ='Hold'
  if (count > 0){
  holdbet = 'Bet'
}

  return count + " " + holdbet;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

var myDog = {
  "name": "Buddy",
  "legs": 4,
  "tails": 1,
  "friends": ["Alberto","Rafa","Marivi","Alex"]
  };

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber=16;
var player = testObj[playerNumber];

var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name="Happy Coder";

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog["bark"]="woof";

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;

function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  }
  
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");

function checkObj(obj, checkProp) {
   if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  else {
  return "Not Found";
  }
}

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  ,
  {
  "artist":"Beau Carnes",
  "title":"Cereal Man",
  "release_year":2003,
  "formats":[
    "Youtube video",
    "Vinil"
  ]}
];