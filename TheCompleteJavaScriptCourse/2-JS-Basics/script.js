console.log("Hello Universe")
//Lecture: variables
/*
var name = 'Tim';
console.log(name);

var lastName = 'Do';
console.log(lastName);

var age = 34;
console.log(age);

var fullAge = true;
console.log(fullAge);


//Lecture: variables 2
var name = 'Tim';
var age = 34;
console.log(name + age);

var job, isMarried;

//var lastName =  prompt('What is the last name?');
//console.log(lastName);

//alert('be carefull');

//Lecture: Operators
var now = 2018;
var birthYear = now - 34;

birthYear = now - 34*2;

console.log(birthYear++);

//Lecture: if/else statements
var name = 'John';
var age = 20;
var isMarried = 'no';

if (isMarried === 'yes'){
    console.log(name + ' is married');
} else {
    console.log(name +' will hopefully marry soon:)');
}

*/

//Lecture: Function
function calAge(yearOfBirth){
    var age = 2018 - yearOfBirth;
    return age;
}

var ageJohn = calAge(1990);


//LEcture: Arrays

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990,1969,1983);

console.log(names[0]);

var john = ['John', 'Do',1983,'investors',true];

john.push('blue');
john.unshift('Mr');
john.pop();
john.shift();

console.log(john);

//alert(john.indexOf('Do'));

//Lecture: Objects

var tim ={
    name: 'Tim',
    lastName: 'Do',
    yoB:1983,
    job: 'entrepreneur',
    isMarried: true
}

console.log(tim);
console.log(tim.yoB);

tim.lastName ='Ddoo';
tim['job']= 'investor';

console.log(tim);
    //*** Another way to create Objects********** */
    var dylan = new Object();
    dylan.name = 'Dylan';
    dylan.lastName = 'Do';
    dylan['dob']=2009;
    dylan['job']='student';
    dylan.isMarried = false;

    console.log(dylan);

// Lecture: Objects and methods

var dylan = {
    name: 'Dylan',
    lastName: 'Do',
    dob: 2009,
    job: 'student',
    isMarried: false,
    family: ['warren','kayden','tim'],
    calculateAge: function(dob){
        return 2018 - dob;
    }
};

console.log(dylan.calculateAge(dylan.dob));

dylan.calculateAge = function(){
    return 2018 - this.dob;
}

console.log('other way '+ dylan.calculateAge());

//Lecture: Loops

    // For loops
    for (var i =0; i<10; i++){
        console.log(i);
    }

    var names = ['a','b','c','d','e'];
    for (var i =0; i < names.length; i++){
        console.log(names[i]);
    }

    for(var i = names.length -1; i>=0; i--){
        console.log(names[i]);
    }

    // while loops
    var i = 0;
    while (i < names.length) {
        console.log(names[i]);
        i++;
    }

    for (var i = 1; i<= 5; i++){
        console.log(i);

        if (i===3){
            break;
        }
    }

    for (var i = 1; i<= 5; i++){
        if (i===3){
            continue;
        }

        console.log(i);
    }