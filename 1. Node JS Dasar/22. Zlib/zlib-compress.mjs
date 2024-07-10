import fs from "fs";
import zlib from "zlib";

// Membaca konten dari file "zlib.mjs" dan menyimpannya dalam variabel source (buffer)
const source = fs.readFileSync("./22. Zlib/zlib.mjs");
console.info("Bentuk asli (buffer):");
console.info(source);

console.info("");

console.info("Konversi ke string:");
console.info(source.toString());

// Mengompres data menggunakan zlib.gzipSync
const result = zlib.gzipSync(source);
console.info("Hasil kompresi (buffer):");
console.info(result);

// Mengonversi hasil kompresi ke string dan mencetaknya
console.info("Hasil kompresi (string):");
console.info(result.toString());

// Menyimpan hasil kompresi ke file baru "zlib-compress.mjs.txt"
fs.writeFileSync("zlib-compress.mjs.txt", result);

/*
  Penjelasan Kode:

  1. Import modul 'fs' dan 'zlib':
     - Modul 'fs' digunakan untuk bekerja dengan sistem file di Node.js.
     - Modul 'zlib' digunakan untuk kompresi dan dekompresi data menggunakan algoritma zlib.

  2. Membaca konten dari file:
     - `const source = fs.readFileSync("./22. Zlib/zlib.mjs");` membaca konten dari file "zlib.mjs" 
       dan menyimpannya dalam variabel `source`.
     - `readFileSync` digunakan untuk membaca file secara sinkron, sehingga eksekusi kode akan berhenti 
       sampai file selesai dibaca.

  3. Konversi ke string:
     - `console.info(source.toString());` mengonversi buffer `source` menjadi string dan mencetaknya 
       ke konsol.
     - `toString()` digunakan untuk mengonversi buffer menjadi string dengan encoding default ("utf8").

  4. Mengompres data:
     - `const result = zlib.gzipSync(source);` mengompres data yang dibaca dari file menggunakan 
       metode `gzipSync` dari modul `zlib`.
     - `gzipSync` adalah metode sinkron yang digunakan untuk mengompres data menggunakan algoritma zlib.

  5. Mengonversi hasil kompresi ke string dan mencetaknya:
     - `console.info(result.toString());` mengonversi buffer hasil kompresi menjadi string dan 
       mencetaknya ke konsol.
     - Hasil kompresi kemudian diubah menjadi string dan dicetak untuk verifikasi.

  6. Menyimpan hasil kompresi ke file baru:
     - `fs.writeFileSync("zlib-compress.mjs.txt", result);` menulis hasil kompresi ke file baru 
       dengan nama "zlib-compress.mjs.txt".
     - File ini berisi data yang telah dikompresi menggunakan zlib.

  Kesimpulan:
  - Kode ini menunjukkan cara membaca konten dari file, mengompresinya menggunakan modul `zlib`, dan 
    menyimpan hasil kompresi ke file baru.
  - Dengan menggunakan `fs.readFileSync` untuk membaca file secara sinkron dan `zlib.gzipSync` untuk 
    mengompresi data, kita dapat melakukan operasi tersebut dalam urutan yang teratur.
  - Hasil kompresi diubah menjadi string untuk keperluan verifikasi dan dicetak ke konsol sebelum 
    disimpan ke file.
*/
