// import { os } from "os"; // tidak usah pake "{ }"
const os = require("os");
// nodejs.org/dist/latest-v16.x/docs/api/os.html

https: console.info(os.platform());
console.table(os.cpus());
console.info(os.freemem()); // memory itu ram

// file harus tipenya tidak harus ".mjs",
// sudah bisa "js"
