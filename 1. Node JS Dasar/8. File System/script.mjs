import fs from "fs"; // Mengimpor modul 'fs' (file system) untuk operasi file

// Membaca isi file 'file-system.mjs' ke dalam buffer
const buffer = fs.readFileSync("file-system.mjs");

// Mengubah isi buffer (data biner) menjadi string dan mencetaknya ke konsol
console.info(buffer.toString());

// Menulis string 'Hello World' ke dalam file baru bernama 'temp.txt'
fs.writeFileSync("temp.txt", "Hello World");
