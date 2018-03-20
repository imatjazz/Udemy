/*
console.log('i m running');


function game(){
    var score = Math.round(Math.random()*10);
    console.log(score>=5);
};
game();
//console.log(score);

(function(goodLuck){
    var score = Math.round(Math.random()*10);
    console.log(score>=5 - goodLuck);
})(goodLuck);
*/


//====================Lecture: CLOSURES ======================================================
/*
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

retirement(70)(1992);


function interviewQuestion(job){    
    return function(name){
        if (job === 'teacher'){
            console.log('What subject do you teach, '+name+' ?');
        } else if (job === 'designer'){
            console.log(name+' ,can you explain what UX design is?');
        } else {
            console.log('Hello '+name+' , what do you do?');
        }
    }
}

interviewQuestion('teacher')('Sam');
interviewQuestion('designer')('Dylan');
interviewQuestion('developer')('Tim');
*/

//====================Lecture: Bind, call and apply ======================================================

var john = {
        name: 'John',
        age: 26,
        job: 'teacher',
        presentation: function(style, timeOfDay){
            if (style === 'formal'){
                console.log('Good ' + timeOfDay + 
                            ', Ladies and gentlement! I\'m '+ this.name +
                            ', I\'m a ' + this.job +
                            ' and I\'m ' + this.age + ' years old.');
            } else if (style === 'friendly'){
                console.log('Hey!, What\'s up? I\'m '+ this.name +
                            ', I\'m a ' + this.job +
                            ' and I\'m ' + this.age + ' years old. Have a nice '+
                            timeOfDay+'!');
            }
        }
    };

var emily = {
        name: 'Emily',
        age: 35,
        job: 'designer'
};

john.presentation('formal','morning');
john.presentation.call(emily,'friendly','afternoon');

var johnFriendly = john.presentation.bind(john,'friendly');
johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('night');

    //other example of using bind
    var years = [1990, 1965, 1937, 2005, 1998];

    function arrayCalc(arr, fn){
        var arrRes =[];
        for(var i=0; i<arr.length;i++){
            arrRes.push(fn(arr[i]));
        }
        return arrRes;
    }

    function calculateAge(el){
        return 2016 - el;
    }

    function isFullAge(limit, el){
        return el >=limit;
    }

    var ages = arrayCalc(years,calculateAge);

    var fullJapan = arrayCalc(ages,isFullAge.bind(this,20));
    console.log(ages);
    console.log(fullJapan);