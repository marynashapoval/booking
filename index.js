let rooms = document.getElementById('rooms');
let adult = document.getElementById('adults');
let children = document.getElementById('children');

let counterRoom = 0;
let counterAdult = 0;
let counterChildren = 0;

let addRoom = () => counterRoom >= 0 ? rooms.value = ++counterRoom : 0;
let minusRoom = () => counterRoom > 0 ? rooms.value = --counterRoom : 0; 

let addAdult = () => counterAdult >= 0 ? adult.value = ++counterAdult : 0;
let minusAdult = () => counterAdult > 0 ? adult.value = --counterAdult : 0; 

let addChildren = () => counterChildren >= 0 ? children.value = ++counterChildren : 0;
let minusChildren = () => counterChildren > 0 ? children.value = --counterChildren : 0; 

document.addEventListener('keyup', function (e) {}, false);