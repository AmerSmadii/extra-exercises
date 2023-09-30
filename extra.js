//q1
//-9 * 3// = -27;
//"value is " + 50// = "value is 50" (a string concatenation);
//17 % 5 //= 2 (the remainder when 17 is divided by 5);
//5 % 17 //= 5 (the remainder when 5 is divided by 17);
//5 / 10// = 0.5 (division of two numbers);
//(4 == 4)// = true (comparison of two numbers for equality);
//(4=5)// = This will result in a syntax error. It should be (4 == 5) for a comparison.;
//(7 <= 8) //= true (comparison of two numbers using less than or equal to);
//Math.ceil(x) - Math.floor(x)// = This will depend on the value of x, which is not provided. This expression calculates the difference between the ceiling and floor of x;


//q2
let number =  window.prompt("Enter a number:","");
window.alert("You entered: " + number);

//q3
let num1 = window.prompt("Enter the first number:");
let num2 = window.prompt("Enter the second number:");

if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 < num2) {
        alert("Ascending Order: " + num1 + ", " + num2);
    } else if (num1 > num2) {
        alert("Ascending Order: " + num2 + ", " + num1);
    } else {
        alert("The numbers are equal: " + num1 + ", " + num2);
    }
} else {
    alert("Invalid input. Please enter valid numbers.");
}

//q4
let num11 = parseFloat(prompt("Enter the first number:"));
let num22 = parseFloat(prompt("Enter the second number:"));

if (!isNaN(num11) && !isNaN(num22)) {
    if (num11 > num22) {
        alert("The larger number is: " + num11);
    } else if (num11 < num22) {
        alert("The larger number is: " + num22);
    } else {
        alert("Both numbers are equal.");
    }
} else {
    alert("Invalid input. Please enter valid numbers.");
}

//q5
let num10 = parseFloat(prompt("Enter the first number:"));
let num20 = parseFloat(prompt("Enter the second number:"));

if (!isNaN(num10) && !isNaN(num20)) {
    var sum = num10 + num20;
    alert("The sum of the two numbers is: " + sum);
} else {
    alert("Invalid input. Please enter valid numbers.");
}

//q6
let num4 = window.prompt("enter num","") * 1; 
switch (num4) {
    case 1:
        window.alert("ONE");
        break;
    case 2:
        window.alert("TWO");
        break;
    case 3:
        window.alert("THREE");
        break;
    case 4:
        window.alert("FOUR");
        break;
    case 5:
        window.alert("FIVE");
        break;
    case 6:
        window.alert("SIX");
        break;
    case 7:
        window.alert("SEVEN");
        break;
    case 8:
        window.alert("EIGHT");
        break;
    case 9:
        window.alert("NINE");
        break;
    default:
        window.alert("PLEASE TRY AGAIN");
        break;
}
