                            // Chapter (17 to 20)

// Question 1:-

// var emptyarr= [
//   []
// ]

// Question 2:-
// var matrixarr= [
//   [0,1,2,3]
//   [1,0,1,2]
//   [2,1,0,1]
// ]

// Question 3:-
// for (var i = 1; i <= 10; i++) {
//   document.write(i + "<br>")
// }

// Question 4:-
// var number = prompt("Enter a number to show its multiplication table.")
// var length = prompt("Enter length multiplication table.")

// for (var i = 1; i <= length; i++) {
//   document.write(number +"x" +i +"=" +number * i +"<br>")
// }

// Question 5:-
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for (var i = 0; i < fruits.length ; i++){
//   document.write (fruits[i] +"<br>")
// }

// Question 6:-
// document.write("Counting:" + "<br>")
// for (var i = 1; i <= 10; i++) {
//   document.write(" " + i)
// }

// document.write("<br>" + "Reverse Counting:" + "<br>")
// for (var i = 10; i >= 1; i--) {
//   document.write(" " + i)
// }

// document.write("<br>" + "Even:" + "<br>")
// for (var i = 0; i <= 20; i += 2) {
//   document.write(" " + i)
// }

// document.write("<br>" + "Odd:" + "<br>")
// for (var i = 1; i <= 21; i += 2) {
//   document.write(" " + i)
// }

// document.write("<br>" + "Series:" + "<br>")
// for (var i = 2; i <= 20; i += 2) {
//   document.write(" " + i + "k")
// }

// Question 7:-
// var bakeryitem= ["cake","apple pie","cookie","chips","patties"]
// var input= prompt("Welcome to SUFI BAKERY,What do you want to order sir/mam.")

// var found= bakeryitem.includes(input)

// if(found){
//   document.write("Thankyou for order.")
// }
// else{
//   document.write("Item is not available.")
// }

// Question 8:-
// var nmbr= [24, 53, 78, 91, 12,128,256,512]
// var largenmbr=Math.max(...nmbr)

// document.write ("Array Numbers: " +"24, 53, 78, 91, 12, 256 ,128 ,512" +"<br>")
// document.write ("The Largest Number is " +largenmbr)

// Question 9:-
// var nmbr= [24, 53, 78, 91, 12,128,256,512]
// var smallnmbr=Math.min(...nmbr)

// document.write ("Array Numbers: " +"24, 53, 78, 91, 12, 256 ,128 ,512" +"<br>")
// document.write ("The Smallest Number is " +smallnmbr)

// Question 10:-
// for(var i=1; i<=100; i++){
//   if(i % 5==0){
//     document.write(i +" " +"<br>")
//   }
// }

                            // Chapter (21 to 25)

// Question 1:-
// var firstname= prompt("What is you first name.");
// var lastname= prompt("What is your last name.");
// var fullname= (firstname +" "+lastname);

// document.write ("Assalam Alaikum " +fullname)

// Question 2:-
// var fvrtphone= prompt("What is your phone model.");
// var length= fvrtphone.length;

// document.write ("Your favourite phone model is: " +fvrtphone +"<br>");
// document.write ("Length of String is: " +length);

// Question 3:-
// var pk= "Pakistani"
// var find= pk.search("n")

// document.write ("String: " +pk +"<br>")
// document.write ("Index of 'n': " +find +"<br>")

// Question 5:-
// var pk= ("Pakistani")
// var find= pk.match(/s/g)

// document.write ("String: " +pk +"<br>")
// document.write ("Character at index 4: " +find)

// Question 6:-
// var firstname= prompt("What is you first name.");
// var lastname= prompt("What is your last name.");
// var a= firstname.concat(" " +lastname)

// document.write (a)