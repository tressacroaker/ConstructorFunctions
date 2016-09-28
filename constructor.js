//Contructer Functions

//1. Create an array called bands with 3 objects in it. Each of them describes a music band. Each object should have a name, genre, numberOfPerformers, and numberOfGroupies.

var bands = [

  var band1 = {
    name: "Blake Shelton" ,
    genre: "Country",
    numberOfPerformers: 1,
    numberOfGroupies: 7
  },

  var band2 = {
    name: "Adam Levine" ,
    genre: "Pop",
    numberOfPerformers: 1,
    numberOfGroupies: 10
  },
  var band3 = {
    name: "Shakira" ,
    genre: "Latin",
    numberOfPerformers: 1,
    numberOfGroupies: 5
  },

];


//Now create a constructor function called Band. Have it take in a name, genre, numberOfPerformers, and numberOfGroupies. Set the keys to have the value of the parameters using the this keyword.

var Band = function (name, genre, numberOfPerformers, numberOfGroupies) {
  this.name = name;
  this.genre = genre;
  this.numberOfPerformers = numberOfPerformers;
  this.numberOfGroupies = numberOfGroupies;
};

//Now create those same bands you made before using the constructor function Band using the new keyword. Plug in the values for each of the object keys as argumeters.

var band1 = new Band ("Blake Shelton", "Country", 1, 7);
var band2 = new Band ("Adam Levine", "Pop", 1, 10);
var band3 = new Band ("Shakira", "Latin", 1, 5);

//Now create a new array called newBands and push each of the objects that you made into that array.

var newBands = [];
newBand.push(new Band());

//Alright, you have created new objects using a constructor function. Let's say we want to add a new key to the constructor function. To do so, go ahead and create a method called bandInfo using the prototype method for the Band constructor. Let's have the bandInfo method alert the band's name and their music genre.

Band.prototype.bandInfo = function () {
  alert("The band's name is " + this.name + ". Their music genre is " + this.genre + ".");
};

Band.bandInfo();
