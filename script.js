





   // q1
var x =prompt('enter a nwmber ') 
console.log(x) 





 //q2
var x =prompt('enter a nwmber ') 
if (x%3==0){
    console.log('yes')

}else{
    console.log('no')
}

//q3
var x =prompt('enter a number ') 
var y =prompt('enter a number ') 
if (x>y){
    console.log(x)

}else if (y>x){
    console.log(y)
}
else if(x=y) {
    console.log ("the two numbers are equal")
}
else {
    console.log("wrong")
} 

//q4
var x =prompt('enter a number ') 
if (x>0){
    console.log('positive')

}else if (x<0){
    console.log('negative')
}else{
    console.log("zero")
}

//q5
var x =prompt('enter a number ') 
var y =prompt('enter a number ') 
var z =prompt('enter a number ') 
if(x>y && x>z) {
    console.log(x)
}if(z>x && z>y) {
    console.log(z)
}if(y>x && y>z) {
    console.log(y)
}

//q6

var x =prompt('enter a number ') 
    if(x%2==0){
        console.log("even")
    }
    else {
        console.log("odd")
    }
    
   
//q8
var ch = prompt('Enter character')
if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'U'|| ch == 'E'|| ch == 'I'|| ch == 'O' ) {
    console.log("vowel")
}
 else{
    console.log("consonant")
 } 
 //q9 

 var x =prompt('enter a number ') 
 for(var i=1 ; i<=x ; i++){
    console.log(i)
} 
 
//q10


var number =prompt('Enter an integer: ');
for(let i = 1; i <= 12; i++) {
     result = i * number;
    console.log( result);
}

//q11
var x = prompt("enter num")
for(var i=0 ; i<=x ; i++){
    if(i%2==0){
        console.log(i)
    }
}  

//q12
var x = prompt("enter num")
var y = prompt("enter num")
console.log(Number(x^y)) 


//q12
  var  a= prompt("enter the grade")
  var  b= prompt("enter the grade")
   var  c= prompt("enter the grade")
  var  d= prompt("enter the grade")
  var  e= prompt("enter the grade") 
 sum = Number(a)+ Number(b)+Number(c)+Number(d)+Number(e)
 avg = sum/5
console.log('total=', sum)
console.log('average=', avg)

//q13

var x= prompt('enter month number')
if(x=2){
    console.log('Days in Month: 29')
}
else if(x=4||6||9||11) {
    console.log('Days in Month: 30')
} 
else if (x=1||3||5||7||8||10||12){
    console.log('Days in Month: 31')
}
else{
    console.log('wrong')
}
//q16 
var ch = prompt('Enter character')
switch (ch){
    case (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'U'|| ch == 'E'|| ch == 'I'|| ch == 'O' ): 
        console.log("vowel");
        break;
        default : console.log("consonant");
}

 


//q17
var x = prompt('Enter num')
var y = prompt('Enter num')
switch(true) {
    case (x > y):
        console.log(x);
        break;
    case (x < y):
        console.log(y);
        break;
    case (x === y):
        console.log(x ,`is equal to`, y);
        break;
     default: console.log(false, ' Something went wrong');
}

//q18
var x = prompt('Enter num')
switch(true) {
    case (x%2==0):
        console.log('even');
        break;
     default: console.log( 'odd');
}
//q19
var x = prompt('Enter num')

switch(true) {
    case (x > 0):
        console.log('positive');
        break;
    case (x < 0):
        console.log('negative');
        break;
    case (x == 0):
        console.log('zero');
        break;
     default: console.log(' Something went wrong');
}
//q20
var number1 = prompt('Enter first number ')
var number2 = prompt('Enter second number ')
var operator = prompt('Enter the operator ')
switch(operator) {
    case '+':
        result = Number( number1) + Number( number2);
        console.log(  result );
        break;
    case '-':
        result = Number( number1) - Number( number2);
        console.log(result  );
        break;
    case '*':  
        result = Number( number1) * Number( number2);
        console.log(result);
        break;
    case '/':
        result = Number( number1) / Number( number2);
        console.log(result);
        break;
    default:
        console.log('Invalid operator');
        break;
}

