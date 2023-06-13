const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "Accio Job",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
let team = players;
players.pop();
let team1 = players.push("na");

person.name = "Accio Job"
person.age = 25
let cap1 = person.name; 

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
