import fs from "fs";
import zlib from "zlib";

// Membaca konten dari file "zlib-compress.mjs.txt" dan menyimpannya dalam variabel source
const source = fs.readFileSync("zlib-compress.mjs.txt");

// Mendekompres data yang dibaca dari file menggunakan zlib.unzipSync
const result = zlib.unzipSync(source);

// Mengonversi hasil dekompresi ke string dan mencetaknya ke konsol
console.info(result.toString());

/*
  Penjelasan Kode:

  1. Import modul 'fs' dan 'zlib':
     - Modul 'fs' digunakan untuk bekerja dengan sistem file di Node.js.
     - Modul 'zlib' digunakan untuk kompresi dan dekompresi data menggunakan algoritma zlib.

  2. Membaca konten dari file:
     - `const source = fs.readFileSync("zlib-compress.mjs.txt");` membaca konten dari file 
       "zlib-compress.mjs.txt" secara sinkron dan menyimpannya dalam variabel `source`.
     - `readFileSync` digunakan untuk membaca file secara sinkron, sehingga eksekusi kode akan berhenti 
       sampai file selesai dibaca.

  3. Mendekompres data:
     - `const result = zlib.unzipSync(source);` mendekompres data yang dibaca dari file menggunakan 
       metode `unzipSync` dari modul `zlib`.
     - `unzipSync` adalah metode sinkron yang digunakan untuk mendekompres data yang telah dikompresi 
       menggunakan zlib.

  4. Mengonversi hasil dekompresi ke string dan mencetaknya:
     - `console.info(result.toString());` mengonversi buffer hasil dekompresi menjadi string dan 
       mencetaknya ke konsol.
     - `toString()` digunakan untuk mengonversi buffer menjadi string dengan encoding default ("utf8").

  Kesimpulan:
  - Kode ini menunjukkan cara membaca konten dari file, mendekompres data menggunakan modul `zlib`, 
    dan mencetak hasil dekompresi ke konsol.
  - Dengan menggunakan `fs.readFileSync`, kita dapat membaca file secara sinkron, dan `zlib.unzipSync` 
    memungkinkan kita untuk mendekompres data secara sinkron.
  - Hasil dekompresi diubah menjadi string dan dicetak ke konsol untuk verifikasi.
*/
