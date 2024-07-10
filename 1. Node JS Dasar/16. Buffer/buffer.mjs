// buffer ada di global jadi tidak perlu import secara explisit
// Mengimpor modul `Buffer` bawaan Node.js
// Buffer adalah struktur data biner yang memungkinkan manipulasi data biner dalam Node.js

// Membuat buffer dari string "fajri"
// Buffer menyimpan representasi biner dari string tersebut.
const buffer = Buffer.from("fajri");
// Mengonversi buffer kembali ke string dan mencetaknya
console.info(buffer.toString()); // Output: fajri

// Membalikkan urutan byte dalam buffer
// Setelah dipanggil, buffer yang awalnya menyimpan "fajri" dalam urutan byte akan
// dibalikkan menjadi irjaf.
buffer.reverse();
// Mengonversi buffer yang telah dibalikkan kembali ke string dan mencetaknya
console.info(buffer.toString()); // Output: irjaf

// * PENJELASAN:
/* 
Buffer *adalah struktur data khusus dalam Node.js yang memungkinkan manipulasi data biner. Buffer 
biasanya digunakan untuk menangani data mentah dari sumber-sumber seperti file, jaringan, atau protokol 
biner lainnya.
*/

// * Buffer menyimpan data dalam bentuk biner