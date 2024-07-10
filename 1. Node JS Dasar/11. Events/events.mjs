import { EventEmitter } from "events";

// Membuat instance EventEmitter
const emitter = new EventEmitter();

// Menambahkan listener untuk event "hello"
// addListener(eventName, listener)
emitter.addListener("hello", (name) => {
  console.info(`Hello ${name}`);
});

emitter.addListener("hello", (name)=>{
  console.info(`yo apa kabar bro ${name}`)
})

// Menambahkan listener lain untuk event "hello"
emitter.addListener("hello", (name) => {
  console.info(`Halo ${name}`);
});

// Memancarkan event "hello" dengan argumen "fajri"
// emit(eventName, ...args);
emitter.emit("hello", "fajri");
