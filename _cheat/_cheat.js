/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* eslint-disable no-constant-condition */
/* eslint-disable no-console */
// ----------------------CONSOLE-----------------------
// ----------------------------------------------------
// ----------------------------------------------------        

function consoleTut(){
    // to debug and test
    console.log("string");
    console.log("variable", "other variable");
    // same, but easyer to see between all the console.logs
    console.info("yes yes");
    // same, but it indicates an error, and shows line nr in code
    console.error("error message here");
}



// ----------------------STRING------------------------
// ----------------------------------------------------
// ----------------------------------------------------        
function string() {
        // string with numbers count as a number 
        var number = "09";
        // creates an array of a string (where to begin, how long);
        var text = textVariable.substring(0,textVariable.length);
}


// ----------------------MATH-------------------------
// ----------------------------------------------------
// ----------------------------------------------------
function mathTut() {

    // string with numbers count as a number 
    var number = "09";
    // gives out flat numbers:
    Math.floor(333/435*403);   
}

// REMAINER
console.log((3*1.5)%5);
// never goes over the value after % writes down what remains instead

// ----------------DATE AND INTERVAL-------------------
// ----------------------------------------------------
// ----------------------------------------------------

// can be used to create interval functions
Date.now();


// RANDOM NUMBER-----------------

// generating random number by Math.random()*8 makes an uneven distribution!!
//  because some numbers have more dezimal steps and 
function randomNr(maxNr){
    var oneToTen = Math.floor(Math.random()*10);
    var step = 10/maxNr;
    var actualStep = step;
    var randomNr = 0;

    while (actualStep <= oneToTen){
        randomNr++;
        actualStep += step;
    }
    console.log("ready random nr:" + randomNr)
}

// randomNr(112);




// ----------------------FUNCTION-------------------------
// -------------------------------------------------------
// -------------------------------------------------------
// vars declared inside a function stay only inside a function!
// vars declared inside a function exist also inside functions wich are inside the function!
// vars declared inside overwrite the ones declared outside

function functionTut() {

    // function inside a function
    function outsideFunction() {
        
        
        var a = 10;
        var b = 20;
        function functionInFunction() {
            var result = a+b;
            return result;
        }
        
        // AFTER RETURN DO NOT DECLARE THE FUNCTION WITH "()"!
        return functionInFunction;
    }
    var result = outsideFunction();
    
    // without "()": outputs the code of the function
    console.log(result);
    // with "()": makes it a function outputs the result/return of the function
    console.log(result());
    
    // Closure = function inside a function, wich relyes on variables declared in the outer fnction
    // declaration of variables inside a function, inside a function
    var test = "outside the function declared value";
    console.log("tested before the function: " + test);
    
    function insideDeclared() {
        var test = "inside the function declared value";
        console.log("tested inside the function: " + test);
    }
    insideDeclared();
    console.log("tested after the function: " + test);
    
// ------------------------SWITCH--------------------
// ---------------------------------------------------
// ----------------------------------------------------

var animal = "alien";

switch(animal){
    case "squirrel":
    case "wulf":
    case "tiger":
        console.log(animal + " is an animal");
        break;
    case "spoon":
        console.log(animal + " is not an animal");
        break;
    default:
        console.log(animal + " ...i dont know that beeing");
}



// ---------------------IF... ELSE...-----------------
// ---------------------------------------------------
// ----------------------------------------------------

function ifElseTut(){

    // LONG VERSION (inside var possible)------------------
    
        if( 2>=3 ){
            
            var output = "long output var: if true, do that...";
            console.log(output);
        } else{
            var output = "long output var: otherwise, do that";
            console.log(output);
        }
    
    // SHORT VERSION (no variable declaration possible) ----
        2>1 ? 
        console.log("short: if true, do that")
        : console.log("short: otherwise do that");
    
        // multiple things to do in squared scopes [... , ... , ...]
        1>0 ?
        [console.log(" if true, do that... "),console.log(" ...and that")]
        : [console.log("it isnt "), console.log("nopidope")] ;
    
        console.log("-------------------------");
    }
    ifElseTut();

}
// functionTut();







// --------------VAR / LET / AND CONSTANT--------------
// ----------------------------------------------------
// ----------------------------------------------------
// inside function & inside if & declared as "var" 
//  = changes the variable in: function & in if ( NOT OUTSIDE the function!)
// inside function & inside if & declared as "let" 
//  = changes the variable in: in if ( NOT IN FUNCTION, NOT OUTSIDE the function!)

function varLetTut(){

    function varLet(){
        // variables only exist in a function!
        var test = "before if";
        var test2 = "before if";

        console.log("outside the if:"+ "\n \t" +test+ "\n \t" +test2);

        if(2>1){
           var test = "in if var";
           let test2= "in if let";
        // shows what is inside the if
           console.log("inside the if:" + "\n \t" +test+"\n \t" +test2);
        }

        console.log("after if :"+ "\n \t" +test+ "\n \t" + test2 +"\n \n \tin if declared var: changes the variable outside \n \tin if declared let: stays only in if ");
    }
    varLet();
}
// varLetTut();



// ---------------------ARRAY-------------------------
// ---------------------------------------------------
// ----------------------------------------------------
var arrayTut = function(){
    // can store multiple strings, numbers, what ever
    let array = ["one",true,3];

    console.log(array);
    // length
    console.log(array.length);
    // reverse
    console.log(array.reverse());
    // delate first
    console.log(array.shift());
    // add one infront
    console.log(array.unshift("unshift",666));
    // delate last
    console.log(array.pop());
    // add one at the end
    console.log(array.push("pushed"));

    console.log(array);

};
// arrayTut();



// ----------------&& AND || OR OPERATOR -------------
// ---------------------------------------------------
// ----------------------------------------------------
var andOrTut = function(){
// only works as and and or operator with bolean!!!!!!
// with different types || takes the first if it can be converted to true,
// ad otherwise the second
// with different types && takes the second if the first can be converted to true,
// ad otherwise the first

// ---------------- && || with boleans --------------
    console.log("   bolean &&|| bolean:");

    console.log("true&&true =",     true&&true);
    console.log("false&&false =",   false&&false);
    console.log("true&&false =",    true&&false);
    console.log("false&&true =",    false&&true);

    let a = true, b = true;

    // is true, when both are true
    a&&b ? 
    console.log(a + " and " + b + " are equal")
    : console.log(a + " and " + b + " are not equal");

    //true when both or one of them is true
    a||b ? 
    console.log(a + " and / or " + b + " is ture")
    : console.log(a + " and/ or " + b + " is true");

    //way to make it only true if only one, but not both are true
    (a||b)&&(a!=b) ?
    console.log(a + " or " + b + " but not both is true")
    : console.log(a + " or " + b + " but not both is false");

    console.log("-------------------------");


// ---------------- && || with OTHER than bolean --------------
    console.log("   not bolean &&|| not bolean ");
    
    // or ||: if first converted to true = first value output
    console.log("string" ||"second value");
    console.log(5 ||"second value");
    
    // or ||: if first NOT converted to true = second value output
    console.log(undefined||"|| second value");
    console.log(NaN||"|| second value");
    console.log(0||"|| second value");
    
    // and &&: if first converted to true = second value output
    console.log("string"&&"&& second value");
    console.log(5 &&"&& second value");
    
    // and &&: if first NOT converted to true = first value output
    console.log(undefined&&"second value");
    console.log(NaN&&"second value");
    console.log(0&&"second value");
    
// ---------------- && || with bolean & OTHER  -------------- 
// if bolean and NOT bolean are mixed, it is handled like with other values
    console.log("   bolean && || not bolean ");
    console.log("   && ");
    // if first can be converted to true it takes the second one, otherwise first
    // proofes that bol & not bol is treated like not bolean
    console.log(true&&NaN);
    console.log(false&&NaN);
    console.log(NaN&&true);
    console.log(NaN&&false);
    
    console.log("   || ");
    console.log(true||NaN);
    console.log(false||NaN);
    console.log(NaN||true);
    console.log(NaN||false);
};
// andOrTut();




// ---------------------OBJECTS -----------------------
// ----------------------------------------------------
// ----------------------------------------------------

var objectTut = function() {
// way to create a new Object
    var simpleObject = new Object ();

    simpleObject.one        = "long with . =";
    // ["..."] are used if special signs (:*-+...) are in the name
    simpleObject["two:*"]   = "long with [] =";
    simpleObject.nr         = 1;
    simpleObject.bolean     = true;

    console.log(simpleObject, "\n \n");
    

    // or shorter:

    let shortObject = {
        uno:        "short with :",
        // ["..."]  used if special signs (:*-+...)
        ["dos:*"]:  "short with [\".\"]",
        numero:     4,
        boleanos:   true,

        // Function inside an object
        updateNr: function(){
            return ++shortObject.numero;
        }
    };
    // beforte update
    console.log(shortObject);
    // update
    shortObject.updateNr();
    shortObject.updateNr();
    shortObject.updateNr();
    // after update
    console.log(shortObject);

    // call out the Function
    shortObject.updateNr();

    // log a declared part of the Object
    console.log("newSkills." + shortObject.numero);
    console.log(shortObject.boleanos);
};
// objectTut();


// ------------- OBJECT constructING FUNCTION ---------


var objectconstructorTut = function(){


    function construct (first, second, bolean, counter){
        this.first = first;
        this.second = second;
        this.bolean = bolean;
        this.counter = counter;
        // creates a function tied to this this Object
        this.count = function(){
            return ++this.counter;
        };
    }

    // fill new Variables with 
    let constructed = new construct ("one", "two",true,0);
    let constructed2 = new construct ("1", "2",false,5);

    console.log(constructed);
    console.log(constructed2);
    console.log("");

    // OBJECT IN ARRAY

    var objectsInArray = [ 
        new construct("in1",  "in2", true,3),
        new construct("inOne",  "inTwo", false,5)
    ];

    console.log(objectsInArray[1].bolean);

};
// objectconstructorTut();

// ---------------------PROTOTYPE-----------------------
// ----------------------------------------------------
// ----------------------------------------------------

// adds a new function/value to the prototypes
// it will be accesible to ALL(!) objects
// every object can acces all the prototypes
Object.prototype.newFunction = function () {
    
};


// ------------------------ DOM EXAMPLES---------------
// ----------------------------------------------------
// ----------------------------------------------------

function domTuts() {
// -----------------  ATTRIBUTES INTO VARIABLES TUT-------
    function selectorTut() {
        console.log("selectorTuT:");
        document.querySelector(".classNames").classList.remove("hidden"); 
        // Create variables and let them stand for the attributes
    // changes to that variable apllyes on the original attributes!!!
    
    // find first element with the searched class / id...
        //...let the variable stand for the selected html/css instance
        const DOTCLASSNAME = document.querySelector(".classname");
        //changes the html/css by changing the variable, adding newClassname
        DOTCLASSNAME.className = "classname newClassname";
        console.log(document.querySelector(".newClassname"));
        console.log("----------------");
    
        var tagId = document.querySelector("#originalId");
        tagId.innerHTML = "changed #Id content";
        console.log(tagId);
        console.log("-----------------");
    
    // select second/third etc element with classname
        const SECOND = document.querySelectorAll(".classname");
        console.log(SECOND);
        SECOND[1].innerHTML = "changed second class element";
        console.log(SECOND[1]);
        console.log("-----------------");
        console.log("-----------------");
    
    // Nesting
        const IMAGEFIGURE = document.querySelector(".moon-pic-figure");
        const IMAGE = IMAGEFIGURE.querySelector("img");
    
        console.log(IMAGEFIGURE);
        console.log(IMAGE);
    
    }
    // selectorTut();

    function selectorAttributesTut() {
    // ------------------------.attributes ------------------
    // a function which makes the link open in a new tab 
        document.querySelector(".target").classList.remove("hidden");
        console.log("selectorAttributesTut:");
    
        const HEADLINE = document.querySelector(".target a");
        // you can only see the original values if you deleat/comment out set.Attribute, with the new value
        HEADLINE.setAttribute("href","https://www.wikipedia.de");
    // result shows updated link befor it is even updated!
        console.log(HEADLINE);
    
        HEADLINE.setAttribute("href","https://www.ecosia.de");
        HEADLINE.setAttribute("spass","quatschattribut");
        console.log(HEADLINE.attributes[1]);
        // removes attribute
        HEADLINE.removeAttribute("spass");
        console.log(HEADLINE.attributes[1]);
    
        if(HEADLINE.hasAttribute("target")) {
            console.log(HEADLINE.attributes("target"));
        } else {
            HEADLINE.setAttribute("target", "_blank");
        }
    
        console.log("-----------------");
        console.log(HEADLINE.hasAttribute("target"));
        console.log(HEADLINE.getAttribute("target"));
        console.log(HEADLINE.attributes);
        console.log(HEADLINE.attributes[0]);
        console.log(HEADLINE.attributes[1]);
    
    }
    // selectorAttributesTut();

    // -----------------  CREATE ELEMENT TUT------------------
    function createElementTut() {
        document.querySelector(".classNames").classList.remove("hidden");
    
        var createHere = document.querySelector(".classname");
        var createdElement = document.createElement("h1");
        createdElement.innerHTML = "hola";
        createHere.appendChild(createdElement);
    }
    // createElementTut() 
    
    // -----------------  CHANGE STYLES TUT-----------------
    function changeStylesTuT() {
        document.querySelector(".classNames").classList.remove("hidden");

        // document.querySelector(".classname").style.color = "black";
        // document.querySelector(".classname").style.backgroundColor = "yellow";
        // change multipöe in one line:
        // document.querySelector(".classname").style.cssText = "background-color: orange; color: dark blue;";
        document.querySelector(".classname").setAttribute("style","background-color: black; color: white;");
        
    }
    // changeStylesTuT();

    // -----------------  CHANGE STYLES TUT-----------------
    function toggleButtonTuT() {

        document.querySelector(".btnContainer").classList.remove("hidden");
        const BTN = document.querySelector(".btnContainer .btn");
        const TEXT = document.querySelector(".btnContainer .secretText");

        BTN.classList.remove ("hide");
        TEXT.classList.add ("hide");

        function toggleBtn(e) {

            e.preventDefault();
            BTN.classList.toggle("hide");
            TEXT.classList.toggle("hide");
        }

        // BTN.onclick = toggleBtn;
        BTN.addEventListener("click", toggleBtn, false);
        // multiple possible!
        // need to be afunction!!!
        BTN.addEventListener("click", function(){console.log("what up")}, false);
    }
    // toggleButtonTuT();
    
    // -----------------  TRANSFER CONTENT -----------------
    function altTextTut() {
        // take out the alt text and put it into a figcaption, that we create
            document.querySelector(".moon-pic").classList.remove("hidden");
    
            const IMAGEFIGURE   = document.querySelector(".moon-pic-figure");
            const IMAGE         = IMAGEFIGURE.querySelector("img");
            
            var altText         = IMAGE.getAttribute("alt");
            var captionElement  = document.createElement("figcaption");
    
            // supported by all browsers:
            var captionText = document.createTextNode(altText);
            captionElement.appendChild(captionText);
            IMAGEFIGURE.appendChild(captionElement);
    
            // shorter, but not supported by all browsers
            // captionElement.append(altText);
            // IMAGEFIGURE.append(captionElement);
    
            // all in one line
            // document.querySelector(".moon-pic-figure").appendChild(document.createTextNode(document.querySelector(".moon-pic-figure img").getAttribute("alt")));
    
            // clears the image alt to not repeat itself for much better search engine optimization
            IMAGE.setAttribute("alt","");
    
            console.log();
    
        }
        altTextTut();

}
// domTuts();



// -----------------QuerySelector Commands ------------
// ----------------------------------------------------
// ----------------------------------------------------
function selectorCommandsTut() {
// WRITTEN WITHOUT CONSOLE.LOG! need to rewrite or copy paste into console
    // gives out FIRST html instance matching with the searched name
    
    // .classname
    document.querySelector(".classname");
    // #id
    document.querySelector("#originalId");
    // creates an array of all targeted element with the attribute
    // ^ means beginning with
    document.querySelectorAll('a[href^="http"]');

    // creates an array with all of the elements with that classname
    document.querySelectorAll(".classname");
    // shows the content
    document.querySelector(".classname").innerHTML;
    // changes the content of the first object found with this class
    document.querySelector(".classname").innerHTML = "new Text inside first element declared with .classname";
   
    // shows the Content + declaration
    document.querySelector(".classname").outerHTML;
    // changes the content and html properties with this element
    document.querySelector(".classname").outerHTML = "<h1 class \"newClassname\">changed html & content</h1>";

    // returns a string with the Names of the clases attached to the first element found with this class
    document.querySelector(".classname").className;
    // returns a string with the Names of the clases attached to the first element found with this class
    document.querySelector(".classname").className = "newClassname";

    // returns a list with the Names of the clases attached to the first element found with this class
    document.querySelector(".classname").classList;
    // returns the name of the targeted class
    document.querySelector(".classname").classList[1];
    // checks if the element with the classname contains another class with the searched name
    document.querySelector(".classname").classList.contains("secondClassname");
    // replaces the class with another
    document.querySelector(".classname").classList.replace("secondClassname","replacedClassname");
    // adds a class to it
    document.querySelector(".classname").classList.add("addedClass");
    //  removes a class
    document.querySelector(".classname").classList.remove("secondClassname");
    // toggles between on and off (removes the class and adds it back again)
    document.querySelector(".classname").classList.toggle("secondClassname");

    // ------------------------ Elements Text--------------
    // ----------------------------------------------------

    var createHere = document.querySelector(".classname");
    var createdElement = document.createElement("h1");
    createdElement.innerHTML = "hola";
    createHere.appendChild(createdElement);

    // -------------------------- NODE --------------------
    // ----------------------------------------------------

    // Creates Text, wich can later be stored into Attributes
    document.createTextNode(altText);

    // ------------------------ Attributes ----------------
    // ----------------------------------------------------

    // creates an array of all targeted element with the attribute
    // ^ means beginning with
    document.querySelectorAll('element[href^="http"]');
    // finds out if the element has the attribute 
    document.querySelector(".target a").hasAttribute("href");
    // gives the value of that attribute
    document.querySelector(".target a").getAttribute("href");
    // finds the content assigned to that attribute
    document.querySelector(".target a").setAttribute("href","https://www.....de");
    // removes that attribute
    document.querySelector(".target a").removeAttribute("href");
    
    // -----------------------Change Styles ---------------
    // ----------------------------------------------------
    
    // to find out the style
    document.querySelector(".target a").style;
    // to apply a certain style to it
    document.querySelector(".target a").style.color = "blue";
    // to change the background color use camelCase
    document.querySelector(".classname").style.backgroundColor = "yellow";
    // to change multiple styles, changes the whole css Text
    document.querySelector(".classname").style.cssText = "background-Color: orange; color: dark blue;";

    // --------------------------Events -------------------
    // ----------------------------------------------------

    const BTN = document.querySelector(".btn");
    // without "()" so js doesnt run it when it sees it
    // ONLY ONE EVENTS AT A TIME WITH THIS METHOD!
    BTN.onclick = aFunction;
    // Possible to add mutltiple functions
    BTN.addEventListener("click", aFunction, false);
    BTN.addEventListener("click", anotherFunction, false);
}



// -------------------- LOOPS / INTERVAL -----------------
// ------------------------------------------------------
// ------------------------------------------------------
function loopsTut() {

//------------------------INTERVAL-----------------------
    // run function every 1000st second
    setInterval(runFunctionEvery, 1);
    // Stop --- an interval which hides inside a function:
    // declare outside the function
    var interval;
    function inter() {
        interval =  setInterval(runFunction, 10);
    }
    // stop outside the function
    clearInterval(interval);
    // Clear ---- the old interval
    // every time a new interval is started it gets a new Index number
    interval = null;
    
//------------------------ FOR LOOP -------------------------
    // simple circleloop
    // declares a variable; sets the requirenments to run/end; happening every loop
    for ( var i = 0; i <10; i++ ){
        console.log("run this");
    }
    // looping threw arrays
    for (let i = 0; i < array.length; i++) {
        if (!array[i].hasAttribute("target")){
            array[i].setAttribute("target","_blank");
        }
    }

//------------------------ WHILE LOOP -----------------------
    // can work with outside/inside declared and changing values
    // declares a value outside the loop
    var whileLoopNr = 0;
    // as long as (condition) do{ whats inside the brackets}
    while(whileLoopNr < 10){
        console.log("while condition, run this");
        whileLoopNr++;
    }
    // run the loop first,  and repeat if condition is complied
    do{
        console.log("run this first, if condition complied, repeat");
        whileLoopNr++;
    } while (whileLoopNr < 10);

    var keepGoing = true;
    while(keepGoing){
        console.log("...");
    if (condition) {
        keepGoing = false;
    }
    }


// BREAK / STOP / END: WHILE LOOP ------------
// terminates the whole loop

    // (true bolean) makes the loop run til infinity
    while(true){
        let randomNr = Math.floor(Math.random());
        // if a condition is complied STOP LOOP
        if (randomNr = 5) {
            // Breaks loop in place, code after "break" will not be used
            // doesnt continue the loop anymore
            break;
        }
        console.log("wont run after break");
    } //while(true)

// CONTINUE: WHILE LOOP -------------
// terminates only the iteration(wiederholung) of the loop
for (let i = 2; i<=10; i++) {

    if (i==5) {
        // continue jumps back to start and skipps the code underneath it and 
        continue;
    }
    // is skipped in case continue is evaluated
    console.log("skipped after continue");
} // for loop


} // loopsTut()

// example simple loop
function loopsExample() {
    for ( var i = 0; i <10; i++ ){
        console.log(i);
    }

    var whileLoopNr = 0;
    while(whileLoopNr < 10){
        console.log("while condition, run this");
        whileLoopNr++;
    }

}
// loopsExample();

// example finding prime numbers
function loopsExample2() {
    // until how much it will count
    const CEILING = 50;
    function primeTest(testValue) {
        // let the "isPrime" variable be true until it is prooven wrong
        let isPrime = true;
        // start at 2 and run the loop as many times as we tell in the function(variable) 
        // not by one, because dividing threw one will never leave a remainder
        //  the i from the loop wich runs till the CELING nr will be used as testValue
        // the tested value will be tested for its ramainder from the nr 2 to one smaller than its own number
        for ( let i = 2; i<testValue; i++ ) {
            // if the test value leaves no remainder even once its not a prime number!
            if ( testValue % i === 0 ) {
                // so set isPrime to false 
                isPrime = false;
            }
        } //for loop
        // return bolean if it is a prime number
        return isPrime;
    } // primeTest

    // loop wich holds the function with the loop inside
    // will run until the end number we declared in the CEILING variable
    // startig with two because one never leaves a remainder (restnumber)
    for (let i = 2; i<=CEILING; i++) {
        // every number until the end number will be tested if it has a remainder from 2 to its own number
        let result = primeTest(i);
        //  only console log the prime numbers, if it isnt one, start over (and skip the rest of the loopcode)
        if (result==false) {
            continue;
        }
        // is skipped in case continue is evaluated
        console.log(i + " is a prime number."+result);
    } // for loop


    // example:
    // CEILING = 5;
    // for i = 5,i<100 -> i = 2, i<5 > 5%2 = 1 = true
    // for i = 5,i<100 -> i = 3, i<5 > 5%3 = 2 = true
    // for i = 5,i<100 -> i = 3, i<5 > 5%4 = 1 = true

    // for i = 4,i<100 -> i = 2, i<4 > 4%2 = 0 = false (false for the rest of the loop)
    // for i = 4,i<100 -> i = 2, i<4 > 4%3 = 1 = sill false
}
