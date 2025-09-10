const arr = ["a", "b", "c",1,3,4];

arr.filter((item) => typeof item === "number").map((item) => item * 2)
.forEach((item) => console.log(item));

var cars = ['bmw', 'audi', 'ford'];

for(i=0 ; i<cars.length ; i++){
    console.log(cars[i]);
}

for(let car of cars){
    console.log(car);
}

for(let index in cars){
    console.log(cars[index]);
}