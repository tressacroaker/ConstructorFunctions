//Contructer Functions

//1. Create an array called bands with 3 objects in it. Each of them describes a music band. Each object should have a name, genre, numberOfPerformers, and numberOfGroupies.

var bands = [{
  name: "King Spider",
  genre: "Death Metal",
  numberOfPerformers: 4,
  numberOfGroupies: 57
},{
  name: "FlipSmash",
  genre: "Punk",
  numberOfPerformers: 3,
  numberOfGroupies: 1003
},{
  name: "Steam",
  genre: "Bluegrass",
  numberOfPerformers: 12,
  numberOfGroupies: 500
}];

//Now create a constructor function called Band. Have it take in a name, genre, numberOfPerformers, and numberOfGroupies. Set the keys to have the value of the parameters using the this keyword.

var Band = function(name, genre, numberOfPerformers, numberOfGroupies) {
    this.name: name;
    this.genre: genre;
    this.numberOfPerformers: numberOfPerformers;
    this.numberOfGroupies: numberOfGroupies;
};

//Now create those same bands you made before using the constructor function Band using the new keyword. Plug in the values for each of the object keys as argumeters.

var band1 = new Band("King Spider", "Death Metal", 4, 57);
var band2 = new Band("FlipSmash", "Punk", 3, 1003);
var band3 = new Band("Steam", "Bluegrass", 12, 500);

//Now create a new array called newBands and push each of the objects that you made into that array.

var newBands = [band1, band2, band3];

//Alright, you have created new objects using a constructor function. Let's say we want to add a new key to the constructor function. To do so, go ahead and create a method called bandInfo using the prototype methos for the Band constructor. Let's have the bandInfo method alert the band's name and their music genre.

Band.prototype.bandInfo = function(){
  alert(this.name + " is a " + this.genre + " band.");
};
