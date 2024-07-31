// question 1

// let fname = prompt("Enter Your First Name",);
// let lname = prompt("Enter Your last Name");
// let fullName = (fname + lname);

// document.write("Good Morning" + " " + fullName + "!" + "<br>")

// question 2

// let favMobPhone = prompt("Enter Your Favorite Mobile Phone");
// let len = favMobPhone.length;

// document.write("My Favorite Phone is:" + " " + favMobPhone + "<br>" + "lenght of string:" + " " + len + "<br>");

// question 3

// let country = "Pakistani";
// let ind = country.indexOf("n");

// document.write("String:" + " " + country + "<br>" + "Index Of 'n':" + ind + "<br>");

// question 4

// let hello = "Hello World";
// let lindex = hello.lastIndexOf("l")

// document.write("String" + " " + hello + "<br>" + "Last Index Of 'l':" + " " + lindex + "<br>");

// question 5
// let country1 = "Pakistani";
// let charAT = country1.charAt(3);

// document.write("String:" + " " + country1 + "<br>" + "Character at index 3:" + " " + charAT + "<br>" )

// question 6

// let fname = prompt("Enter Your First Name",);
// let lname = prompt("Enter Your last Name");
// let fullName = [fname + lname].concat();

// alert("Good Morning" + " " + fullName + "!")

// question 7

// let city = "Hydrabad";
// let newRep = city.replace("Hydrabad", "islamabad");

// document.write("City:" + " " + city + "<br>");
// document.write("After Replacement:" + " " + newRep + "<br>");

// question 8

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let newString = message.replace(/and/g, "&");

// document.write(message + "<br>");
// document.write("After Replacement:" + newString + "<br>");

// question 9

// let str = "472";
// String Type
// document.write("value:" + " " + str + "<br>" + "Type:" + " " + typeof str + "<br>");
// Number Type
// let num = parseInt(str);
// document.write("value:" + " " + num + "<br>" + "Type:" + " " + typeof num);

// question 10

// let userInput = prompt("Please Enter Some Text");

// let CapInput = userInput.toUpperCase();

// document.write("User Enter:" + " " + userInput + "<br>");

// document.write("Upper Case:" + " " + CapInput + "<br>");

// question 11

// let word = prompt("Enter Any Word");

// let val1 = word.slice(0,1).toUpperCase();
// let val2 = word.slice(1).toLowerCase();
// let word1 = val1 + val2;

// document.write("User Input:" + " " + word + "<br>")
// document.write("Titled Case:" + " " + word1 + "<br>")

// question 12

// let num = 35.36;

// document.write("Number:" + " " + num + "<br>");

// let str = num.toString();

// var numStrWithoutDot = str.replace('.', '');

// document.write("Result:" + " " + numStrWithoutDot + "<br>");

 // Qno:13
    // var username = prompt("Enter Your Name")
    // var matchFound = true;
    // for(var i=0;i<=username.length;i++)
       
    //     {
    //         var charcode = username[i].charCodeAt()
    //         if(charcode === 33 || charcode === 44 || charcode === 46 || charcode === 64)
    //             {
    //                 document.write("Please Enter The Valid Username")
    //                 matchFound=false;
    //                 break;

    //             }
    //     }

// question 14

// var bakery = ["cake" , "pie" , "brownie" , "pastry" , "biscuit" , "chocolate"];
// var type = prompt("Please write what you want in our bakery");
// var bak = type.toLowerCase();
// var matchFound = false;

// for(var i = 0; i<bakery.length; i++){
//     if(bak===bakery[i].toLowerCase()){
//         matchFound = true;
//         document.write(type + " " + "is available in" + " " + "index" + " " + i)
//         break;
//     }
// }

// if(matchFound == false){
//     document.write(type + " " + "is'nt available in our bakery")
// }

// question 16

// let university = "U n i v e r s i t y  O f  K a r a c h i";

// let uniArray = university.split(" ");

// for(let i = 0; i<uniArray.length; i++){
//     document.write(uniArray[i] + "<br>")
// }

// question 17

// let uInput = prompt("Enter any Name");
// let lastChar = uInput.charAt(uInput.length-1)
// document.write("User Input:" + " " + uInput + "<br>")
// document.write("Last Charechter is:" + " " + lastChar + "<br>");

// Qno:18
// var sentance = "The quick brown fox jumps over the lazy dog"
// var find = "the"
// var word = sentance.split(" ");
// count = 0
// for (var i = 0; i < word.length; i++) {
//     if (word[i].toLowerCase() === find) {
//         count++;
//     }
// }
// document.write("The word 'the' occurs " + count + " times in the given string.");
