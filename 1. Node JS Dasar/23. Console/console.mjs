import { Console } from "console";
import fs from "fs";

// Membuat stream untuk menulis ke file application.log
const logFile = fs.createWriteStream("application.log");

// Membuat objek Console baru dengan stdout dan stderr diarahkan ke logFile
const log = new Console({
  stdout: logFile,
  stderr: logFile,
});

// Menulis pesan log ke file menggunakan metode info dan error
log.info("hello world");
log.error("ups");

// Mendefinisikan objek Person
const Person = {
  firstName: "fajri",
  lastName: "farid",
};

// Menulis tabel yang berisi properti dari objek Person ke file log
log.table(Person);

// * outputnya ada di file baru

/*
  Penjelasan Kode:

  1. Import modul 'console' dan 'fs':
     - Modul 'console' digunakan untuk membuat objek Console khusus.
     - Modul 'fs' digunakan untuk bekerja dengan sistem file di Node.js.

  2. Membuat stream untuk menulis ke file:
     - `const logFile = fs.createWriteStream("application.log");` membuat stream penulisan ke file 
       bernama "application.log".
     - Semua output log akan ditulis ke file ini.

  3. Membuat objek Console baru:
     - `const log = new Console({ stdout: logFile, stderr: logFile });` membuat objek Console baru 
       dengan stdout dan stderr diarahkan ke logFile.
     - Ini memungkinkan kita untuk menulis log ke file alih-alih konsol standar.

  4. Menulis pesan log:
     - `log.info("hello world");` menulis pesan log dengan tingkat informasi ke file log.
     - `log.error("ups");` menulis pesan log dengan tingkat kesalahan ke file log.

  5. Mendefinisikan objek Person:
     - `const Person = { firstName: "fajri", lastName: "farid" };`
     - Objek `Person` memiliki dua properti: `firstName` dan `lastName`.

  6. Menulis tabel yang berisi properti dari objek Person:
     - `log.table(Person);` menulis tabel yang berisi properti dari objek `Person` ke file log.
     - Metode `table` menampilkan objek dalam format tabel yang mudah dibaca.

  Kesimpulan:
  - Kode ini menunjukkan cara menggunakan objek Console khusus untuk menulis log ke file di Node.js.
  - Dengan mengarahkan stdout dan stderr ke file, kita dapat menyimpan log aplikasi secara terpisah 
    dari output konsol standar.
  - Metode `info`, `error`, dan `table` dari objek Console digunakan untuk menulis berbagai jenis 
    pesan log ke file.
*/
