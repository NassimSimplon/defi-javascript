////exersise 1
var a = 1,
b = 2;

var c = a,
a = b,
b = c;

console.log( "a =" + a, "b =" + b );

///exersice2

var nom = "toto",
age = 30,
homme = true;

console.log( nom + " " + age + " " + homme);


/////exersice 3
 


var n = prompt(" enter un nombre" );

var f = n * n ;

console.log(f);

//////exersice---------4

function som(l,k){

"use strict";

    return l + k;
}

som();
console.log(som(5,6));


/////exersice 5

function convert(h){

    "use strict";

    return h * 60;
}
 convert();
 
 console.log(convert(5));


 ///exersice 6



 function ret(p){

     "use strict";
     return p + 1;

 }
ret();
console.log(ret(7));


//////////exersice 7


function surfac(base,haut){
"use strict";
return (base * haut) / 2;

}

surfac();

console.log(surfac(7,3));

/////////exersice8

function reversing(stringi) {
    "use strict";
    var nass = stringi.split(""); 
 
    var khlifi = nass.reverse(); 
 
    var final = khlifi.join("");
    
    return final; 
}
 
reversing("hello");

console.log(reversing("hello"));



////exersice9

var array = [3 , 6, 2, 56, , 5, 89, ];
var biggest = [0];

for (i=0; i<=biggest;i++){
    if (array[i]>biggest) {
        var biggest=array[i];
    }
}

console.log(biggest);



/////////exersice10

var arr = [ 5, 6, 7, 8 ,3];

function take(){
    "use strict";
    var first = arr[0];
    return first;
}

take();

console.log(take());

///exersice11



////////exersice 12


function modi(second, third) {
 "use strict";
  

 var last = second%third;
 return last;
}


console.log(modi(10, 5));



/////exersice 13


function calci(a, b){
   
    "use strict";
    if ((a + b) < 100){
        return true;
    } else {
        return false;
    }
}

console.log(calci(5, 6));


/////exersice 14

function heure(h){
    "use strict";
    return h * 3600;

}


console.log(heure(1));


/////exersice 15

function calc(q){
   
    "use strict";
    if (q < 0 || q == 0){
        return true;
    } else {
        return false;
    }
}


console.log(calc(5));



///////exersice 16




function calci(a, b){
   
    "use strict";
    if (a === b){
        return true;
    } else {
        return false;
    }
}

console.log(calci(5, "6"));







/////exersice 17

function find(h){

    
    if ( h / 5 === 0)
    {
     return true
    }
    else
    {
     return false
    }
    

}

console.log(find(6));


/////exersice 18



function vertis(h, m){
 if (h){
     return h * 3600;
 }else {
     return m * 60;
 }

  


}
vertis(7,2)

console.log(vertis());



//////////////exersice 19


///////exersice20


var ar = [ 6, 2, 6, , 5, 8];
var cas = ar.pop();
console.log(cas);


////////exersice 21


function ega(a,b){
   
if (typeof a == typeof b){
    return true
} else {
    return false
}


}
console.log(ega(1, "5"));


///exersice22


function test(l){
  
    "use strict";
    
if (a = ""){
    return true;

} else{
    return false;
}

}

console.log(test(""));