"use strict";

const prems = require("../index.js");

let i=0;

prems(["./d1", "./d2"], "hello.txt").then(console.log.bind(this, "coucou"));
prems(["./d1", "./d2"], "hello.txt").then(console.log.bind(this, i++));
prems(["./d1", "./d2"], "world.txt").then(console.log.bind(this, i++));
prems(["./d2", "./d1"], "hello.txt").then(console.log.bind(this, i++));
prems(["./d2", "./d1"], "world.txt").then(console.log.bind(this, i++));
prems(["./d2", "./d1"], "notfound.txt").then(console.log.bind(this, i++));
prems(["./d1", "./d2"], "nested").then(console.log.bind(this, i++));
prems(["./d1", "./d2"], "nested/test.txt").then(console.log.bind(this, i++));
prems(["./d1", "./d2"], "notfounddir").then(console.log.bind(this, i++));

prems(["./d1", "./d2"], "hello.txt", console.log.bind(this, "BC"));
