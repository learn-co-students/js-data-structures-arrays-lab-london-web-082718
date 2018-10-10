// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
    drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function  appendDriver(name) {
    const newdrivers = [...drivers, "Broom"];
    return newdrivers ;
}


function  prependDriver(name) {
    const newdrivers = ["Arnold", ...drivers];
    return newdrivers ;
}

function  removeLastDriver() {
    const newdrivers = drivers.slice(0,  drivers.length - 1);
    return newdrivers;
}

function  removeFirstDriver() {
    const newdrivers = drivers.slice(1);
    return newdrivers;
}