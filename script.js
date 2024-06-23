//Task 1
// Comparing two JSON objects
  let obj1 = {name: "Person 1", age:5};
  let obj2 = {age:5, name: "Person 1"};
  // Step 1: converting the objects to stringify and sort
  let str1 = JSON.stringify(obj1,Object.keys(obj1).sort())
  console.log(str1);
  let str2 = JSON.stringify(obj2,Object.keys(obj2).sort())
  console.log(str2);
// compare
if (str1===str2){
    console.log("The JSON objects are equal");
}
else{
    console.log("The JSON objects are not equal");
}


// TASK 2
//XMLHttpRequest

//Creating a xhr object
var xhr = new XMLHttpRequest();

// opening a connection to server
xhr.open("GET", "https://restcountries.com/v3.1/all", true)

//sending request
xhr.send();

//server response
xhr.onload = function(){
    var data = xhr.response;
    //console.log(data);
    var result = JSON.parse(data)
    //console.log(result);
    for( var i=0; i<result.length;i++){
        // task 2 => Displaying all the country flags
       console.log(result[i].flags.png)
       
    }

}

// TASK 3 
//Creating a xhr object
var xhr1 = new XMLHttpRequest();

// opening a connection to server
xhr1.open("GET", "https://restcountries.com/v3.1/all", true)

//sending request
xhr1.send();

//server response
xhr1.onload = function(){
    var data1 = xhr1.response;
    //console.log(data);
    var result1 = JSON.parse(data1)
    for( var i=0; i<result1.length;i++){
       // task 3 => printing the countrynames, regions, sub-regions, populations
       console.log("Countryname:"+" "+result1[i].name.common, "Region:"+ " "+result1[i].region, "Subregion:"+" "+result1[i].subregion, "Population:"+" "+result1[i].population)
       
    }
}
